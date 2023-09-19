import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Czech Skate 2022",
  segment: "pfs",
  rank: "3",
  name: "Haruna MURAKAMI / Sumitada MORIGUCHI",
  nation: "JPN",
  startingNumber: "4",
  ee: [
    {
      abbr: "2Tw2",
      info: "",
      x: false,
      js: ["0", "0", "1", "1", "2", "0", "1", "0", "2"],
    },
    {
      abbr: "3Lzq",
      info: "q",
      x: false,
      js: ["-1", "-2", "-2", "-3", "-3", "-2", "-2", "-2", "-2"],
    },
    {
      abbr: "5RLi2",
      info: "",
      x: false,
      js: ["-1", "1", "-1", "0", "1", "0", "-1", "-1", "1"],
    },
    {
      abbr: "2STh",
      info: "",
      x: false,
      js: ["0", "2", "2", "2", "2", "1", "2", "1", "0"],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["2", "1", "1", "2", "2", "1", "2", "1", "1"],
    },
    {
      abbr: "3S+3T+2A+SEQ",
      info: "",
      x: false,
      js: ["2", "1", "3", "4", "3", "4", "3", "3", "3"],
    },
    {
      abbr: "PCoSp4",
      info: "",
      x: false,
      js: ["0", "-1", "-1", "0", "1", "-2", "1", "-2", "2"],
    },
    {
      abbr: "2FTh",
      info: "",
      x: false,
      js: ["-1", "1", "-1", "0", "1", "-1", "0", "0", "0"],
    },
    {
      abbr: "3Li3",
      info: "",
      x: false,
      js: ["0", "1", "1", "2", "2", "0", "0", "1", "2"],
    },
    {
      abbr: "BoDsB",
      info: "",
      x: false,
      js: ["-2", "0", "0", "-1", "-1", "-1", "-2", "-2", "0"],
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
        "4.75",
        "5.25",
        "4.00",
        "5.25",
        "4.75",
        "4.75",
        "4.75",
        "4.75",
        "4.00",
      ],
    },
    presentation: {
      js: [
        "4.50",
        "4.75",
        "2.50",
        "5.50",
        "4.50",
        "4.75",
        "4.50",
        "4.25",
        "3.00",
      ],
    },
    skatingSkills: {
      js: [
        "5.50",
        "5.00",
        "5.00",
        "5.75",
        "5.50",
        "5.75",
        "5.50",
        "5.25",
        "5.25",
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
        baseValue: new Decimal("3.00"),
        goe: new Decimal("0.21"),
        score: new Decimal("3.21"),
      },
      {
        baseValue: new Decimal("5.90"),
        goe: new Decimal("-1.26"),
        score: new Decimal("4.64"),
      },
      {
        baseValue: new Decimal("6.20"),
        goe: new Decimal("-0.09"),
        score: new Decimal("6.11"),
      },
      {
        baseValue: new Decimal("2.50"),
        goe: new Decimal("0.36"),
        score: new Decimal("2.86"),
      },
      {
        baseValue: new Decimal("3.00"),
        goe: new Decimal("0.71"),
        score: new Decimal("3.71"),
      },
      {
        baseValue: new Decimal("11.80"),
        goe: new Decimal("1.29"),
        score: new Decimal("13.09"),
      },
      {
        baseValue: new Decimal("4.50"),
        goe: new Decimal("-0.13"),
        score: new Decimal("4.37"),
      },
      {
        baseValue: new Decimal("3.00"),
        goe: new Decimal("-0.04"),
        score: new Decimal("2.96"),
      },
      {
        baseValue: new Decimal("4.70"),
        goe: new Decimal("0.47"),
        score: new Decimal("5.17"),
      },
      {
        baseValue: new Decimal("3.20"),
        goe: new Decimal("-0.32"),
        score: new Decimal("2.88"),
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
    totalBaseValue: new Decimal("47.80"),
    total: new Decimal("49.00"),
  },
  pc: {
    factor: new Decimal("2.67"),
    composition: new Decimal("4.71"),
    presentation: new Decimal("4.32"),
    skatingSkills: new Decimal("5.39"),
    total: new Decimal("38.5"),
  },
  deductions: { total: new Decimal("0.00") },
  total: new Decimal("87.5"),
}
