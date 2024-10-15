import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Riga Cup 2024",
  segment: "pfs",
  rank: "1",
  name: "Jiaxuan ZHANG / Yihang HUANG",
  nation: "CHN",
  startingNumber: "8",
  ee: [
    {
      abbr: "3Tw3",
      info: "",
      x: false,
      js: ["3", "3", "2", "2", "3", "2", "2", "2", "2"],
    },
    {
      abbr: "3Tq+2A<+2T+SEQ",
      info: "q|<",
      x: false,
      js: ["-4", "-4", "-3", "-4", "-3", "-5", "-3", "-3", "-3"],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["-1", "-1", "-2", "-1", "-1", "-2", "0", "0", "0"],
    },
    {
      abbr: "3Sq",
      info: "Fq",
      x: false,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    {
      abbr: "3FTh",
      info: "",
      x: false,
      js: ["2", "3", "2", "3", "3", "3", "3", "4", "3"],
    },
    {
      abbr: "5RLi4",
      info: "",
      x: false,
      js: ["2", "2", "1", "2", "2", "2", "2", "3", "2"],
    },
    {
      abbr: "FoDs2",
      info: "",
      x: false,
      js: ["0", "1", "1", "1", "2", "0", "0", "1", "1"],
    },
    {
      abbr: "PCoSp4",
      info: "",
      x: false,
      js: ["1", "2", "1", "2", "4", "1", "2", "3", "2"],
    },
    {
      abbr: "3LoTh",
      info: "",
      x: false,
      js: ["3", "2", "2", "3", "3", "2", "2", "2", "3"],
    },
    {
      abbr: "3Li4",
      info: "",
      x: false,
      js: ["3", "1", "1", "2", "3", "2", "2", "3", "1"],
    },
    {
      abbr: "",
      info: "",
      x: false,
      js: ["", "", "", "", "", "", "", "", ""],
    },
    {
      abbr: "",
      info: "",
      x: false,
      js: ["", "", "", "", "", "", "", "", ""],
    },
  ],
  pc: {
    composition: {
      js: [
        "6.25",
        "6.25",
        "6.25",
        "6.50",
        "6.25",
        "6.25",
        "6.25",
        "6.00",
        "6.50",
      ],
    },
    presentation: {
      js: [
        "6.00",
        "6.50",
        "5.75",
        "6.00",
        "6.50",
        "6.00",
        "6.25",
        "5.75",
        "6.50",
      ],
    },
    skatingSkills: {
      js: [
        "6.75",
        "6.25",
        "4.00",
        "6.75",
        "6.50",
        "6.50",
        "6.50",
        "6.50",
        "6.75",
      ],
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
        baseValue: new Decimal("5.7"),
        goe: new Decimal("1.3"),
        score: new Decimal("7"),
      },
      {
        baseValue: new Decimal("8.14"),
        goe: new Decimal("-1.44"),
        score: new Decimal("6.7"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("-0.43"),
        score: new Decimal("2.57"),
      },
      {
        baseValue: new Decimal("4.3"),
        goe: new Decimal("-2.15"),
        score: new Decimal("2.15"),
      },
      {
        baseValue: new Decimal("5.3"),
        goe: new Decimal("1.51"),
        score: new Decimal("6.81"),
      },
      {
        baseValue: new Decimal("7"),
        goe: new Decimal("1.4"),
        score: new Decimal("8.4"),
      },
      {
        baseValue: new Decimal("4.3"),
        goe: new Decimal("0.31"),
        score: new Decimal("4.61"),
      },
      {
        baseValue: new Decimal("4.5"),
        goe: new Decimal("0.84"),
        score: new Decimal("5.34"),
      },
      {
        baseValue: new Decimal("5"),
        goe: new Decimal("1.21"),
        score: new Decimal("6.21"),
      },
      {
        baseValue: new Decimal("5.1"),
        goe: new Decimal("1.02"),
        score: new Decimal("6.12"),
      },
      {
        baseValue: new Decimal("NaN"),
        goe: new Decimal("NaN"),
        score: new Decimal("NaN"),
      },
      {
        baseValue: new Decimal("NaN"),
        goe: new Decimal("NaN"),
        score: new Decimal("NaN"),
      },
    ],
    totalBaseValue: new Decimal("52.34"),
    total: new Decimal("55.91"),
  },
  pc: {
    factor: new Decimal("2.67"),
    composition: new Decimal("6.29"),
    presentation: new Decimal("6.14"),
    skatingSkills: new Decimal("6.54"),
    total: new Decimal("50.64"),
  },
  deductions: {
    total: new Decimal("-1"),
  },
  total: new Decimal("105.55"),
}
