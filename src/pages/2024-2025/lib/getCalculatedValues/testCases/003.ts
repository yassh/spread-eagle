import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Riga Cup 2024",
  segment: "idfd",
  rank: "12",
  name: "Michelle DEYCH / Ryan HU",
  nation: "USA",
  startingNumber: "10",
  ee: [
    {
      abbr: "OFTW1+OFTM2",
      info: "",
      x: false,
      js: ["1", "1", "1", "2", "2", "1", "1", "1", "2"],
    },
    {
      abbr: "SyTwW3+SyTwM2",
      info: "",
      x: false,
      js: ["-1", "-1", "-1", "0", "1", "-1", "0", "0", "-1"],
    },
    {
      abbr: "DSp4",
      info: "",
      x: false,
      js: ["1", "1", "1", "1", "2", "2", "1", "1", "1"],
    },
    {
      abbr: "SlLi2",
      info: "Fx",
      x: false,
      js: ["-5", "-4", "-5", "-5", "-5", "-5", "-4", "-4", "-5"],
    },
    {
      abbr: "MiStW1+MiStM1",
      info: "",
      x: false,
      js: ["1", "1", "0", "1", "1", "0", "0", "0", "0"],
    },
    {
      abbr: "ChSt1",
      info: "",
      x: false,
      js: ["1", "1", "2", "2", "1", "0", "1", "2", "2"],
    },
    {
      abbr: "ChSl1",
      info: "",
      x: false,
      js: ["1", "1", "2", "3", "1", "2", "2", "2", "1"],
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
        "6.25",
        "6.00",
        "6.00",
        "6.50",
        "6.25",
        "5.75",
        "5.75",
        "6.25",
        "6.00",
      ],
    },
    presentation: {
      js: [
        "5.00",
        "6.00",
        "6.00",
        "6.25",
        "6.50",
        "5.50",
        "5.25",
        "6.00",
        "5.75",
      ],
    },
    skatingSkills: {
      js: [
        "5.50",
        "6.00",
        "6.25",
        "6.50",
        "6.50",
        "5.75",
        "5.75",
        "6.00",
        "6.25",
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
        baseValue: new Decimal("5.09"),
        goe: new Decimal("0.93"),
        score: new Decimal("6.02"),
      },
      {
        baseValue: new Decimal("5.72"),
        goe: new Decimal("-0.41"),
        score: new Decimal("5.31"),
      },
      {
        baseValue: new Decimal("6"),
        goe: new Decimal("0.64"),
        score: new Decimal("6.64"),
      },
      {
        baseValue: new Decimal("3.95"),
        goe: new Decimal("-2.26"),
        score: new Decimal("1.69"),
      },
      {
        baseValue: new Decimal("6.96"),
        goe: new Decimal("0.45"),
        score: new Decimal("7.41"),
      },
      {
        baseValue: new Decimal("1.1"),
        goe: new Decimal("1.19"),
        score: new Decimal("2.29"),
      },
      {
        baseValue: new Decimal("1.1"),
        goe: new Decimal("1.3"),
        score: new Decimal("2.4"),
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
    totalBaseValue: new Decimal("29.92"),
    total: new Decimal("31.76"),
  },
  pc: {
    factor: new Decimal("2"),
    composition: new Decimal("6.07"),
    presentation: new Decimal("5.82"),
    skatingSkills: new Decimal("6.07"),
    total: new Decimal("35.92"),
  },
  deductions: {
    total: new Decimal("-2"),
  },
  total: new Decimal("65.68"),
}
