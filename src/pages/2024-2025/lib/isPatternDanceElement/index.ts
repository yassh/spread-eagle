import { escapeRegex } from "~/lib/escapeRegex"

// ☞ https://www.isu.org/figure-skating/rules/fsk-communications/33990-isu-communication-2647/file
const ABBRS = [
  "1PDB",
  "1PD1",
  "1PD2",
  "1PD3",
  "1PD4",
  "2PDB",
  "2PD1",
  "2PD2",
  "2PD3",
  "2PD4",
]

const PATTERN_PATTERN_DANCE_ELEMENT =
  "(" +
  "(" +
  ABBRS.map((abbr) => escapeRegex(abbr)).join("|") +
  ")" +
  "[+]kp[YNT]{4}" +
  ")" +
  "(<|<<|!)?"

const REGEX_PATTERN_DANCE_ELEMENT = new RegExp(
  "^" + PATTERN_PATTERN_DANCE_ELEMENT + "$",
)

export const isPatternDanceElement = (abbr: string): boolean => {
  return REGEX_PATTERN_DANCE_ELEMENT.test(abbr)
}
