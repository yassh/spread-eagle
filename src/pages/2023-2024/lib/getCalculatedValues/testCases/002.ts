import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Bangkok 2023",
  segment: "idfd",
  rank: "1",
  name: "Leah NESET / Artem MARKELOV",
  nation: "USA",
  startingNumber: "12",
  ee: [
    {
      abbr: "SyTwW4+SyTwM4",
      info: "",
      x: false,
      js: ["2", "3", "1", "1", "2", "1", "2", "3", "1"],
    },
    {
      abbr: "CiStW3+CiStM3",
      info: "",
      x: false,
      js: ["2", "3", "3", "2", "2", "3", "3", "1", "3"],
    },
    {
      abbr: "CuLi4+RoLi4",
      info: "",
      x: false,
      js: ["2", "4", "3", "2", "2", "3", "2", "2", "3"],
    },
    {
      abbr: "OFTW3+OFTM3",
      info: "",
      x: false,
      js: ["2", "3", "3", "2", "3", "2", "2", "3", "3"],
    },
    {
      abbr: "DSp4",
      info: "",
      x: false,
      js: ["2", "2", "3", "3", "3", "3", "2", "2", "3"],
    },
    {
      abbr: "ChSt1",
      info: "",
      x: false,
      js: ["2", "2", "3", "3", "2", "2", "2", "2", "3"],
    },
    {
      abbr: "ChSl1",
      info: "",
      x: false,
      js: ["2", "4", "2", "3", "3", "3", "2", "3", "3"],
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
        "7.50",
        "8.25",
        "7.50",
        "7.75",
        "7.00",
        "7.50",
        "7.75",
        "7.75",
        "7.75",
      ],
    },
    presentation: {
      js: [
        "7.50",
        "8.00",
        "7.25",
        "8.00",
        "7.25",
        "7.25",
        "7.50",
        "7.25",
        "8.00",
      ],
    },
    skatingSkills: {
      js: [
        "7.75",
        "8.00",
        "7.50",
        "7.50",
        "7.50",
        "7.25",
        "7.50",
        "7.50",
        "7.75",
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
        baseValue: new Decimal("6.84"),
        goe: new Decimal("1.25"),
        score: new Decimal("8.09"),
      },
      {
        baseValue: new Decimal("8.2"),
        goe: new Decimal("2.69"),
        score: new Decimal("10.89"),
      },
      {
        baseValue: new Decimal("10.9"),
        goe: new Decimal("2.33"),
        score: new Decimal("13.23"),
      },
      {
        baseValue: new Decimal("6.1"),
        goe: new Decimal("1.87"),
        score: new Decimal("7.97"),
      },
      {
        baseValue: new Decimal("6"),
        goe: new Decimal("1.45"),
        score: new Decimal("7.45"),
      },
      {
        baseValue: new Decimal("1.1"),
        goe: new Decimal("1.9"),
        score: new Decimal("3"),
      },
      {
        baseValue: new Decimal("1.1"),
        goe: new Decimal("2.25"),
        score: new Decimal("3.35"),
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
    totalBaseValue: new Decimal("40.24"),
    total: new Decimal("53.98"),
  },
  pc: {
    factor: new Decimal("2"),
    composition: new Decimal("7.64"),
    presentation: new Decimal("7.54"),
    skatingSkills: new Decimal("7.57"),
    total: new Decimal("45.5"),
  },
  deductions: { total: new Decimal("0") },
  total: new Decimal("99.48"),
}
