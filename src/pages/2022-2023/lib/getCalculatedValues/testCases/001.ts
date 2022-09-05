import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU Junior Grand Prix de Courchevel 2022",
  segment: "mfs",
  rank: "1",
  name: "Shunsuke NAKAMURA",
  nation: "JPN",
  startingNumber: "20",
  ee: [
    {
      abbr: "4T",
      info: "F",
      x: false,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    {
      abbr: "3A",
      info: "",
      x: false,
      js: ["3", "1", "3", "3", "3", "3", "3", "3", "3"],
    },
    {
      abbr: "CSSp4",
      info: "",
      x: false,
      js: ["2", "1", "3", "2", "3", "3", "3", "3", "3"],
    },
    {
      abbr: "3Lz+3T",
      info: "",
      x: false,
      js: ["1", "0", "0", "0", "2", "1", "2", "1", "1"],
    },
    {
      abbr: "3F",
      info: "",
      x: false,
      js: ["1", "1", "2", "2", "2", "2", "3", "4", "2"],
    },
    {
      abbr: "3A+3T",
      info: "",
      x: true,
      js: ["3", "3", "2", "2", "1", "3", "3", "4", "2"],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["3", "0", "2", "3", "1", "2", "2", "3", "1"],
    },
    {
      abbr: "FCSp2",
      info: "",
      x: false,
      js: ["-2", "-2", "-2", "-2", "-2", "-2", "-2", "-2", "-2"],
    },
    {
      abbr: "3Lz*+1Eu+3S",
      info: "*",
      x: true,
      js: ["-1", "0", "1", "-1", "0", "0", "2", "2", "2"],
    },
    {
      abbr: "3Loq",
      info: "q",
      x: true,
      js: ["-2", "-2", "-2", "-1", "-1", "-2", "-1", "0", "-1"],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["1", "0", "3", "1", "0", "-1", "2", "2", "2"],
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
        "7.50",
        "6.75",
        "6.50",
        "7.75",
        "7.00",
        "7.50",
        "7.25",
        "7.25",
        "7.00",
      ],
    },
    presentation: {
      js: [
        "7.50",
        "6.75",
        "7.00",
        "7.50",
        "6.75",
        "7.25",
        "7.50",
        "7.00",
        "6.25",
      ],
    },
    skatingSkills: {
      js: [
        "7.25",
        "7.75",
        "7.50",
        "7.50",
        "7.00",
        "6.75",
        "7.25",
        "7.00",
        "7.00",
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
        baseValue: new Decimal("9.50"),
        goe: new Decimal("-4.75"),
        score: new Decimal("4.75"),
      },
      {
        baseValue: new Decimal("8.00"),
        goe: new Decimal("2.40"),
        score: new Decimal("10.40"),
      },
      {
        baseValue: new Decimal("3.00"),
        goe: new Decimal("0.81"),
        score: new Decimal("3.81"),
      },
      {
        baseValue: new Decimal("10.10"),
        goe: new Decimal("0.51"),
        score: new Decimal("10.61"),
      },
      {
        baseValue: new Decimal("5.30"),
        goe: new Decimal("1.06"),
        score: new Decimal("6.36"),
      },
      {
        baseValue: new Decimal("13.42"),
        goe: new Decimal("2.06"),
        score: new Decimal("15.48"),
      },
      {
        baseValue: new Decimal("3.00"),
        goe: new Decimal("1.00"),
        score: new Decimal("4.00"),
      },
      {
        baseValue: new Decimal("2.30"),
        goe: new Decimal("-0.46"),
        score: new Decimal("1.84"),
      },
      {
        baseValue: new Decimal("5.28"),
        goe: new Decimal("0.25"),
        score: new Decimal("5.53"),
      },
      {
        baseValue: new Decimal("5.39"),
        goe: new Decimal("-0.70"),
        score: new Decimal("4.69"),
      },
      {
        baseValue: new Decimal("3.50"),
        goe: new Decimal("0.40"),
        score: new Decimal("3.90"),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
    ],
    totalBaseValue: new Decimal("68.79"),
    total: new Decimal("71.37"),
  },
  pc: {
    factor: new Decimal("3.33"),
    composition: new Decimal("7.18"),
    presentation: new Decimal("7.11"),
    skatingSkills: new Decimal("7.21"),
    total: new Decimal("71.6"),
  },
  deductions: { total: new Decimal("-1.00") },
  total: new Decimal("141.97"),
}
