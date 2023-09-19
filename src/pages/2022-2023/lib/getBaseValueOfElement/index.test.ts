import assert from "assert"
import Decimal from "decimal.js"
import { getBaseValueOfElement } from "."

test.each([
  // Jumps (x: false)
  { input: { abbr: "3A", x: false }, output: new Decimal("8.00") },
  { input: { abbr: "3Lz+2Lo<<", x: false }, output: new Decimal("6.40") },
  { input: { abbr: "3Lz+1T+2Aq+SEQ", x: false }, output: new Decimal("9.60") },
  { input: { abbr: "3Fq+COMBO", x: false }, output: new Decimal("5.30") },

  // Jumps (x: true)
  { input: { abbr: "1A", x: true }, output: new Decimal("1.21") },
  { input: { abbr: "3Lz!+3T", x: true }, output: new Decimal("11.11") },
  { input: { abbr: "3T+1Eu+2S", x: true }, output: new Decimal("6.60") },
  { input: { abbr: "3F<<", x: true }, output: new Decimal("1.98") },
  { input: { abbr: "3F<<+REP", x: true }, output: new Decimal("1.39") },
  { input: { abbr: "3Lz*+1Eu+3S", x: true }, output: new Decimal("5.28") },

  // Pattern Dance Element (Junior)
  { input: { abbr: "1AT2+kpNTYY", x: false }, output: new Decimal("4.00") },
  { input: { abbr: "2AT2+kpNYNY", x: false }, output: new Decimal("4.00") },

  // Combination Lift
  { input: { abbr: "SlLi3+RoLi4", x: false }, output: new Decimal("10.15") },
  { input: { abbr: "RoLi4+StaLi4", x: false }, output: new Decimal("10.90") },

  // Set of Sequential Twizzles (Rhythm Dance)
  { input: { abbr: "SqTwW4+SqTwM2", x: false }, output: new Decimal("6.59") },

  // Set of Synchronized Twizzles (Free Dance)
  { input: { abbr: "SyTwW4+SyTwM4", x: false }, output: new Decimal("6.84") },

  // One Foot Turns Sequence (Free Dance)
  { input: { abbr: "OFTW4+OFTM3", x: false }, output: new Decimal("6.47") },

  // Step Sequence in Hold/Not Touching Style B
  { input: { abbr: "MiStW2+MiStM2", x: false }, output: new Decimal("7.46") },
  { input: { abbr: "MiStW2+MiStM1", x: false }, output: new Decimal("7.21") },
])(`${getBaseValueOfElement.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(getBaseValueOfElement(input.abbr, input.x), output)
})
