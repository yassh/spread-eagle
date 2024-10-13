import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "2023 AUTUMN CLASSIC INTERNATIONAL",
  segment: "psp",
  rank: "2",
  name: "Riku MIURA / Ryuichi KIHARA",
  nation: "JPN",
  startingNumber: "9",
  ee: [
    {
      abbr: "3Tw2",
      info: "",
      x: false,
      js: ["2", "2", "3", "1", "3", "2", "0", "", ""],
    },
    {
      abbr: "3T",
      info: "F",
      x: false,
      js: ["-5", "-5", "5", "-5", "-5", "-5", "-5", "", ""],
    },
    {
      abbr: "3LzTh",
      info: "F",
      x: false,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "", ""],
    },
    {
      abbr: "3Li4",
      info: "",
      x: false,
      js: ["2", "2", "3", "2", "3", "1", "3", "", ""],
    },
    {
      abbr: "CCoSp3",
      info: "",
      x: false,
      js: ["1", "3", "3", "2", "2", "2", "1", "", ""],
    },
    {
      abbr: "StSq3",
      info: "",
      x: false,
      js: ["2", "2", "3", "2", "3", "2", "3", "", ""],
    },
    {
      abbr: "FiDs2",
      info: "",
      x: false,
      js: ["1", "1", "4", "3", "2", "2", "3", "", ""],
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
    {
      abbr: "",
      info: "",
      x: false,
      js: ["", "", "", "", "", "", "", "", ""],
    },
  ],
  pc: {
    composition: {
      js: ["7.00", "7.50", "8.50", "7.75", "8.75", "8.75", "8.25", "", ""],
    },
    presentation: {
      js: ["6.00", "7.25", "7.75", "7.50", "8.25", "8.50", "7.75", "", ""],
    },
    skatingSkills: {
      js: ["7.75", "7.50", "8.25", "8.00", "8.50", "8.75", "8.50", "", ""],
    },
  },
  deductions: [
    { t: "Falls", p: "-2.00" },
    { t: "", p: "" },
    { t: "", p: "" },
  ],
}

export const output = {
  ee: {
    elements: [
      {
        baseValue: new Decimal("5.4"),
        goe: new Decimal("1.08"),
        score: new Decimal("6.48"),
      },
      {
        baseValue: new Decimal("4.2"),
        goe: new Decimal("-2.1"),
        score: new Decimal("2.1"),
      },
      {
        baseValue: new Decimal("5.3"),
        goe: new Decimal("-2.65"),
        score: new Decimal("2.65"),
      },
      {
        baseValue: new Decimal("5.1"),
        goe: new Decimal("1.22"),
        score: new Decimal("6.32"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("0.6"),
        score: new Decimal("3.6"),
      },
      {
        baseValue: new Decimal("3.3"),
        goe: new Decimal("0.79"),
        score: new Decimal("4.09"),
      },
      {
        baseValue: new Decimal("3.2"),
        goe: new Decimal("0.7"),
        score: new Decimal("3.9"),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
    ],
    totalBaseValue: new Decimal("29.5"),
    total: new Decimal("29.14"),
  },
  pc: {
    factor: new Decimal("1.33"),
    composition: new Decimal("8.15"),
    presentation: new Decimal("7.7"),
    skatingSkills: new Decimal("8.2"),
    total: new Decimal("31.99"),
  },
  deductions: { total: new Decimal("-2") },
  total: new Decimal("59.13"),
}
