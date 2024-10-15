import assert from "assert"
import { isPatternDanceElement } from "."

test.each([
  // false
  { input: "2A", output: false },

  // true
  { input: "1PD3+kpNYYY", output: true },
  { input: "2PD1+kpTNYY<", output: true },
])(`${isPatternDanceElement.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isPatternDanceElement(input), output)
})
