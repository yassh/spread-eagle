import Decimal from "decimal.js"

export const roundTo2DecimalPlaces = (decimal: Decimal) => {
  return decimal.toDecimalPlaces(2)
}
