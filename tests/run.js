// Aggregate runner: assertions, crashes, empty output and timeouts all fail CI.
const {spawnSync}=require('child_process');
const suites=['e2e','assets','layout','tree','guide','records','playtest','analyse','gate','blind','first-hour'];
let failed=0;
for(const suite of suites){
 const r=spawnSync(process.execPath,[`tests/${suite}.js`],{encoding:'utf8',timeout:150000,env:process.env});
 const output=(r.stdout||'')+(r.stderr||'');process.stdout.write(output);
 const ok=r.status===0&&!r.error&&!/FAILURES:|^FAIL\s/m.test(output)&&output.includes('ALL PASS');
 console.log(`${suite}: ${ok?'PASS':'FAIL'}`);if(!ok)failed++;
}
console.log(`${suites.length-failed}/${suites.length} suites passed`);process.exitCode=failed?1:0;
