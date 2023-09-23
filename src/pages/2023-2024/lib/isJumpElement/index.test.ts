import assert from "assert"
import { isJumpElement } from "."

test.each([
  // false
  { input: "Lz", output: false },
  { input: "1Euq", output: false },
  { input: "1Eu<", output: false },
  { input: "2Eu", output: false },
  { input: "3Te", output: false },
  { input: "3S!", output: false },
  { input: "3a", output: false },

  // true
  { input: "1Lo", output: true },
  { input: "1Eu", output: true },
  { input: "1Eu<<", output: true },
  { input: "2A", output: true },
  { input: "2Ab", output: true },
  { input: "2Fe<", output: true },
  { input: "2Lze<<", output: true },
  { input: "3Tb", output: true },
  { input: "3F!qb", output: true },
  { input: "3Lzqb", output: true },
  { input: "4S<<", output: true },
  { input: "4F!<", output: true },
  { input: "4Lze<<", output: true },
  { input: "3Lz+3T<", output: true },
  { input: "3S<<+REP", output: true },
  { input: "3F+2A+SEQ", output: true },
  { input: "3Lz+1T+2Aq+SEQ", output: true },
  { input: "3Fq+COMBO", output: true },
  { input: "3Lz*+1Eu+3S", output: true },
])(`${isJumpElement.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(isJumpElement(input), output)
})
