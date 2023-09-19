import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU Four Continents Figure Skating Championships 2023",
  segment: "idfd",
  rank: "2",
  name: "Laurence FOURNIER BEAUDRY / Nikolaj SOERENSEN",
  nation: "CAN",
  startingNumber: "11",
  ee: [
    {
      abbr: "SyTwW4+SyTwM4",
      info: "",
      x: false,
      js: ["2", "4", "4", "4", "4", "3", "3", "3", "4"],
    },
    {
      abbr: "SlLi3+RoLi4",
      info: "",
      x: false,
      js: ["3", "4", "4", "3", "3", "4", "3", "3", "4"],
    },
    {
      abbr: "MiStW3+MiStM3",
      info: "",
      x: false,
      js: ["3", "3", "3", "4", "4", "4", "3", "3", "3"],
    },
    {
      abbr: "OFTW2+OFTM3",
      info: "",
      x: false,
      js: ["4", "4", "3", "3", "4", "4", "4", "4", "4"],
    },
    {
      abbr: "DSp4",
      info: "",
      x: false,
      js: ["3", "4", "2", "3", "5", "4", "4", "4", "3"],
    },
    {
      abbr: "ChAJ1",
      info: "",
      x: false,
      js: ["4", "4", "3", "3", "4", "4", "4", "3", "4"],
    },
    {
      abbr: "StaLi4",
      info: "",
      x: false,
      js: ["4", "4", "4", "4", "5", "4", "5", "4", "4"],
    },
    {
      abbr: "ChSt1",
      info: "",
      x: false,
      js: ["4", "5", "4", "4", "5", "5", "4", "4", "5"],
    },
    {
      abbr: "ChSl1",
      info: "",
      x: false,
      js: ["4", "3", "5", "4", "4", "4", "4", "3", "4"],
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
        "9.50",
        "9.50",
        "9.50",
        "9.25",
        "9.25",
        "9.50",
        "9.25",
        "9.50",
        "9.25",
      ],
    },
    presentation: {
      js: [
        "9.00",
        "9.50",
        "9.50",
        "9.50",
        "9.50",
        "9.50",
        "9.25",
        "9.50",
        "9.50",
      ],
    },
    skatingSkills: {
      js: [
        "9.00",
        "9.25",
        "9.00",
        "9.25",
        "9.25",
        "9.25",
        "9.00",
        "9.25",
        "9.25",
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
        goe: new Decimal("2.59"),
        score: new Decimal("9.43"),
      },
      {
        baseValue: new Decimal("10.15"),
        goe: new Decimal("3.29"),
        score: new Decimal("13.44"),
      },
      {
        baseValue: new Decimal("8.2"),
        goe: new Decimal("3.44"),
        score: new Decimal("11.64"),
      },
      {
        baseValue: new Decimal("5.72"),
        goe: new Decimal("2.8"),
        score: new Decimal("8.52"),
      },
      {
        baseValue: new Decimal("6"),
        goe: new Decimal("2.01"),
        score: new Decimal("8.01"),
      },
      {
        baseValue: new Decimal("1.1"),
        goe: new Decimal("3.08"),
        score: new Decimal("4.18"),
      },
      {
        baseValue: new Decimal("5.45"),
        goe: new Decimal("1.99"),
        score: new Decimal("7.44"),
      },
      {
        baseValue: new Decimal("1.1"),
        goe: new Decimal("3.68"),
        score: new Decimal("4.78"),
      },
      {
        baseValue: new Decimal("1.1"),
        goe: new Decimal("3.2"),
        score: new Decimal("4.3"),
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
    totalBaseValue: new Decimal("45.66"),
    total: new Decimal("71.74"),
  },
  pc: {
    factor: new Decimal("2"),
    composition: new Decimal("9.39"),
    presentation: new Decimal("9.46"),
    skatingSkills: new Decimal("9.18"),
    total: new Decimal("56.06"),
  },
  deductions: { total: new Decimal("0") },
  total: new Decimal("127.8"),
}
