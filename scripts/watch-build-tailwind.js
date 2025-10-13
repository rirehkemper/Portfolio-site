const { spawn } = require('child_process');
const chokidar = require('chokidar');
const path = require('path');

const watcher = chokidar.watch([
  path.resolve(__dirname, '../src/app/globals.css'),
  path.resolve(__dirname, '../tailwind.config.js'),
], { ignoreInitial: true });

function build() {
  const proc = spawn(process.execPath, [path.resolve(__dirname, './build-tailwind.js')], { stdio: 'inherit' });
  proc.on('close', (code) => {
    if (code !== 0) console.error('build-tailwind exited with', code);
  });
}

console.log('Watching Tailwind input files for changes...');
build();
watcher.on('change', (file) => {
  console.log('Change detected:', file);
  build();
});
