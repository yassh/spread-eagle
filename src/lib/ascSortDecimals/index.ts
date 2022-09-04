import Decimal from "decimal.js"

/**
 * 与えられたDecimalの配列から、要素を昇順にソートした新たな配列を生成して返す。
 */
export const ascSortDecimals = (decimals: Array<Decimal>): Array<Decimal> => {
  return [...decimals].sort((a, b) => a.minus(b).toNumber())
}
