import Decimal from "decimal.js"
import { calcSumOfDecimals } from "~/lib/calcSumOfDecimals"
import { stringsToDecimals } from "~/lib/stringsToDecimals"
import { FormValues } from "../../types/FormValues"

export const calcDeductions = (
  formValues: FormValues,
): {
  total: Decimal
} => {
  const total = calcSumOfDecimals(
    stringsToDecimals(formValues.deductions.map((deduction) => deduction.p)),
  )

  return {
    total,
  }
}
