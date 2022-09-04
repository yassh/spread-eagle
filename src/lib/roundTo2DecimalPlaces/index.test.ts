import assert from "assert"
import Decimal from "decimal.js"
import { roundTo2DecimalPlaces } from "."

test.each([
  { input: new Decimal("0"), output: new Decimal("0.00") },
  { input: new Decimal("7.1"), output: new Decimal("7.10") },
  { input: new Decimal("9.004"), output: new Decimal("9.00") },
  { input: new Decimal("9.005"), output: new Decimal("9.01") },
  { input: new Decimal("-9.004"), output: new Decimal("-9.00") },
  { input: new Decimal("-9.005"), output: new Decimal("-9.01") },
])(`${roundTo2DecimalPlaces.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(roundTo2DecimalPlaces(input), output)
})
