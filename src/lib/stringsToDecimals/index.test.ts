import assert from "assert"
import Decimal from "decimal.js"
import { stringsToDecimals } from "."

test.each([
  {
    input: [],
    output: [],
  },
  {
    input: ["7"],
    output: [new Decimal("7")],
  },
  {
    input: ["5", "2", "", "13", "0", "17", "2", "9", ""],
    output: [
      new Decimal("5"),
      new Decimal("2"),
      new Decimal(NaN),
      new Decimal("13"),
      new Decimal("0"),
      new Decimal("17"),
      new Decimal("2"),
      new Decimal("9"),
      new Decimal(NaN),
    ],
  },
])(`${stringsToDecimals.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(stringsToDecimals(input), output)
})
