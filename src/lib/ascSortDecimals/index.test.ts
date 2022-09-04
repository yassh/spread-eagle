import assert from "assert"
import Decimal from "decimal.js"
import { ascSortDecimals } from "."

test.each([
  {
    input: [],
    output: [],
  },
  {
    input: [new Decimal("7")],
    output: [new Decimal("7")],
  },
  {
    input: [
      new Decimal("5"),
      new Decimal("2"),
      new Decimal("13"),
      new Decimal("0"),
      new Decimal("17"),
      new Decimal("2"),
      new Decimal("9"),
    ],
    output: [
      new Decimal("0"),
      new Decimal("2"),
      new Decimal("2"),
      new Decimal("5"),
      new Decimal("9"),
      new Decimal("13"),
      new Decimal("17"),
    ],
  },
])(`${ascSortDecimals.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(ascSortDecimals(input), output)
})
