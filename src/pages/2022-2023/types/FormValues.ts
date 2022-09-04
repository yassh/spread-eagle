export type FormValues = {
  preview: boolean
  event: string
  segment: "msp" | "mfs" | "wsp" | "wfs" | "psp" | "pfs" | "idrd" | "idfd"
  rank: string
  name: string
  nation: string
  startingNumber: string
  ee: Array<{
    abbr: string
    info: string
    x: boolean
    js: Array<string>
  }>
  pc: {
    composition: {
      js: Array<string>
    }
    presentation: {
      js: Array<string>
    }
    skatingSkills: {
      js: Array<string>
    }
  }
  deductions: Array<{
    t: string
    p: string
  }>
}
