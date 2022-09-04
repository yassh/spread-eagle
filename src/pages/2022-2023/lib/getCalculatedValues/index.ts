import Decimal from "decimal.js"
import { FormValues } from "../../types/FormValues"
import { calcDeductions } from "./calcDeductions"
import { calcElementScore } from "./calcElementScore"
import { calcProgramComponentScore } from "./calcProgramComponentScore"

export const getCalculatedValues = (formValues: FormValues) => {
  const ee = calcElementScore(formValues)
  const pc = calcProgramComponentScore(formValues)
  const deductions = calcDeductions(formValues)
  const total = Decimal.sum(ee.total, pc.total, deductions.total)

  return {
    ee,
    pc,
    deductions,
    total,
  }
}
