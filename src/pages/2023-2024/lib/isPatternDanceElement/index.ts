import { escapeRegex } from "~/lib/escapeRegex"

// ☞ https://www.isu.org/inside-isu/isu-communications/communications/28329-isu-communication-2473/file
const ABBRS = [
  "1ATB",
  "1AT1",
  "1AT2",
  "1AT3",
  "1AT4",
  "2ATB",
  "2AT1",
  "2AT2",
  "2AT3",
  "2AT4",
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
