import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "2023 AUTUMN CLASSIC INTERNATIONAL",
  segment: "wsp",
  rank: "1",
  name: "Kaori SAKAMOTO",
  nation: "JPN",
  startingNumber: "9",
  ee: [
    {
      abbr: "2A",
      info: "",
      x: false,
      js: ["4", "5", "4", "4", "4", "4", "4", "", ""],
    },
    {
      abbr: "3Lz!",
      info: "!",
      x: false,
      js: ["0", "2", "1", "1", "1", "0", "0", "", ""],
    },
    {
      abbr: "FCSp4",
      info: "",
      x: false,
      js: ["1", "3", "2", "3", "0", "2", "1", "", ""],
    },
    {
      abbr: "3F+3T",
      info: "",
      x: true,
      js: ["4", "4", "3", "4", "3", "3", "3", "", ""],
    },
    {
      abbr: "LSp4",
      info: "",
      x: false,
      js: ["4", "5", "4", "2", "4", "4", "4", "", ""],
    },
    {
      abbr: "StSq3",
      info: "",
      x: false,
      js: ["4", "4", "4", "4", "4", "4", "3", "", ""],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["3", "3", "3", "2", "2", "3", "3", "", ""],
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
      js: ["9.25", "9.00", "9.25", "9.00", "8.25", "8.75", "9.00", "", ""],
    },
    presentation: {
      js: ["8.50", "8.75", "9.00", "9.25", "8.50", "8.75", "9.25", "", ""],
    },
    skatingSkills: {
      js: ["9.00", "9.25", "9.25", "9.25", "9.00", "9.00", "9.00", "", ""],
    },
  },
  deductions: [
    { t: "", p: "" },
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
        baseValue: new Decimal("5.9"),
        goe: new Decimal("0.35"),
        score: new Decimal("6.25"),
      },
      {
        baseValue: new Decimal("3.2"),
        goe: new Decimal("0.58"),
        score: new Decimal("3.78"),
      },
      {
        baseValue: new Decimal("10.45"),
        goe: new Decimal("1.8"),
        score: new Decimal("12.25"),
      },
      {
        baseValue: new Decimal("2.7"),
        goe: new Decimal("1.08"),
        score: new Decimal("3.78"),
      },
      {
        baseValue: new Decimal("3.3"),
        goe: new Decimal("1.32"),
        score: new Decimal("4.62"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("0.98"),
        score: new Decimal("4.48"),
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
    totalBaseValue: new Decimal("32.35"),
    total: new Decimal("39.78"),
  },
  pc: {
    factor: new Decimal("1.33"),
    composition: new Decimal("9"),
    presentation: new Decimal("8.85"),
    skatingSkills: new Decimal("9.1"),
    total: new Decimal("35.84"),
  },
  deductions: { total: new Decimal("0") },
  total: new Decimal("75.62"),
}
