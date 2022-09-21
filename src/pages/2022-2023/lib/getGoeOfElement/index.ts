import Decimal from "decimal.js"
import { calcTrimmedMeanOfDecimals } from "~/lib/calcTrimmedMeanOfDecimals"
import { roundTo2DecimalPlaces } from "~/lib/roundTo2DecimalPlaces"
import { stringsToDecimals } from "~/lib/stringsToDecimals"
import { SOV } from "../../constants/SOV"
import { isJumpElement } from "../isJumpElement"
import { isOneFootTurnsSequence } from "../isOneFootTurnsSequence"
import { isPatternDanceElement } from "../isPatternDanceElement"
import { isSetOfTwizzles } from "../isSetOfTwizzles"
import { isStepSequenceStyleB } from "../isStepSequenceStyleB"

const getGoe = (abbr: string, js: Array<string>): Decimal => {
  const values = SOV[abbr]
  if (!values) {
    return new Decimal(NaN)
  }

  // > c) The panel's Grade of Execution (GOE) is determined by
  // > calculating the trimmed mean of the numerical values of the
  // > Grades of Execution awarded by Judges.
  // >
  // > d) The trimmed mean is calculated by deleting the highest and the
  // > lowest values and calculating the average of the remaining
  // > values. In the case when there are fewer than five Judges, the
  // > highest and lowest values are not deleted from the calculation.
  // >
  // > e) This average will become the final Grade of Execution of an
  // > individual Section/Element. The panel's GOE is rounded to two
  // > decimal places.
  //
  // ☞ https://isu.org/figure-skating/rules/fsk-regulations-rules/file
  return calcTrimmedMeanOfDecimals(
    stringsToDecimals(
      js.map((j) =>
        j === "0"
          ? "0.00"
          : j === "-5" ||
            j === "-4" ||
            j === "-3" ||
            j === "-2" ||
            j === "-1" ||
            j === "1" ||
            j === "2" ||
            j === "3" ||
            j === "4" ||
            j === "5"
          ? values[j]
          : "",
      ),
    ),
  )
}

const getGoeOfJumpElement = (abbr: string, js: Array<string>): Decimal => {
  // > Jump combinations and Jump Sequences are evaluated as
  // > one unit by adding the Base Values of the jumps included and
  // > applying the GOE with the numerical value of the most difficult
  // > jump.
  //
  // ☞ https://isu.org/figure-skating/rules/fsk-regulations-rules/file
  const abbrMostDifficultJump = abbr.split("+").reduce((acc, abbrJump) => {
    const values = SOV[abbrJump]
    if (!values) {
      return acc
    }

    const accValues = SOV[acc]
    if (!accValues) {
      return abbrJump
    }

    return new Decimal(values.base).gt(new Decimal(accValues.base))
      ? abbrJump
      : acc
  }, "")

  return getGoe(abbrMostDifficultJump, js)
}

const getGoeOfPatternDanceElement = (
  abbr: string,
  js: Array<string>,
): Decimal => {
  const [abbrPatternDanceElement] = abbr.split("+") as [string, string]
  return getGoe(abbrPatternDanceElement, js)
}

const getGoeOfSetOfTwizzles = (abbr: string, js: Array<string>): Decimal => {
  const [abbrWoman, abbrMan] = abbr.split("+") as [string, string]
  return Decimal.sum(getGoe(abbrWoman, js), getGoe(abbrMan, js))
}

const getGoeOfOneFootTurnsSequence = (
  abbr: string,
  js: Array<string>,
): Decimal => {
  const [abbrWoman, abbrMan] = abbr.split("+") as [string, string]
  return Decimal.sum(getGoe(abbrWoman, js), getGoe(abbrMan, js))
}

const getGoeOfStepSequenceStyleB = (
  abbr: string,
  js: Array<string>,
): Decimal => {
  const [abbrWoman, abbrMan] = abbr.split("+") as [string, string]
  return Decimal.sum(getGoe(abbrWoman, js), getGoe(abbrMan, js))
}

export const getGoeOfElement = (abbr: string, js: Array<string>): Decimal => {
  const goeOfElement = (() => {
    if (isJumpElement(abbr)) {
      return getGoeOfJumpElement(abbr, js)
    }

    if (isPatternDanceElement(abbr)) {
      return getGoeOfPatternDanceElement(abbr, js)
    }

    if (isSetOfTwizzles(abbr)) {
      return getGoeOfSetOfTwizzles(abbr, js)
    }

    if (isOneFootTurnsSequence(abbr)) {
      return getGoeOfOneFootTurnsSequence(abbr, js)
    }

    if (isStepSequenceStyleB(abbr)) {
      return getGoeOfStepSequenceStyleB(abbr, js)
    }

    return getGoe(abbr, js)
  })()

  return roundTo2DecimalPlaces(goeOfElement)
}
