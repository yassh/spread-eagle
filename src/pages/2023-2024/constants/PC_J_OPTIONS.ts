import Decimal from "decimal.js"
import { Options } from "~/components/Select"
import { decimalToString } from "~/lib/decimalToString"

const options: Options = [{ value: "", label: "" }]

for (let value = 1000; value >= 0; value -= 25) {
  const fixed = decimalToString(new Decimal(value).div(100))

  options.push({ value: fixed, label: fixed })
}

export const PC_J_OPTIONS = options
