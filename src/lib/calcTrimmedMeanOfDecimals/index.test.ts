import assert from "assert"
import Decimal from "decimal.js"
import { calcTrimmedMeanOfDecimals } from "."

test.each([
  {
    input: [],
    output: new Decimal(NaN),
  },
  {
    input: [new Decimal("1"), new Decimal("7")],
    output: new Decimal(NaN),
  },
  {
    input: [new Decimal("1"), new Decimal("7"), new Decimal(NaN)],
    output: new Decimal(NaN),
  },
  {
    input: [new Decimal("1"), new Decimal("3"), new Decimal("7")],
    output: new Decimal("3"),
  },
  {
    input: [
      new Decimal("6"),
      new Decimal("29"),
      new Decimal("5"),
      new Decimal(NaN),
      new Decimal("3"),
      new Decimal("11"),
      new Decimal("3"),
    ],
    output: new Decimal("6.25"),
  },
])(
  `${calcTrimmedMeanOfDecimals.name}($input) => $output`,
  ({ input, output }) => {
    assert.deepStrictEqual(calcTrimmedMeanOfDecimals(input), output)
  },
)
