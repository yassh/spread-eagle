import Decimal from "decimal.js"
import { ascSortDecimals } from "../ascSortDecimals"
import { calcSumOfDecimals } from "../calcSumOfDecimals"

/**
 * 与えられたDecimalの配列からNaNを取り除いたあと、最大値と最小値を取り除き、残りの平均を算出して返す。
 * 与えられたDecimalの配列からNaNを取り除いて、残った要素数が3に満たない場合は、new Decimal(NaN)を返す。
 */
export const calcTrimmedMeanOfDecimals = (
  decimals: Array<Decimal>,
): Decimal => {
  const filteredDecimals = decimals.filter((decimal) => !decimal.isNaN())
  if (filteredDecimals.length < 3) return new Decimal(NaN)

  const trimmedDecimals = ascSortDecimals(filteredDecimals).slice(1, -1)
  const sum = calcSumOfDecimals(trimmedDecimals)

  return sum.div(trimmedDecimals.length)
}
