import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "Challenger Series Lombardia Trophy 2024",
  segment: "mfs",
  rank: "1",
  name: "Ilia MALININ",
  nation: "USA",
  startingNumber: "22",
  ee: [
    {
      abbr: "4F",
      info: "",
      x: false,
      js: ["4", "5", "4", "5", "4", "4", "4", "", ""],
    },
    {
      abbr: "3A",
      info: "",
      x: false,
      js: ["3", "4", "4", "4", "3", "3", "3", "", ""],
    },
    {
      abbr: "4Lzq",
      info: "q",
      x: false,
      js: ["-3", "-1", "-2", "-3", "-4", "-5", "-4", "", ""],
    },
    {
      abbr: "4S",
      info: "",
      x: false,
      js: ["2", "4", "3", "2", "2", "2", "3", "", ""],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["4", "4", "3", "4", "2", "2", "2", "", ""],
    },
    {
      abbr: "3Lz+1Eu+3S",
      info: "",
      x: true,
      js: ["3", "4", "2", "3", "3", "3", "3", "", ""],
    },
    {
      abbr: "4T+3T",
      info: "",
      x: true,
      js: ["1", "2", "2", "2", "1", "1", "1", "", ""],
    },
    {
      abbr: "3F+3A+SEQ",
      info: "",
      x: true,
      js: ["2", "3", "2", "2", "2", "1", "1", "", ""],
    },
    {
      abbr: "CCSp4",
      info: "",
      x: false,
      js: ["3", "3", "2", "3", "2", "2", "2", "", ""],
    },
    {
      abbr: "StSq4",
      info: "",
      x: false,
      js: ["3", "5", "4", "5", "2", "2", "2", "", ""],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["3", "5", "4", "4", "4", "3", "3", "", ""],
    },
    {
      abbr: "FSSp3",
      info: "",
      x: false,
      js: ["2", "3", "3", "3", "2", "2", "2", "", ""],
    },
  ],
  pc: {
    composition: {
      js: ["9.00", "9.50", "9.75", "9.25", "8.75", "8.75", "9.25", "", ""],
    },
    presentation: {
      js: ["9.25", "9.50", "9.75", "9.25", "9.00", "8.50", "9.00", "", ""],
    },
    skatingSkills: {
      js: ["9.00", "9.50", "9.50", "9.00", "9.00", "8.50", "9.00", "", ""],
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
        baseValue: new Decimal("11"),
        goe: new Decimal("4.62"),
        score: new Decimal("15.62"),
      },
      {
        baseValue: new Decimal("8"),
        goe: new Decimal("2.72"),
        score: new Decimal("10.72"),
      },
      {
        baseValue: new Decimal("11.5"),
        goe: new Decimal("-3.68"),
        score: new Decimal("7.82"),
      },
      {
        baseValue: new Decimal("9.7"),
        goe: new Decimal("2.33"),
        score: new Decimal("12.03"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("1.05"),
        score: new Decimal("4.55"),
      },
      {
        baseValue: new Decimal("11.77"),
        goe: new Decimal("1.77"),
        score: new Decimal("13.54"),
      },
      {
        baseValue: new Decimal("15.07"),
        goe: new Decimal("1.33"),
        score: new Decimal("16.4"),
      },
      {
        baseValue: new Decimal("14.63"),
        goe: new Decimal("1.44"),
        score: new Decimal("16.07"),
      },
      {
        baseValue: new Decimal("3.2"),
        goe: new Decimal("0.77"),
        score: new Decimal("3.97"),
      },
      {
        baseValue: new Decimal("3.9"),
        goe: new Decimal("1.25"),
        score: new Decimal("5.15"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("1.8"),
        score: new Decimal("4.8"),
      },
      {
        baseValue: new Decimal("2.6"),
        goe: new Decimal("0.62"),
        score: new Decimal("3.22"),
      },
    ],
    totalBaseValue: new Decimal("97.87"),
    total: new Decimal("113.89"),
  },
  pc: {
    factor: new Decimal("3.33"),
    composition: new Decimal("9.15"),
    presentation: new Decimal("9.2"),
    skatingSkills: new Decimal("9.1"),
    total: new Decimal("91.41"),
  },
  deductions: {
    total: new Decimal("0"),
  },
  total: new Decimal("205.3"),
}
