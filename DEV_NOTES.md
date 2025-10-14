# Dev notes

This repo precompiles Tailwind to `public/tailwind.css` to avoid Next's runtime invocation in dev or build.

Commands:

- npm install
- npm run build:tailwind
- npm run dev
- Powershell: $env:PORT=3000; npm run dev
- npm run dev:3000 (powershell script added)

public/tailwind.css is ignored by default.
