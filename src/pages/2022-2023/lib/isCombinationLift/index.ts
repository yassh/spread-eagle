import { escapeRegex } from "~/lib/escapeRegex"

// ☞ https://www.isu.org/inside-isu/isu-communications/communications/28329-isu-communication-2473/file
const ABBRS = [
  "StaLiB",
  "StaLi1",
  "StaLi2",
  "StaLi3",
  "StaLi4",
  "SlLiB",
  "SlLi1",
  "SlLi2",
  "SlLi3",
  "SlLi4",
  "CuLiB",
  "CuLi1",
  "CuLi2",
  "CuLi3",
  "CuLi4",
  "RoLiB",
  "RoLi1",
  "RoLi2",
  "RoLi3",
  "RoLi4",
]

const PATTERN_SHORT_LIFT =
  "(" + ABBRS.map((abbr) => escapeRegex(abbr)).join("|") + ")"

const PATTERN_COMBINATION_LIFT =
  "(" + PATTERN_SHORT_LIFT + "[+]" + PATTERN_SHORT_LIFT + ")"

const REGEX_COMBINATION_LIFT = new RegExp("^" + PATTERN_COMBINATION_LIFT + "$")

export const isCombinationLift = (abbr: string): boolean => {
  return REGEX_COMBINATION_LIFT.test(abbr)
}
