import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" className="text-[clamp(10px,_1vw,_13px)]">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/icons8-ice-skate-color-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/icons8-ice-skate-color-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/icons8-ice-skate-color-96.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
