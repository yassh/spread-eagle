import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU JGP Riga Cup 2024",
  segment: "idrd",
  rank: "2",
  name: "Darya GRIMM / Michail SAVITSKIY",
  nation: "GER",
  startingNumber: "15",
  ee: [
    {
      abbr: "SqTwW4+SqTwM3",
      info: "",
      x: false,
      js: ["2", "2", "2", "2", "2", "2", "3", "2", "2"],
    },
    {
      abbr: "1PD3+kpNYYY",
      info: "",
      x: false,
      js: ["2", "2", "1", "2", "2", "2", "2", "2", "2"],
    },
    {
      abbr: "2PD1+kpTNYY<",
      info: "<",
      x: false,
      js: ["2", "1", "0", "2", "2", "2", "1", "1", "1"],
    },
    {
      abbr: "MiStW2+MiStM2",
      info: "",
      x: false,
      js: ["2", "2", "2", "2", "3", "3", "2", "2", "2"],
    },
    {
      abbr: "RoLi3",
      info: "",
      x: false,
      js: ["1", "1", "0", "0", "0", "1", "1", "0", "-1"],
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
        "7.50",
        "6.75",
        "7.25",
        "7.50",
        "7.50",
        "7.25",
        "6.75",
        "7.50",
      ],
    },
    presentation: {
      js: [
        "7.00",
        "7.00",
        "6.75",
        "7.25",
        "7.75",
        "7.25",
        "7.50",
        "7.00",
        "7.50",
      ],
    },
    skatingSkills: {
      js: [
        "7.00",
        "7.75",
        "6.25",
        "7.00",
        "7.50",
        "7.00",
        "7.25",
        "6.75",
        "7.25",
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
        baseValue: new Decimal("6.97"),
        goe: new Decimal("1.6"),
        score: new Decimal("8.57"),
      },
      {
        baseValue: new Decimal("4.75"),
        goe: new Decimal("1.05"),
        score: new Decimal("5.8"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("0.75"),
        score: new Decimal("4.25"),
      },
      {
        baseValue: new Decimal("7.46"),
        goe: new Decimal("2.23"),
        score: new Decimal("9.69"),
      },
      {
        baseValue: new Decimal("4.7"),
        goe: new Decimal("0.21"),
        score: new Decimal("4.91"),
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
    totalBaseValue: new Decimal("27.38"),
    total: new Decimal("33.22"),
  },
  pc: {
    factor: new Decimal("1.33"),
    composition: new Decimal("7.29"),
    presentation: new Decimal("7.21"),
    skatingSkills: new Decimal("7.11"),
    total: new Decimal("28.75"),
  },
  deductions: {
    total: new Decimal("0"),
  },
  total: new Decimal("61.97"),
}
