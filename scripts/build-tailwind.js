const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

async function build() {
  const inputPath = path.resolve(__dirname, '../src/app/globals.css');
  const outPath = path.resolve(__dirname, '../public/tailwind.css');

  const css = fs.readFileSync(inputPath, 'utf8');

  const result = await postcss([tailwind, autoprefixer]).process(css, {
    from: inputPath,
    to: outPath,
  });

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, result.css, 'utf8');
  console.log('Wrote', outPath);
}

build().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
