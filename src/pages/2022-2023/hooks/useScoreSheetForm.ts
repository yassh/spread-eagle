import LZString from "lz-string"
import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { DEFAULT_FORM_VALUES } from "../constants/DEFAULT_FORM_VALUES"
import { FormValues } from "../types/FormValues"

export const useScoreSheetForm = () => {
  const {
    watch,
    getValues,
    reset,
    register: originalRegister,
  } = useForm<FormValues>({ defaultValues: DEFAULT_FORM_VALUES })

  const saveFormValuesInUrl = useCallback(() => {
    const formValues = getValues()
    const formValuesJson = JSON.stringify(formValues)
    const hash = LZString.compressToEncodedURIComponent(formValuesJson)

    location.replace("#" + hash)
  }, [getValues])

  const restoreFormValuesFromUrl = useCallback(() => {
    let formValues = {}

    try {
      const hash = location.hash.substring(1)
      const maybeJson = LZString.decompressFromEncodedURIComponent(hash)
      if (maybeJson) {
        formValues = JSON.parse(maybeJson)
      }
    } catch (error) {
      console.error(error)
    }

    reset({ ...DEFAULT_FORM_VALUES, ...formValues })
  }, [reset])

  const register = useCallback(
    (...args: Parameters<typeof originalRegister>) =>
      originalRegister(args[0], {
        onChange: () => saveFormValuesInUrl(),
      }),
    [originalRegister, saveFormValuesInUrl],
  )

  useEffect(() => {
    const handleHashChange = () => {
      restoreFormValuesFromUrl()
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [restoreFormValuesFromUrl])

  const clear = useCallback(() => {
    if (window.confirm("Do you really want to clear?")) {
      location.replace(location.pathname)
    }
  }, [])

  return { watch, register, clear }
}
