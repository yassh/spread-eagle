import { escapeRegex } from "~/lib/escapeRegex"

// ☞ https://www.isu.org/inside-isu/isu-communications/communications/31294-isu-communication-2564/file
const ABBRS = [
  "1RFB",
  "1RF1",
  "1RF2",
  "1RF3",
  "1RF4",
  "2RFB",
  "2RF1",
  "2RF2",
  "2RF3",
  "2RF4",
]

const PATTERN_PATTERN_DANCE_ELEMENT =
  "(" +
  "(" +
  ABBRS.map((abbr) => escapeRegex(abbr)).join("|") +
  ")" +
  "[+]kp[YNT]{4}" +
  ")"

const REGEX_PATTERN_DANCE_ELEMENT = new RegExp(
  "^" + PATTERN_PATTERN_DANCE_ELEMENT + "$",
)

export const isPatternDanceElement = (abbr: string): boolean => {
  return REGEX_PATTERN_DANCE_ELEMENT.test(abbr)
}
