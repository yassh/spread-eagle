import Decimal from "decimal.js"

/**
 * 与えられたDecimalの配列からNaNを取り除いたあと、総和を算出して返す。
 */
export const calcSumOfDecimals = (decimals: Array<Decimal>): Decimal => {
  const filteredDecimals = decimals.filter((decimal) => !decimal.isNaN())

  return filteredDecimals.length === 0
    ? new Decimal(0)
    : Decimal.sum(...filteredDecimals)
}
