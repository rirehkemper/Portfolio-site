const fs = require('fs');
const path = require('path');
const { createGenerator, presetUno } = require('unocss');

const out = path.resolve(process.cwd(), 'public', 'unocss.css');

async function build() {
  const uno = createGenerator({ presets: [presetUno()] });
  // Collect the content from src for scanning
  const srcDir = path.resolve(process.cwd(), 'src');
  const files = [];

  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else if (/\.(js|ts|jsx|tsx|html|css)$/.test(name)) files.push(full);
    }
  }

  walk(srcDir);

  const code = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
  const { css } = await uno.generate(code, { preflights: true });
  fs.writeFileSync(out, css, 'utf8');
  console.log('Wrote', out);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
