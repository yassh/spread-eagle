import LZString from "lz-string"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { DEFAULT_FORM_VALUES } from "../constants/DEFAULT_FORM_VALUES"
import { FormValues } from "../types/FormValues"

const PARAM_NAME_FORM = "form"

export const useScoreSheetForm = () => {
  const [isReady, setIsReady] = useState(false)

  const {
    watch,
    getValues,
    reset,
    register: originalRegister,
  } = useForm<FormValues>()

  const router = useRouter()

  const saveFormValuesInUrl = useCallback(() => {
    const formValues = getValues()
    const formValuesJson = JSON.stringify(formValues)
    const form = LZString.compressToEncodedURIComponent(formValuesJson)

    router.replace(`?${PARAM_NAME_FORM}=${form}`, undefined, {
      shallow: true, // ☞ https://nextjs.org/docs/routing/shallow-routing
    })
  }, [getValues, router])

  const register = useCallback(
    (...args: Parameters<typeof originalRegister>) =>
      originalRegister(args[0], {
        onChange: () => saveFormValuesInUrl(),
      }),
    [originalRegister, saveFormValuesInUrl],
  )

  useEffect(
    () => {
      if (!router.isReady) return

      let formValues = {}

      const form = router.query[PARAM_NAME_FORM]
      if (typeof form === "string") {
        try {
          const maybeJson = LZString.decompressFromEncodedURIComponent(form)
          if (maybeJson) {
            formValues = JSON.parse(maybeJson)
          }
        } catch (error) {
          console.error(error)
        }
      }

      reset({ ...DEFAULT_FORM_VALUES, ...formValues })
      setIsReady(true)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady],
  )

  const clear = useCallback(() => {
    if (window.confirm("Do you really want to clear?")) {
      location.replace(location.pathname)
    }
  }, [])

  return { isReady, watch, register, clear }
}
