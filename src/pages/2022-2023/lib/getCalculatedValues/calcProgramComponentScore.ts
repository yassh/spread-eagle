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

  // TODO: 2022-2023シーズンの資料からの引用に差し替える
  //
  // > The trimmed mean of each Program Component is rounded to
  // > two decimal places.
  //
  // ☞ https://www.isu.org/inside-isu/rules-regulations/isu-statutes-constitution-regulations-technical/special-regulations-and-technical-rules/17927-single-pair-and-ice-dance-2018/file
  const composition = roundTo2DecimalPlaces(
    calcTrimmedMeanOfDecimals(stringsToDecimals(data.pc.composition.js)),
  )
  const presentation = roundTo2DecimalPlaces(
    calcTrimmedMeanOfDecimals(stringsToDecimals(data.pc.presentation.js)),
  )
  const skatingSkills = roundTo2DecimalPlaces(
    calcTrimmedMeanOfDecimals(stringsToDecimals(data.pc.skatingSkills.js)),
  )

  // TODO: 2022-2023シーズンの資料からの引用に差し替える
  //
  // > The factored results are rounded to two decimal places and added.
  // > The sum is the Program Component Score.
  //
  // ☞ https://www.isu.org/inside-isu/rules-regulations/isu-statutes-constitution-regulations-technical/special-regulations-and-technical-rules/17927-single-pair-and-ice-dance-2018/file
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
