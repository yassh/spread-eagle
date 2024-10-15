import assert from "assert"
import { isSetOfTwizzles } from "."

test.each([
  // false
  { input: "2A", output: false },

  // true
  { input: "SqTwW4+SqTwM2", output: true },
  { input: "SyTwW4+SyTwM4", output: true },
])(`${isSetOfTwizzles.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isSetOfTwizzles(input), output)
})
