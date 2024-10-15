import Decimal from "decimal.js"
import { FormValues } from "../types/FormValues"

const map: Record<FormValues["data"]["segment"], Decimal> = {
  msp: new Decimal("1.67"),
  mfs: new Decimal("3.33"),
  wsp: new Decimal("1.33"),
  wfs: new Decimal("2.67"),
  psp: new Decimal("1.33"),
  pfs: new Decimal("2.67"),
  idrd: new Decimal("1.33"),
  idfd: new Decimal("2.00"),
}

export const segmentToFactor = (
  segment: FormValues["data"]["segment"],
): Decimal => {
  return map[segment]
}
