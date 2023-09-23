import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "2023 AUTUMN CLASSIC INTERNATIONAL",
  segment: "pfs",
  rank: "2",
  name: "Riku MIURA / Ryuichi KIHARA",
  nation: "JPN",
  startingNumber: "9",
  ee: [
    {
      abbr: "3Tw2",
      info: "",
      x: false,
      js: ["2", "3", "2", "2", "3", "2", "3", "", ""],
    },
    {
      abbr: "3T+2A+1A+SEQ",
      info: "",
      x: false,
      js: ["-4", "-3", "-4", "-3", "-5", "-4", "-5", "", ""],
    },
    {
      abbr: "5ALi4",
      info: "",
      x: false,
      js: ["3", "4", "3", "4", "4", "3", "3", "", ""],
    },
    {
      abbr: "3S",
      info: "",
      x: false,
      js: ["0", "0", "1", "0", "0", "0", "0", "", ""],
    },
    {
      abbr: "PCoSp4",
      info: "",
      x: false,
      js: ["1", "2", "2", "2", "2", "2", "3", "", ""],
    },
    {
      abbr: "3LzTh",
      info: "",
      x: false,
      js: ["-3", "-1", "-2", "-1", "-1", "1", "1", "", ""],
    },
    {
      abbr: "5RLi4",
      info: "",
      x: false,
      js: ["2", "3", "3", "2", "3", "3", "4", "", ""],
    },
    {
      abbr: "3LoTh<",
      info: "F",
      x: false,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "", ""],
    },
    {
      abbr: "BoDs2",
      info: "",
      x: false,
      js: ["0", "0", "-1", "1", "1", "0", "1", "", ""],
    },
    {
      abbr: "4Li4",
      info: "",
      x: false,
      js: ["2", "3", "2", "3", "3", "4", "4", "", ""],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["3", "2", "2", "1", "3", "2", "2", "", ""],
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
      js: ["7.75", "8.50", "7.75", "8.75", "8.50", "8.75", "8.25", "", ""],
    },
    presentation: {
      js: ["7.25", "8.25", "7.50", "8.75", "8.25", "8.50", "8.00", "", ""],
    },
    skatingSkills: {
      js: ["8.50", "8.25", "8.25", "8.75", "8.50", "8.75", "8.50", "", ""],
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
        baseValue: new Decimal("5.4"),
        goe: new Decimal("1.3"),
        score: new Decimal("6.7"),
      },
      {
        baseValue: new Decimal("8.6"),
        goe: new Decimal("-1.68"),
        score: new Decimal("6.92"),
      },
      {
        baseValue: new Decimal("7"),
        goe: new Decimal("2.38"),
        score: new Decimal("9.38"),
      },
      {
        baseValue: new Decimal("4.3"),
        goe: new Decimal("0"),
        score: new Decimal("4.3"),
      },
      {
        baseValue: new Decimal("4.5"),
        goe: new Decimal("0.9"),
        score: new Decimal("5.4"),
      },
      {
        baseValue: new Decimal("5.3"),
        goe: new Decimal("-0.42"),
        score: new Decimal("4.88"),
      },
      {
        baseValue: new Decimal("7"),
        goe: new Decimal("1.96"),
        score: new Decimal("8.96"),
      },
      {
        baseValue: new Decimal("3.75"),
        goe: new Decimal("-1.88"),
        score: new Decimal("1.87"),
      },
      {
        baseValue: new Decimal("4"),
        goe: new Decimal("0.16"),
        score: new Decimal("4.16"),
      },
      {
        baseValue: new Decimal("5.1"),
        goe: new Decimal("1.53"),
        score: new Decimal("6.63"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("1.1"),
        score: new Decimal("4.1"),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
    ],
    totalBaseValue: new Decimal("57.95"),
    total: new Decimal("63.3"),
  },
  pc: {
    factor: new Decimal("2.67"),
    composition: new Decimal("8.35"),
    presentation: new Decimal("8.1"),
    skatingSkills: new Decimal("8.5"),
    total: new Decimal("66.62"),
  },
  deductions: { total: new Decimal("-1") },
  total: new Decimal("128.92"),
}
