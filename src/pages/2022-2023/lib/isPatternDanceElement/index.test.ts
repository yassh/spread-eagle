import assert from "assert"
import { isPatternDanceElement } from "."

test.each([
  // false
  { input: "2A", output: false },

  // true
  { input: "1AT2+kpNTYY", output: true },
  { input: "2AT2+kpNYNY", output: true },
])(`${isPatternDanceElement.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isPatternDanceElement(input), output)
})
