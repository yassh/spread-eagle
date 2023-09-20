import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Bangkok 2023",
  segment: "msp",
  rank: "",
  name: "Rio NAKATA",
  nation: "JPN",
  startingNumber: "11",
  ee: [
    {
      abbr: "3A",
      info: "",
      x: false,
      js: ["-1", "-1", "3", "1", "2", "2", "2", "0", "1"],
    },
    {
      abbr: "3Lz!",
      info: "!",
      x: false,
      js: ["1", "0", "2", "0", "1", "1", "0", "1", "1"],
    },
    {
      abbr: "FSSp4",
      info: "",
      x: false,
      js: ["1", "3", "2", "2", "2", "2", "2", "3", "2"],
    },
    {
      abbr: "3T+3T",
      info: "",
      x: true,
      js: ["1", "2", "2", "2", "3", "3", "2", "0", "1"],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["2", "3", "1", "2", "3", "3", "2", "1", "1"],
    },
    {
      abbr: "StSq3",
      info: "",
      x: false,
      js: ["2", "4", "3", "3", "2", "3", "3", "1", "1"],
    },
    {
      abbr: "CCSp2",
      info: "",
      x: false,
      js: ["-1", "2", "-2", "-1", "0", "0", "0", "-1", "-1"],
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
        "6.50",
        "7.00",
        "7.25",
        "7.75",
        "7.50",
        "6.50",
        "7.75",
        "7.00",
        "6.75",
      ],
    },
    presentation: {
      js: [
        "6.00",
        "7.25",
        "6.75",
        "7.75",
        "7.50",
        "6.50",
        "7.50",
        "7.25",
        "7.00",
      ],
    },
    skatingSkills: {
      js: [
        "6.75",
        "7.50",
        "7.50",
        "8.00",
        "7.75",
        "6.75",
        "7.75",
        "7.25",
        "7.00",
      ],
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
        goe: new Decimal("0.8"),
        score: new Decimal("8.8"),
      },
      {
        baseValue: new Decimal("5.9"),
        goe: new Decimal("0.42"),
        score: new Decimal("6.32"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("0.64"),
        score: new Decimal("3.64"),
      },
      {
        baseValue: new Decimal("9.24"),
        goe: new Decimal("0.78"),
        score: new Decimal("10.02"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("0.7"),
        score: new Decimal("4.2"),
      },
      {
        baseValue: new Decimal("3.3"),
        goe: new Decimal("0.8"),
        score: new Decimal("4.1"),
      },
      {
        baseValue: new Decimal("2.3"),
        goe: new Decimal("-0.13"),
        score: new Decimal("2.17"),
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
    totalBaseValue: new Decimal("35.24"),
    total: new Decimal("39.25"),
  },
  pc: {
    factor: new Decimal("1.67"),
    composition: new Decimal("7.11"),
    presentation: new Decimal("7.11"),
    skatingSkills: new Decimal("7.36"),
    total: new Decimal("36.03"),
  },
  deductions: { total: new Decimal("0") },
  total: new Decimal("75.28"),
}
