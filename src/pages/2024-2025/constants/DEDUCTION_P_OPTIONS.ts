import Decimal from "decimal.js"
import { Options } from "~/components/Select"
import { decimalToString } from "~/lib/decimalToString"

const options: Options = [{ value: "", label: "" }]

for (let value = -1; value >= -9; value -= 1) {
  const fixed = decimalToString(new Decimal(value))

  options.push({ value: fixed, label: fixed })
}

export const DEDUCTION_P_OPTIONS = options
