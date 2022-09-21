import Decimal from "decimal.js"
import { calcSumOfDecimals } from "~/lib/calcSumOfDecimals"
import { calcTrimmedMeanOfDecimals } from "~/lib/calcTrimmedMeanOfDecimals"
import { roundTo2DecimalPlaces } from "~/lib/roundTo2DecimalPlaces"
import { stringsToDecimals } from "~/lib/stringsToDecimals"
import { FormValues } from "../../types/FormValues"
import { segmentToFactor } from "../segmentToFactor"

export const calcProgramComponentScore = (
  data: FormValues["data"],
): {
  factor: Decimal
  composition: Decimal
  presentation: Decimal
  skatingSkills: Decimal
  total: Decimal
} => {
  const factor = segmentToFactor(data.segment)

  // > The trimmed mean of each Program Component is rounded to
  // > two decimal places.
  //
  // ☞ https://isu.org/figure-skating/rules/fsk-regulations-rules/file
  const composition = roundTo2DecimalPlaces(
    calcTrimmedMeanOfDecimals(stringsToDecimals(data.pc.composition.js)),
  )
  const presentation = roundTo2DecimalPlaces(
    calcTrimmedMeanOfDecimals(stringsToDecimals(data.pc.presentation.js)),
  )
  const skatingSkills = roundTo2DecimalPlaces(
    calcTrimmedMeanOfDecimals(stringsToDecimals(data.pc.skatingSkills.js)),
  )

  // > The factored results are rounded to two decimal places and added.
  // > The sum is the Program Component Score.
  //
  // ☞ https://isu.org/figure-skating/rules/fsk-regulations-rules/file
  const total = calcSumOfDecimals(
    [composition, presentation, skatingSkills].map((decimal) =>
      roundTo2DecimalPlaces(decimal.times(factor)),
    ),
  )

  return {
    factor,
    composition,
    presentation,
    skatingSkills,
    total,
  }
}
