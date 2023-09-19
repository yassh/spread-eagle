import Decimal from "decimal.js"
import { FormValues } from "../../types/FormValues"
import { calcDeductions } from "./calcDeductions"
import { calcElementScore } from "./calcElementScore"
import { calcProgramComponentScore } from "./calcProgramComponentScore"

export const getCalculatedValues = (data: FormValues["data"]) => {
  const ee = calcElementScore(data)
  const pc = calcProgramComponentScore(data)
  const deductions = calcDeductions(data)
  const total = Decimal.sum(ee.total, pc.total, deductions.total)

  return {
    ee,
    pc,
    deductions,
    total,
  }
}
