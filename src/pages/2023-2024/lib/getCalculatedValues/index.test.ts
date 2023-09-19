import assert from "assert"
import { getCalculatedValues } from "."
import { testCases } from "./testCases"

test.each(testCases)(
  `${getCalculatedValues.name}($input) => $output`,
  ({ input, output }) => {
    assert.deepStrictEqual(getCalculatedValues(input), output)
  },
)
