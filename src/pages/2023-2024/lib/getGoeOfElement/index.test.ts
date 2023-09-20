import assert from "assert"
import Decimal from "decimal.js"
import { getGoeOfElement } from "."

test.each([
  // Jumps
  {
    input: {
      abbr: "4T",
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    output: new Decimal("-4.75"),
  },
  {
    input: {
      abbr: "3A+3T",
      js: ["3", "3", "2", "2", "1", "3", "3", "4", "2"],
    },
    output: new Decimal("2.06"),
  },
  {
    input: {
      abbr: "3Lo+2A+SEQ",
      js: ["1", "0", "1", "1", "0", "1", "2", "3", "1"],
    },
    output: new Decimal("0.49"),
  },
  {
    input: {
      abbr: "3F+2A+SEQ",
      js: ["-1", "-3", "-3", "-2", "-2", "-2", "-2", "0", "-2"],
    },
    output: new Decimal("-1.06"),
  },
  {
    input: {
      abbr: "3Lz*+1Eu+3S",
      js: ["-1", "0", "1", "-1", "0", "0", "2", "2", "2"],
    },
    output: new Decimal("0.25"),
  },
  {
    input: {
      abbr: "2A<<",
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    output: new Decimal("-0.55"),
  },
  {
    input: {
      abbr: "2A+1Eu+3S<<",
      js: ["-5", "-4", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    output: new Decimal("-1.65"),
  },
  {
    input: {
      abbr: "3Lo+REP",
      js: ["0", "0", "0", "1", "0", "0", "0", "1", "0"],
    },
    output: new Decimal("0.07"),
  },

  // Pattern Dance Element (Junior)
  {
    input: {
      abbr: "1RF4+kpYYYY",
      js: ["2", "2", "2", "2", "3", "2", "3", "1", "2"],
    },
    output: new Decimal("1.13"),
  },
  {
    input: {
      abbr: "2RF3+kpYYNY",
      js: ["1", "2", "1", "1", "2", "2", "3", "1", "1"],
    },
    output: new Decimal("0.75"),
  },

  // Combination Lift
  {
    input: {
      abbr: "SlLi3+RoLi4",
      js: ["3", "4", "4", "3", "3", "4", "3", "3", "4"],
    },
    output: new Decimal("3.29"),
  },

  // Set of Sequential Twizzles (Rhythm Dance)
  {
    input: {
      abbr: "SqTwW4+SqTwM2",
      js: ["0", "-1", "-1", "0", "0", "-2", "-1"],
    },
    output: new Decimal("-0.48"),
  },

  // Set of Synchronized Twizzles (Free Dance)
  {
    input: {
      abbr: "SyTwW4+SyTwM4",
      js: ["4", "3", "3", "3", "2", "4", "3"],
    },
    output: new Decimal("2.32"),
  },

  // One Foot Turns Sequence (Free Dance)
  {
    input: {
      abbr: "OFTW4+OFTM3",
      js: ["2", "2", "2", "2", "2", "2", "2"],
    },
    output: new Decimal("1.46"),
  },

  // Step Sequence in Hold/Not Touching Style B
  {
    input: {
      abbr: "DiStW1+DiStM2",
      js: ["1", "1", "1", "1", "1", "1", "1"],
    },
    output: new Decimal("1.04"),
  },
  {
    input: {
      abbr: "MiStW2+MiStM3",
      js: ["-4", "-4", "-4", "0", "-3", "-2", "-2"],
    },
    output: new Decimal("-3.13"),
  },
])(`${getGoeOfElement.name}($input) => $output`, ({ input, output }) => {
  assert.deepStrictEqual(getGoeOfElement(input.abbr, input.js), output)
})
