import Decimal from "decimal.js"
import { calcSumOfDecimals } from "~/lib/calcSumOfDecimals"
import { stringsToDecimals } from "~/lib/stringsToDecimals"
import { FormValues } from "../../types/FormValues"

export const calcDeductions = (
  data: FormValues["data"],
): {
  total: Decimal
} => {
  const total = calcSumOfDecimals(
    stringsToDecimals(data.deductions.map((deduction) => deduction.p)),
  )

  return {
    total,
  }
}
