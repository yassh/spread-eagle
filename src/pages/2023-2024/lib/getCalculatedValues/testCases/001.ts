import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Bangkok 2023",
  segment: "idrd",
  rank: "1",
  name: "Leah NESET / Artem MARKELOV",
  nation: "USA",
  startingNumber: "2",
  ee: [
    {
      abbr: "1RF4+kpYYYY",
      info: "",
      x: false,
      js: ["2", "2", "2", "2", "3", "2", "3", "1", "2"],
    },
    {
      abbr: "2RF3+kpYYNY",
      info: "",
      x: false,
      js: ["1", "2", "1", "1", "2", "2", "3", "1", "1"],
    },
    {
      abbr: "SlLi4",
      info: "",
      x: false,
      js: ["2", "3", "2", "2", "3", "2", "2", "2", "3"],
    },
    {
      abbr: "SqTwW4+SqTwM4",
      info: "",
      x: false,
      js: ["3", "3", "3", "2", "2", "3", "3", "2", "2"],
    },
    {
      abbr: "MiStW4+MiStM3",
      info: "",
      x: false,
      js: ["3", "3", "3", "3", "4", "3", "4", "2", "2"],
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
        "7.25",
        "7.00",
        "7.50",
        "7.25",
        "7.50",
        "7.50",
        "8.00",
        "7.50",
        "7.00",
      ],
    },
    presentation: {
      js: [
        "7.00",
        "7.50",
        "7.00",
        "7.25",
        "7.25",
        "7.50",
        "7.25",
        "7.25",
        "7.50",
      ],
    },
    skatingSkills: {
      js: [
        "7.25",
        "7.50",
        "7.50",
        "7.50",
        "7.25",
        "7.25",
        "7.00",
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
        baseValue: new Decimal("5.5"),
        goe: new Decimal("1.13"),
        score: new Decimal("6.63"),
      },
      {
        baseValue: new Decimal("4.75"),
        goe: new Decimal("0.75"),
        score: new Decimal("5.5"),
      },
      {
        baseValue: new Decimal("5.45"),
        goe: new Decimal("1.1"),
        score: new Decimal("6.55"),
      },
      {
        baseValue: new Decimal("7.34"),
        goe: new Decimal("2.06"),
        score: new Decimal("9.4"),
      },
      {
        baseValue: new Decimal("8.58"),
        goe: new Decimal("3.14"),
        score: new Decimal("11.72"),
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
    totalBaseValue: new Decimal("31.62"),
    total: new Decimal("39.8"),
  },
  pc: {
    factor: new Decimal("1.33"),
    composition: new Decimal("7.36"),
    presentation: new Decimal("7.29"),
    skatingSkills: new Decimal("7.29"),
    total: new Decimal("29.19"),
  },
  deductions: { total: new Decimal("0") },
  total: new Decimal("68.99"),
}
