import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Czech Skate 2022",
  segment: "psp",
  rank: "3",
  name: "Chloe PANETTA / Kieran THRASHER",
  nation: "CAN",
  startingNumber: "1",
  ee: [
    {
      abbr: "3Tw1",
      info: "",
      x: false,
      js: ["-2", "-2", "-2", "-3", "-3", "-3", "-2", "-3", "-3"],
    },
    {
      abbr: "2A",
      info: "F",
      x: false,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    {
      abbr: "5RLi4",
      info: "",
      x: false,
      js: ["0", "1", "2", "-1", "1", "-1", "-1", "-1", "2"],
    },
    {
      abbr: "2FTh",
      info: "",
      x: false,
      js: ["-1", "0", "-2", "-3", "-1", "-2", "-2", "-1", "-3"],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["1", "0", "1", "1", "0", "0", "2", "0", "0"],
    },
    {
      abbr: "StSq4",
      info: "",
      x: false,
      js: ["2", "1", "2", "1", "2", "1", "1", "1", "1"],
    },
    {
      abbr: "BiDs3",
      info: "",
      x: false,
      js: ["0", "2", "2", "2", "2", "1", "2", "2", "2"],
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
      js: [
        "5.75",
        "5.50",
        "6.50",
        "6.00",
        "5.50",
        "5.00",
        "6.00",
        "6.75",
        "4.75",
      ],
    },
    presentation: {
      js: [
        "6.00",
        "4.75",
        "6.00",
        "5.00",
        "5.00",
        "5.50",
        "5.50",
        "6.50",
        "5.00",
      ],
    },
    skatingSkills: {
      js: [
        "5.50",
        "6.00",
        "6.75",
        "5.25",
        "5.50",
        "4.75",
        "6.25",
        "6.50",
        "5.00",
      ],
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
        baseValue: new Decimal("5.10"),
        goe: new Decimal("-1.31"),
        score: new Decimal("3.79"),
      },
      {
        baseValue: new Decimal("3.30"),
        goe: new Decimal("-1.65"),
        score: new Decimal("1.65"),
      },
      {
        baseValue: new Decimal("7.00"),
        goe: new Decimal("0.10"),
        score: new Decimal("7.10"),
      },
      {
        baseValue: new Decimal("3.00"),
        goe: new Decimal("-0.51"),
        score: new Decimal("2.49"),
      },
      {
        baseValue: new Decimal("3.50"),
        goe: new Decimal("0.15"),
        score: new Decimal("3.65"),
      },
      {
        baseValue: new Decimal("3.90"),
        goe: new Decimal("0.50"),
        score: new Decimal("4.40"),
      },
      {
        baseValue: new Decimal("3.70"),
        goe: new Decimal("0.69"),
        score: new Decimal("4.39"),
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
    totalBaseValue: new Decimal("29.50"),
    total: new Decimal("27.47"),
  },
  pc: {
    factor: new Decimal("1.33"),
    composition: new Decimal("5.75"),
    presentation: new Decimal("5.43"),
    skatingSkills: new Decimal("5.71"),
    total: new Decimal("22.46"),
  },
  deductions: { total: new Decimal("-2.00") },
  total: new Decimal("47.93"),
}
