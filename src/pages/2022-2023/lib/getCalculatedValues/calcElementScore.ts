import Decimal from "decimal.js"
import { calcSumOfDecimals } from "~/lib/calcSumOfDecimals"
import { FormValues } from "../../types/FormValues"
import { getBaseValueOfElement } from "../getBaseValueOfElement"
import { getGoeOfElement } from "../getGoeOfElement"

export const calcElementScore = (
  data: FormValues["data"],
): {
  elements: Array<{
    baseValue: Decimal
    goe: Decimal
    score: Decimal
  }>
  totalBaseValue: Decimal
  total: Decimal
} => {
  const elements = data.ee.map((element) => {
    const baseValue = getBaseValueOfElement(element.abbr, element.x)
    const goe = getGoeOfElement(element.abbr, element.js)

    // TODO: 2022-2023シーズンの資料からの引用に差し替える
    //
    // > The panel's score for each Section/Element is determined by
    // > adding the trimmed mean GOE of this Section/Element to its Base
    // > Value.
    //
    // ☞ https://www.isu.org/inside-isu/rules-regulations/isu-statutes-constitution-regulations-technical/special-regulations-and-technical-rules/17927-single-pair-and-ice-dance-2018/file
    const score = baseValue.plus(goe)

    return {
      baseValue,
      goe,
      score,
    }
  })

  const totalBaseValue = calcSumOfDecimals(
    elements.map((element) => element.baseValue),
  )
  const total = calcSumOfDecimals(elements.map((element) => element.score))

  return {
    elements,
    totalBaseValue,
    total,
  }
}
