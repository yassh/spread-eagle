import { useRouter } from "next/router"
import Script from "next/script"
import { FC, useEffect } from "react"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const GoogleAnalytics: FC = () => {
  const router = useRouter()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const handleRouteChange = (
      url: string,
      { shallow }: { shallow: boolean },
    ) => {
      if (shallow) return

      gtag("event", "page_view")
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
