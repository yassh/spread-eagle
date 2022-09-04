import { escapeRegex } from "~/lib/escapeRegex"

// ☞ https://www.isu.org/inside-isu/isu-communications/communications/28329-isu-communication-2473/file
const ABBRS_WOMAN = [
  "DiStWB",
  "DiStW1",
  "DiStW2",
  "DiStW3",
  "DiStW4",
  "MiStWB",
  "MiStW1",
  "MiStW2",
  "MiStW3",
  "MiStW4",
  "CiStWB",
  "CiStW1",
  "CiStW2",
  "CiStW3",
  "CiStW4",
  "SeStWB",
  "SeStW1",
  "SeStW2",
  "SeStW3",
  "SeStW4",
]
const ABBRS_MAN = [
  "DiStMB",
  "DiStM1",
  "DiStM2",
  "DiStM3",
  "DiStM4",
  "MiStMB",
  "MiStM1",
  "MiStM2",
  "MiStM3",
  "MiStM4",
  "CiStMB",
  "CiStM1",
  "CiStM2",
  "CiStM3",
  "CiStM4",
  "SeStMB",
  "SeStM1",
  "SeStM2",
  "SeStM3",
  "SeStM4",
]

const PATTERN_STEP_SEQUENCE_STYLE_B_WOMAN =
  "(" + ABBRS_WOMAN.map((abbr) => escapeRegex(abbr)).join("|") + ")"

const PATTERN_STEP_SEQUENCE_STYLE_B_MAN =
  "(" + ABBRS_MAN.map((abbr) => escapeRegex(abbr)).join("|") + ")"

const PATTERN_STEP_SEQUENCE_STYLE_B =
  "(" +
  `${PATTERN_STEP_SEQUENCE_STYLE_B_WOMAN}[+]${PATTERN_STEP_SEQUENCE_STYLE_B_MAN}` +
  ")"

const REGEX_STEP_SEQUENCE_STYLE_B = new RegExp(
  "^" + PATTERN_STEP_SEQUENCE_STYLE_B + "$",
)

export const isStepSequenceStyleB = (abbr: string): boolean => {
  return REGEX_STEP_SEQUENCE_STYLE_B.test(abbr)
}
