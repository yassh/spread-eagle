import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues = {
  preview: true,
  event: "ISU Junior Grand Prix de Courchevel 2022",
  segment: "idrd",
  rank: "2",
  name: "Celina FRADJI / Jean-Hans FOURNEAUX",
  nation: "FRA",
  startingNumber: "8",
  ee: [
    {
      abbr: "SqTwW4+SqTwM4",
      info: "",
      x: false,
      js: ["2", "2", "3", "2", "2", "3", "2", "", ""],
    },
    {
      abbr: "1AT2+kpNTYY",
      info: "",
      x: false,
      js: ["1", "2", "2", "2", "1", "1", "1", "", ""],
    },
    {
      abbr: "SlLi4",
      info: "",
      x: false,
      js: ["1", "2", "1", "1", "2", "1", "1", "", ""],
    },
    {
      abbr: "2AT2+kpNYNY",
      info: "",
      x: false,
      js: ["1", "2", "1", "1", "1", "2", "0", "", ""],
    },
    {
      abbr: "MiStW2+MiStM3",
      info: "",
      x: false,
      js: ["1", "1", "1", "1", "1", "1", "1", "", ""],
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
      js: ["6.25", "6.50", "7.25", "6.75", "6.50", "7.00", "6.25", "", ""],
    },
    presentation: {
      js: ["6.50", "6.75", "7.00", "7.00", "6.00", "6.50", "6.50", "", ""],
    },
    skatingSkills: {
      js: ["6.25", "6.50", "6.50", "6.50", "6.50", "6.75", "5.50", "", ""],
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
        baseValue: new Decimal("7.34"),
        goe: new Decimal("1.76"),
        score: new Decimal("9.10"),
      },
      {
        baseValue: new Decimal("4.00"),
        goe: new Decimal("0.74"),
        score: new Decimal("4.74"),
      },
      {
        baseValue: new Decimal("5.45"),
        goe: new Decimal("0.58"),
        score: new Decimal("6.03"),
      },
      {
        baseValue: new Decimal("4.00"),
        goe: new Decimal("0.63"),
        score: new Decimal("4.63"),
      },
      {
        baseValue: new Decimal("7.83"),
        goe: new Decimal("1.04"),
        score: new Decimal("8.87"),
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
    totalBaseValue: new Decimal("28.62"),
    total: new Decimal("33.37"),
  },
  pc: {
    factor: new Decimal("1.33"),
    composition: new Decimal("6.60"),
    presentation: new Decimal("6.65"),
    skatingSkills: new Decimal("6.45"),
    total: new Decimal("26.20"),
  },
  deductions: { total: new Decimal("0.00") },
  total: new Decimal("59.57"),
}
