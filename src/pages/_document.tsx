import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Load compiled Tailwind early */}
        <link rel="stylesheet" href="/tailwind.css" />
      </Head>
      <body className="bg-black text-gray-100 pt-24">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
