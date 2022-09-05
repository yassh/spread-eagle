import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU Junior Grand Prix de Courchevel 2022",
  segment: "wfs",
  rank: "17",
  name: "Hannah FRANK",
  nation: "AUT",
  startingNumber: "19",
  ee: [
    {
      abbr: "3Lz<",
      info: "F",
      x: false,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    {
      abbr: "2A+2T",
      info: "",
      x: false,
      js: ["0", "0", "0", "-1", "-1", "-1", "-1", "1", "1"],
    },
    {
      abbr: "3S+2T",
      info: "",
      x: false,
      js: ["0", "1", "0", "0", "1", "0", "1", "1", "2"],
    },
    {
      abbr: "FCSp4",
      info: "",
      x: false,
      js: ["1", "2", "1", "5", "2", "3", "2", "2", "2"],
    },
    {
      abbr: "3T+1Eu+2F",
      info: "",
      x: false,
      js: ["0", "0", "0", "-1", "-1", "1", "0", "0", "2"],
    },
    {
      abbr: "2Lo",
      info: "",
      x: true,
      js: ["0", "1", "1", "2", "1", "0", "1", "2", "1"],
    },
    {
      abbr: "LSp4",
      info: "",
      x: false,
      js: ["3", "3", "3", "3", "2", "3", "3", "2", "2"],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["3", "3", "4", "5", "3", "3", "3", "4", "3"],
    },
    {
      abbr: "3T<",
      info: "F",
      x: true,
      js: ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
    },
    {
      abbr: "2Lz",
      info: "",
      x: true,
      js: ["1", "1", "0", "1", "0", "1", "0", "0", "1"],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["0", "1", "1", "2", "1", "1", "1", "2", "1"],
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
        "5.50",
        "5.25",
        "6.75",
        "6.25",
        "6.00",
        "3.25",
        "4.75",
        "6.00",
        "5.75",
      ],
    },
    presentation: {
      js: [
        "6.00",
        "5.25",
        "5.25",
        "6.00",
        "5.50",
        "3.75",
        "4.50",
        "4.75",
        "5.75",
      ],
    },
    skatingSkills: {
      js: [
        "5.00",
        "5.50",
        "5.75",
        "4.75",
        "5.00",
        "4.00",
        "4.75",
        "4.25",
        "5.75",
      ],
    },
  },
  deductions: [
    { t: "Time violation", p: "-1.00" },
    { t: "Falls", p: "-2.00" },
    { t: "", p: "" },
  ],
}

export const output = {
  ee: {
    elements: [
      {
        baseValue: new Decimal("4.72"),
        goe: new Decimal("-2.36"),
        score: new Decimal("2.36"),
      },
      {
        baseValue: new Decimal("4.60"),
        goe: new Decimal("-0.09"),
        score: new Decimal("4.51"),
      },
      {
        baseValue: new Decimal("5.60"),
        goe: new Decimal("0.25"),
        score: new Decimal("5.85"),
      },
      {
        baseValue: new Decimal("3.20"),
        goe: new Decimal("0.64"),
        score: new Decimal("3.84"),
      },
      {
        baseValue: new Decimal("6.50"),
        goe: new Decimal("0.00"),
        score: new Decimal("6.5"),
      },
      {
        baseValue: new Decimal("1.87"),
        goe: new Decimal("0.17"),
        score: new Decimal("2.04"),
      },
      {
        baseValue: new Decimal("2.70"),
        goe: new Decimal("0.73"),
        score: new Decimal("3.43"),
      },
      {
        baseValue: new Decimal("3.50"),
        goe: new Decimal("1.15"),
        score: new Decimal("4.65"),
      },
      {
        baseValue: new Decimal("3.70"),
        goe: new Decimal("-1.68"),
        score: new Decimal("2.02"),
      },
      {
        baseValue: new Decimal("2.31"),
        goe: new Decimal("0.12"),
        score: new Decimal("2.43"),
      },
      {
        baseValue: new Decimal("3.00"),
        goe: new Decimal("0.57"),
        score: new Decimal("3.57"),
      },
      {
        baseValue: new Decimal(NaN),
        goe: new Decimal(NaN),
        score: new Decimal(NaN),
      },
    ],
    totalBaseValue: new Decimal("41.70"),
    total: new Decimal("41.20"),
  },
  pc: {
    factor: new Decimal("2.67"),
    composition: new Decimal("5.64"),
    presentation: new Decimal("5.29"),
    skatingSkills: new Decimal("5.00"),
    total: new Decimal("42.53"),
  },
  deductions: { total: new Decimal("-3.00") },
  total: new Decimal("80.73"),
}
