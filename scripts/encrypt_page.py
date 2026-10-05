#!/usr/bin/env python3
"""Wrap a built page in a password gate.

Usage: PLAYTEST_PASSWORD=... python3 scripts/encrypt_page.py index.html _site/index.html

The page is encrypted (AES-256-GCM, key from PBKDF2-SHA256), so the published file
cannot be read without the password. The browser asks for it, decrypts the page
and runs it. A correct password is remembered on that device, so reloads open
straight into the game. Images are not encrypted.

Needs the `cryptography` package (pip install cryptography).
"""
import base64, json, os, sys
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

ITERATIONS = 310000

GATE = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bloodlinez</title><meta name="robots" content="noindex,nofollow">
<style>
:root{--bg:#f6f1ea;--ink:#2a2124;--muted:#6f6266;--line:#d9cfc4;--accent:#7a1f2b;--card:#fffdf9}
@media (prefers-color-scheme:dark){:root{--bg:#17131a;--ink:#efe7e2;--muted:#b3a7a3;--line:#3a3138;--accent:#c95a68;--card:#211b23}}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:var(--ink);font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;padding:16px}
form{width:100%;max-width:360px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:28px 24px}
h1{margin:0 0 4px;font:600 24px Georgia,serif;color:var(--accent)}p{margin:0 0 18px;color:var(--muted);font-size:14.5px}
label{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
input{width:100%;font:inherit;padding:10px 12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink)}
button{margin-top:14px;width:100%;font:inherit;font-weight:600;padding:10px;border:0;border-radius:8px;background:var(--accent);color:#fff;cursor:pointer}
button:disabled{opacity:.6;cursor:wait}#msg{min-height:20px;margin:10px 0 0;font-size:13.5px;color:var(--accent)}
</style></head><body>
<form id="gate" autocomplete="off"><h1>Bloodlinez</h1><p>A playtest build. Enter the password you were given.</p>
<label for="pw">Password</label><input id="pw" type="password" autofocus required>
<button id="go">Open</button><div id="msg" role="status" aria-live="polite"></div>
<noscript><p>This page needs JavaScript.</p></noscript></form>
<script>
const P=__PAYLOAD__;
const b64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function open_(pw){
  const base=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey']);
  const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:b64(P.salt),iterations:P.iter,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['decrypt']);
  const html=new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:b64(P.iv)},key,b64(P.data)));
  try{localStorage.setItem('bloodlinez-pass',pw)}catch(e){}
  document.open();document.write(html);document.close();
}
const f=document.getElementById('gate'),msg=document.getElementById('msg'),btn=document.getElementById('go');
f.addEventListener('submit',async e=>{e.preventDefault();btn.disabled=true;msg.textContent='Opening…';
  try{await open_(document.getElementById('pw').value)}catch(err){btn.disabled=false;msg.textContent='That password is not right.';}});
(async()=>{let pw=null;try{pw=localStorage.getItem('bloodlinez-pass')}catch(e){}
  if(pw){try{await open_(pw)}catch(e){try{localStorage.removeItem('bloodlinez-pass')}catch(_){}}}})();
</script></body></html>
"""


def encrypt(html: str, password: str) -> str:
    salt, iv = os.urandom(16), os.urandom(12)
    key = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=ITERATIONS).derive(password.encode())
    data = AESGCM(key).encrypt(iv, html.encode(), None)
    payload = {'salt': base64.b64encode(salt).decode(), 'iv': base64.b64encode(iv).decode(),
               'iter': ITERATIONS, 'data': base64.b64encode(data).decode()}
    return GATE.replace('__PAYLOAD__', json.dumps(payload))


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    pw = os.environ.get('PLAYTEST_PASSWORD', '')
    if not pw:
        sys.exit('PLAYTEST_PASSWORD is not set. Refusing to publish the game without a password.')
    src, dst = sys.argv[1], sys.argv[2]
    out = encrypt(open(src, encoding='utf8').read(), pw)
    os.makedirs(os.path.dirname(os.path.abspath(dst)), exist_ok=True)
    open(dst, 'w', encoding='utf8').write(out)
    print(f'Encrypted {src} -> {dst} ({len(out) // 1024} KB)')
