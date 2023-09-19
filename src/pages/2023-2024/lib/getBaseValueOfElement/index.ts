import Decimal from "decimal.js"
import { roundTo2DecimalPlaces } from "~/lib/roundTo2DecimalPlaces"
import { SOV } from "../../constants/SOV"
import { isCombinationLift } from "../isCombinationLift"
import { isJumpElement } from "../isJumpElement"
import { isOneFootTurnsSequence } from "../isOneFootTurnsSequence"
import { isPatternDanceElement } from "../isPatternDanceElement"
import { isSetOfTwizzles } from "../isSetOfTwizzles"
import { isStepSequenceStyleB } from "../isStepSequenceStyleB"

const getBaseValue = (abbr: string): Decimal => {
  if (abbr.endsWith("*")) {
    return new Decimal(0)
  }

  const values = SOV[abbr]
  if (!values) {
    return new Decimal(NaN)
  }

  return new Decimal(values.base)
}

const getBaseValueOfJumpElement = (abbr: string, x: boolean): Decimal => {
  const baseValue = abbr.split("+").reduce((acc, abbrJump) => {
    // > ...
    // > If both executions are as solo jumps, the second of these solo jumps will
    // > be attributed 70% of its numerical value according to the Scale of Value.
    // > ...
    //
    // ☞ https://isu.org/figure-skating/rules/fsk-regulations-rules/file
    if (abbrJump === "REP") {
      return acc.times("0.7")
    }

    if (abbrJump === "COMBO") {
      return acc
    }

    if (abbrJump === "SEQ") {
      return acc
    }

    return acc.plus(getBaseValue(abbrJump))
  }, new Decimal(0))

  // > In the Short Program and Free Skating of Single Skating the
  // > Base Values (but not the GOEs) for jump Elements started in
  // > the second half of the program will be multiplied by a special
  // > factor 1.1 in order to give credit for even distribution of
  // > difficulties in the program. However, only the last one jump
  // > element executed in the second half counts for the 1.1 factor
  // > in the Short Program, and the last three jump elements for
  // > Free Skating. Each factored Base Value for these jump
  // > Elements performed in the second half of the Program will be
  // > rounded to two decimal places. The second half commences
  // > in the middle of the required time without taking into account
  // > plus or minus 10 seconds allowance. However, in cases of up
  // > to 3 minutes interruptions (as per Rule 515, paragraph 4.b))
  // > the factor 1.1 will be used only for jump elements which were
  // > started in the second half of the program, but prior to the
  // > interruption.
  //
  // ☞ https://isu.org/figure-skating/rules/fsk-regulations-rules/file
  return roundTo2DecimalPlaces(x ? baseValue.times("1.1") : baseValue)
}

const getBaseValueOfPatternDanceElement = (abbr: string): Decimal => {
  const [abbrPatternDanceElement] = abbr.split("+") as [string, string]
  return getBaseValue(abbrPatternDanceElement)
}

const getBaseValueOfCombinationLift = (abbr: string): Decimal => {
  const [abbrShortLift1, abbrShortLift2] = abbr.split("+") as [string, string]
  return Decimal.sum(getBaseValue(abbrShortLift1), getBaseValue(abbrShortLift2))
}

const getBaseValueOfSetOfTwizzles = (abbr: string): Decimal => {
  const [abbrWoman, abbrMan] = abbr.split("+") as [string, string]
  return Decimal.sum(getBaseValue(abbrWoman), getBaseValue(abbrMan))
}

const getBaseValueOfOneFootTurnsSequence = (abbr: string): Decimal => {
  const [abbrWoman, abbrMan] = abbr.split("+") as [string, string]
  return Decimal.sum(getBaseValue(abbrWoman), getBaseValue(abbrMan))
}

const getBaseValueOfStepSequenceStyleB = (abbr: string): Decimal => {
  const [abbrWoman, abbrMan] = abbr.split("+") as [string, string]
  return Decimal.sum(getBaseValue(abbrWoman), getBaseValue(abbrMan))
}

export const getBaseValueOfElement = (abbr: string, x: boolean): Decimal => {
  if (isJumpElement(abbr)) {
    return getBaseValueOfJumpElement(abbr, x)
  }

  if (isPatternDanceElement(abbr)) {
    return getBaseValueOfPatternDanceElement(abbr)
  }

  if (isCombinationLift(abbr)) {
    return getBaseValueOfCombinationLift(abbr)
  }

  if (isSetOfTwizzles(abbr)) {
    return getBaseValueOfSetOfTwizzles(abbr)
  }

  if (isOneFootTurnsSequence(abbr)) {
    return getBaseValueOfOneFootTurnsSequence(abbr)
  }

  if (isStepSequenceStyleB(abbr)) {
    return getBaseValueOfStepSequenceStyleB(abbr)
  }

  return getBaseValue(abbr)
}
