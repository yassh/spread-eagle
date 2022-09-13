import type { AppProps } from "next/app"
import { useEffect } from "react"
import { GoogleAnalytics } from "~/components/GoogleAnalytics"
import "~/styles/globals.css"

// ☞ https://fontawesome.com/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // マウスホイールで数値が増減するのを防ぐ
    // ☞ https://github.com/facebook/react/issues/24986#issuecomment-1240470376
    const handleWheel = (event: WheelEvent) => {
      const target = event.composedPath()[0] as HTMLElement
      if (target.matches('input[type="number"]')) {
        target.blur()
      }
    }

    document.body.addEventListener("wheel", handleWheel)
    return () => {
      document.body.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
