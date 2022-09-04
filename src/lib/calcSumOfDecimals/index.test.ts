import assert from "assert"
import Decimal from "decimal.js"
import { calcSumOfDecimals } from "."

test.each([
  {
    input: [],
    output: new Decimal("0"),
  },
  {
    input: [new Decimal(NaN)],
    output: new Decimal("0"),
  },
  {
    input: [new Decimal("7")],
    output: new Decimal("7"),
  },
  {
    input: [new Decimal("7"), new Decimal(NaN)],
    output: new Decimal("7"),
  },
  {
    input: [
      new Decimal("5"),
      new Decimal("2"),
      new Decimal(NaN),
      new Decimal("12.2"),
      new Decimal("0"),
      new Decimal("17.1"),
      new Decimal("2"),
      new Decimal("9"),
    ],
    output: new Decimal("47.3"),
  },
])(`${calcSumOfDecimals.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(calcSumOfDecimals(input), output)
})
