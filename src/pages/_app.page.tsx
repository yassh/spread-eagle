import type { AppProps } from "next/app"
import { GoogleAnalytics } from "nextjs-google-analytics"
import "~/styles/globals.css"

// ☞ https://fontawesome.com/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
