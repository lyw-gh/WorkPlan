const { spawn } = require('child_process');
const path = require('path');

const nodeExe = 'C:\\Users\\lyw\\AppData\\Roaming\\TRAE SOLO CN\\ModularData\\ai-agent\\vm\\tools\\node\\node.exe';
const surgeJs = 'C:\\Users\\lyw\\AppData\\Roaming\\TRAE SOLO CN\\ModularData\\ai-agent\\vm\\tools\\node\\node_modules\\surge\\lib\\surge.js';
const projectDir = 'C:\\Users\\lyw\\AppData\\Roaming\\TRAE SOLO CN\\ModularData\\ai-agent\\work-mode-projects\\6aaf6763cbc03535d4f653cc';

const child = spawn(nodeExe, [surgeJs, './', 'paiban-app.surge.sh'], {
  cwd: projectDir
});

let step = 0;
const inputs = ['3863014145@qq.com\n', 'Paiban@2024\n', '\n'];

child.stdout.on('data', (data) => {
  process.stdout.write(data);
  if (step < inputs.length) {
    setTimeout(() => {
      child.stdin.write(inputs[step]);
      step++;
    }, 800);
  }
});

child.stderr.on('data', (data) => {
  process.stderr.write(data);
});

child.on('close', (code) => {
  console.log(`\nSurge exited with code ${code}`);
  process.exit(code);
});
