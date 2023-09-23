import assert from "assert"
import { isStepSequenceStyleB } from "."

test.each([
  // false
  { input: "2A", output: false },

  // true
  { input: "MiStW2+MiStM1", output: true },
])(`${isStepSequenceStyleB.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isStepSequenceStyleB(input), output)
})
