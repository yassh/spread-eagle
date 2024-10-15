import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "Challenger Series Lombardia Trophy 2024",
  segment: "msp",
  rank: "2",
  name: "Yuma KAGIYAMA",
  nation: "JPN",
  startingNumber: "9",
  ee: [
    {
      abbr: "4S",
      info: "",
      x: false,
      js: ["-2", "-2", "-1", "-1", "-3", "-2", "-2", "", ""],
    },
    {
      abbr: "4T+3T",
      info: "",
      x: false,
      js: ["4", "4", "3", "4", "3", "4", "3", "", ""],
    },
    {
      abbr: "FSSp4",
      info: "",
      x: false,
      js: ["4", "3", "3", "3", "3", "3", "4", "", ""],
    },
    {
      abbr: "3A",
      info: "",
      x: true,
      js: ["3", "2", "3", "4", "3", "3", "3", "", ""],
    },
    {
      abbr: "CCSp4",
      info: "",
      x: false,
      js: ["3", "2", "3", "3", "2", "3", "3", "", ""],
    },
    {
      abbr: "StSq4",
      info: "",
      x: false,
      js: ["4", "4", "3", "3", "5", "3", "3", "", ""],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["3", "1", "2", "2", "4", "1", "2", "", ""],
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
      js: ["8.75", "9.25", "9.00", "9.00", "9.25", "8.75", "8.50", "", ""],
    },
    presentation: {
      js: ["9.00", "9.00", "9.00", "9.25", "9.00", "8.50", "8.25", "", ""],
    },
    skatingSkills: {
      js: ["8.50", "9.25", "9.00", "9.00", "9.25", "9.00", "9.00", "", ""],
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
        baseValue: new Decimal("9.7"),
        goe: new Decimal("-1.75"),
        score: new Decimal("7.95"),
      },
      {
        baseValue: new Decimal("13.7"),
        goe: new Decimal("3.42"),
        score: new Decimal("17.12"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("0.96"),
        score: new Decimal("3.96"),
      },
      {
        baseValue: new Decimal("8.8"),
        goe: new Decimal("2.4"),
        score: new Decimal("11.2"),
      },
      {
        baseValue: new Decimal("3.2"),
        goe: new Decimal("0.9"),
        score: new Decimal("4.1"),
      },
      {
        baseValue: new Decimal("3.9"),
        goe: new Decimal("1.33"),
        score: new Decimal("5.23"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("0.7"),
        score: new Decimal("4.2"),
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
      {
        baseValue: new Decimal("NaN"),
        goe: new Decimal("NaN"),
        score: new Decimal("NaN"),
      },
    ],
    totalBaseValue: new Decimal("45.8"),
    total: new Decimal("53.76"),
  },
  pc: {
    factor: new Decimal("1.67"),
    composition: new Decimal("8.95"),
    presentation: new Decimal("8.9"),
    skatingSkills: new Decimal("9.05"),
    total: new Decimal("44.92"),
  },
  deductions: {
    total: new Decimal("0"),
  },
  total: new Decimal("98.68"),
}
