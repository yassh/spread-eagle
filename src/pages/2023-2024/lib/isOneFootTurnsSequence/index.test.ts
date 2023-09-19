import assert from "assert"
import { isOneFootTurnsSequence } from "."

test.each([
  // false
  { input: "2A", output: false },

  // true
  { input: "OFTW4+OFTM3", output: true },
])(`${isOneFootTurnsSequence.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isOneFootTurnsSequence(input), output)
})
