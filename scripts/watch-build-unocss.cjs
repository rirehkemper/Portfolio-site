const chokidar = require('chokidar');
const { spawn } = require('child_process');
const path = require('path');

const build = () => {
  const p = spawn(process.execPath, [path.resolve(__dirname, 'build-unocss.cjs')], { stdio: 'inherit' });
  p.on('exit', (code) => {
    if (code !== 0) console.error('build-unocss failed with', code);
  });
};

const watcher = chokidar.watch('src', { ignored: /node_modules/ });
watcher.on('all', (ev, p) => {
  console.log('change', ev, p, '— rebuilding unocss');
  build();
});

// initial build
build();
