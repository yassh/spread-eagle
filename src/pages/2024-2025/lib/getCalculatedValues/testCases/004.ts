import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "Challenger Series Lombardia Trophy",
  segment: "wfs",
  rank: "4",
  name: "Kaori SAKAMOTO",
  nation: "JPN",
  startingNumber: "19",
  ee: [
    {
      abbr: "2A",
      info: "",
      x: false,
      js: ["4", "4", "4", "4", "3", "4", "5", "", ""],
    },
    {
      abbr: "3Lz+2T",
      info: "",
      x: false,
      js: ["1", "3", "1", "2", "1", "2", "2", "", ""],
    },
    {
      abbr: "2A",
      info: "",
      x: false,
      js: ["3", "2", "2", "3", "1", "3", "3", "", ""],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["-1", "2", "1", "2", "2", "2", "2", "", ""],
    },
    {
      abbr: "3Lz!q",
      info: "!|q",
      x: false,
      js: ["-4", "-2", "-3", "-2", "-3", "-3", "-4", "", ""],
    },
    {
      abbr: "StSq3",
      info: "",
      x: false,
      js: ["1", "2", "3", "3", "2", "3", "3", "", ""],
    },
    {
      abbr: "FSSp4",
      info: "",
      x: false,
      js: ["2", "2", "2", "3", "1", "3", "4", "", ""],
    },
    {
      abbr: "3F+2T",
      info: "",
      x: true,
      js: ["0", "2", "2", "2", "1", "2", "1", "", ""],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["1", "3", "2", "3", "1", "3", "4", "", ""],
    },
    {
      abbr: "3F",
      info: "",
      x: true,
      js: ["2", "3", "3", "2", "3", "2", "3", "", ""],
    },
    {
      abbr: "3Lo<",
      info: "F<",
      x: true,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "", ""],
    },
    {
      abbr: "FCCoSp4",
      info: "",
      x: false,
      js: ["0", "3", "3", "2", "2", "2", "2", "", ""],
    },
  ],
  pc: {
    composition: {
      js: ["8.00", "9.00", "8.75", "8.00", "8.50", "8.75", "8.25", "", ""],
    },
    presentation: {
      js: ["8.25", "9.25", "8.50", "7.75", "8.25", "8.50", "8.25", "", ""],
    },
    skatingSkills: {
      js: ["8.75", "9.25", "9.00", "8.00", "8.75", "8.75", "8.50", "", ""],
    },
  },
  deductions: [
    { t: "Falls", p: "-1.00" },
    { t: "", p: "" },
    { t: "", p: "" },
  ],
}

export const output = {
  ee: {
    elements: [
      {
        baseValue: new Decimal("3.3"),
        goe: new Decimal("1.32"),
        score: new Decimal("4.62"),
      },
      {
        baseValue: new Decimal("7.2"),
        goe: new Decimal("0.94"),
        score: new Decimal("8.14"),
      },
      {
        baseValue: new Decimal("3.3"),
        goe: new Decimal("0.86"),
        score: new Decimal("4.16"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("0.63"),
        score: new Decimal("4.13"),
      },
      {
        baseValue: new Decimal("5.9"),
        goe: new Decimal("-1.77"),
        score: new Decimal("4.13"),
      },
      {
        baseValue: new Decimal("3.3"),
        goe: new Decimal("0.86"),
        score: new Decimal("4.16"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("0.72"),
        score: new Decimal("3.72"),
      },
      {
        baseValue: new Decimal("7.26"),
        goe: new Decimal("0.85"),
        score: new Decimal("8.11"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("1.2"),
        score: new Decimal("4.2"),
      },
      {
        baseValue: new Decimal("5.83"),
        goe: new Decimal("1.38"),
        score: new Decimal("7.21"),
      },
      {
        baseValue: new Decimal("4.31"),
        goe: new Decimal("-1.96"),
        score: new Decimal("2.35"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("0.77"),
        score: new Decimal("4.27"),
      },
    ],
    totalBaseValue: new Decimal("53.4"),
    total: new Decimal("59.2"),
  },
  pc: {
    factor: new Decimal("2.67"),
    composition: new Decimal("8.45"),
    presentation: new Decimal("8.35"),
    skatingSkills: new Decimal("8.75"),
    total: new Decimal("68.21"),
  },
  deductions: {
    total: new Decimal("-1"),
  },
  total: new Decimal("126.41"),
}
