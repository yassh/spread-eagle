import Decimal from "decimal.js"

/**
 * 与えられた文字列の配列を、Decimalの配列に変換して返す。
 * 空文字列はnew Decimal(NaN)になる。
 */
export const stringsToDecimals = (strings: Array<string>): Array<Decimal> => {
  return strings.map((string) => new Decimal(string === "" ? NaN : string))
}
