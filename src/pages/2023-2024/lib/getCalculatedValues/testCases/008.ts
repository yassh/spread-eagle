import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "2023 AUTUMN CLASSIC INTERNATIONAL",
  segment: "mfs",
  rank: "1",
  name: "Ilia MALININ",
  nation: "USA",
  startingNumber: "12",
  ee: [
    {
      abbr: "3A",
      info: "",
      x: false,
      js: ["3", "3", "3", "4", "4", "3", "4", "", ""],
    },
    {
      abbr: "4Lz",
      info: "",
      x: false,
      js: ["3", "2", "3", "2", "2", "4", "2", "", ""],
    },
    {
      abbr: "2Lo",
      info: "",
      x: false,
      js: ["-1", "0", "-1", "0", "-1", "-2", "-1", "", ""],
    },
    {
      abbr: "4S",
      info: "",
      x: false,
      js: ["2", "2", "3", "1", "1", "1", "0", "", ""],
    },
    {
      abbr: "CCSp4",
      info: "",
      x: false,
      js: ["2", "2", "1", "1", "1", "2", "1", "", ""],
    },
    {
      abbr: "StSq3",
      info: "",
      x: false,
      js: ["1", "2", "2", "2", "2", "2", "1", "", ""],
    },
    {
      abbr: "3Lz+1Eu+3Sq",
      info: "",
      x: true,
      js: ["0", "-3", "-2", "-2", "-2", "-1", "-4", "", ""],
    },
    {
      abbr: "4T+3T",
      info: "",
      x: true,
      js: ["3", "2", "4", "2", "1", "3", "2", "", ""],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["3", "1", "0", "1", "1", "0", "0", "", ""],
    },
    {
      abbr: "3Lz+3A+SEQ",
      info: "",
      x: true,
      js: ["2", "1", "3", "1", "0", "0", "0", "", ""],
    },
    {
      abbr: "FSSp2",
      info: "",
      x: false,
      js: ["1", "1", "1", "1", "1", "2", "0", "", ""],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["3", "3", "3", "3", "3", "3", "3", "", ""],
    },
  ],
  pc: {
    composition: {
      js: ["8.00", "8.75", "8.25", "7.75", "7.75", "8.50", "6.50", "", ""],
    },
    presentation: {
      js: ["8.50", "9.00", "8.50", "8.00", "7.75", "7.75", "7.50", "", ""],
    },
    skatingSkills: {
      js: ["8.00", "8.50", "9.00", "8.50", "8.00", "8.50", "7.25", "", ""],
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
        baseValue: new Decimal("8"),
        goe: new Decimal("2.72"),
        score: new Decimal("10.72"),
      },
      {
        baseValue: new Decimal("11.5"),
        goe: new Decimal("2.76"),
        score: new Decimal("14.26"),
      },
      {
        baseValue: new Decimal("1.7"),
        goe: new Decimal("-0.14"),
        score: new Decimal("1.56"),
      },
      {
        baseValue: new Decimal("9.7"),
        goe: new Decimal("1.36"),
        score: new Decimal("11.06"),
      },
      {
        baseValue: new Decimal("3.2"),
        goe: new Decimal("0.45"),
        score: new Decimal("3.65"),
      },
      {
        baseValue: new Decimal("3.3"),
        goe: new Decimal("0.59"),
        score: new Decimal("3.89"),
      },
      {
        baseValue: new Decimal("11.77"),
        goe: new Decimal("-1.18"),
        score: new Decimal("10.59"),
      },
      {
        baseValue: new Decimal("15.07"),
        goe: new Decimal("2.28"),
        score: new Decimal("17.35"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("0.3"),
        score: new Decimal("3.3"),
      },
      {
        baseValue: new Decimal("15.29"),
        goe: new Decimal("0.64"),
        score: new Decimal("15.93"),
      },
      {
        baseValue: new Decimal("2.3"),
        goe: new Decimal("0.23"),
        score: new Decimal("2.53"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("1.05"),
        score: new Decimal("4.55"),
      },
    ],
    totalBaseValue: new Decimal("88.33"),
    total: new Decimal("99.39"),
  },
  pc: {
    factor: new Decimal("3.33"),
    composition: new Decimal("8.05"),
    presentation: new Decimal("8.1"),
    skatingSkills: new Decimal("8.3"),
    total: new Decimal("81.42"),
  },
  deductions: { total: new Decimal("0") },
  total: new Decimal("180.81"),
}
