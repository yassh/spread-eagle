import assert from "assert"
import { isPatternDanceElement } from "."

test.each([
  // false
  { input: "2A", output: false },

  // true
  { input: "1RF4+kpYYYY", output: true },
  { input: "2RF3+kpYYNY", output: true },
])(`${isPatternDanceElement.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isPatternDanceElement(input), output)
})
