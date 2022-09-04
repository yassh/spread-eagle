import { escapeRegex } from "~/lib/escapeRegex"

// ☞ https://www.isu.org/inside-isu/isu-communications/communications/28329-isu-communication-2473/file
const ABBRS_WOMAN = ["OFTWB", "OFTW1", "OFTW2", "OFTW3", "OFTW4"]
const ABBRS_MAN = ["OFTMB", "OFTM1", "OFTM2", "OFTM3", "OFTM4"]

const PATTERN_ONE_FOOT_TURNS_SEQUENCE_WOMAN =
  "(" + ABBRS_WOMAN.map((abbr) => escapeRegex(abbr)).join("|") + ")"

const PATTERN_ONE_FOOT_TURNS_SEQUENCE_MAN =
  "(" + ABBRS_MAN.map((abbr) => escapeRegex(abbr)).join("|") + ")"

const PATTERN_ONE_FOOT_TURNS_SEQUENCE =
  "(" +
  `${PATTERN_ONE_FOOT_TURNS_SEQUENCE_WOMAN}[+]${PATTERN_ONE_FOOT_TURNS_SEQUENCE_MAN}` +
  ")"

const REGEX_ONE_FOOT_TURNS_SEQUENCE = new RegExp(
  "^" + PATTERN_ONE_FOOT_TURNS_SEQUENCE + "$",
)

export const isOneFootTurnsSequence = (abbr: string): boolean => {
  return REGEX_ONE_FOOT_TURNS_SEQUENCE.test(abbr)
}
