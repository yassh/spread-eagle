import { FormValues } from "../types/FormValues"

export const DEFAULT_FORM_VALUES: FormValues = {
  preview: false,
  event: "",
  segment: "msp",
  rank: "",
  name: "",
  nation: "",
  startingNumber: "",
  ee: [
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
    { abbr: "", info: "", x: false, js: ["", "", "", "", "", "", "", "", ""] },
  ],
  pc: {
    composition: {
      js: ["", "", "", "", "", "", "", "", ""],
    },
    presentation: {
      js: ["", "", "", "", "", "", "", "", ""],
    },
    skatingSkills: {
      js: ["", "", "", "", "", "", "", "", ""],
    },
  },
  deductions: [
    { t: "", p: "" },
    { t: "", p: "" },
    { t: "", p: "" },
  ],
}
