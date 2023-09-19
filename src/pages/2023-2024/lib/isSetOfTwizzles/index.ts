import { escapeRegex } from "~/lib/escapeRegex"

// ☞ https://www.isu.org/inside-isu/isu-communications/communications/28329-isu-communication-2473/file
const ABBRS_WOMAN = [
  "SqTwWB",
  "SqTwW1",
  "SqTwW2",
  "SqTwW3",
  "SqTwW4",
  "SyTwWB",
  "SyTwW1",
  "SyTwW2",
  "SyTwW3",
  "SyTwW4",
]
const ABBRS_MAN = [
  "SqTwMB",
  "SqTwM1",
  "SqTwM2",
  "SqTwM3",
  "SqTwM4",
  "SyTwMB",
  "SyTwM1",
  "SyTwM2",
  "SyTwM3",
  "SyTwM4",
]

const PATTERN_SET_OF_TWIZZLES_WOMAN =
  "(" + ABBRS_WOMAN.map((abbr) => escapeRegex(abbr)).join("|") + ")"

const PATTERN_SET_OF_TWIZZLES_MAN =
  "(" + ABBRS_MAN.map((abbr) => escapeRegex(abbr)).join("|") + ")"

const PATTERN_SET_OF_TWIZZLES =
  "(" +
  `${PATTERN_SET_OF_TWIZZLES_WOMAN}[+]${PATTERN_SET_OF_TWIZZLES_MAN}` +
  ")"

const REGEX_SET_OF_TWIZZLES = new RegExp("^" + PATTERN_SET_OF_TWIZZLES + "$")

export const isSetOfTwizzles = (abbr: string): boolean => {
  return REGEX_SET_OF_TWIZZLES.test(abbr)
}
