import assert from "assert"
import { isCombinationLift } from "."

test.each([
  // false
  { input: "2A", output: false },

  // true
  { input: "SlLi3+RoLi4", output: true },
  { input: "RoLi4+StaLi4", output: true },
])(`${isCombinationLift.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isCombinationLift(input), output)
})
