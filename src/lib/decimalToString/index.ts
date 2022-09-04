import Decimal from "decimal.js"

/**
 * 与えられたDecimalを、文字列に変換して返す。
 * 与えられたDecimalがNaNなら空文字列を、そうじゃなければ小数第三位を四捨五入した文字列を返す。
 */
export const decimalToString = (decimal: Decimal): string => {
  return decimal.isNaN() ? "" : decimal.toFixed(2)
}
