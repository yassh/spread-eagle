import assert from "assert"
import Decimal from "decimal.js"
import { decimalToString } from "."

test.each([
  { input: new Decimal(NaN), output: "" },
  { input: new Decimal("0"), output: "0.00" },
  { input: new Decimal("7.1"), output: "7.10" },
  { input: new Decimal("9.004"), output: "9.00" },
  { input: new Decimal("9.005"), output: "9.01" },
  { input: new Decimal("-9.004"), output: "-9.00" },
  { input: new Decimal("-9.005"), output: "-9.01" },
])(`${decimalToString.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(decimalToString(input), output)
})
