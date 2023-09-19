import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "ISU Junior Grand Prix de Courchevel 2022",
  segment: "idfd",
  rank: "1",
  name: "Hannah LIM / Ye QUAN",
  nation: "KOR",
  startingNumber: "11",
  ee: [
    {
      abbr: "ChSp1",
      info: "",
      x: false,
      js: ["3", "1", "3", "2", "2", "2", "2", "", ""],
    },
    {
      abbr: "SyTwW4+SyTwM4",
      info: "",
      x: false,
      js: ["4", "3", "3", "3", "2", "4", "3", "", ""],
    },
    {
      abbr: "OFTW4+OFTM3",
      info: "",
      x: false,
      js: ["2", "2", "2", "2", "2", "2", "2", "", ""],
    },
    {
      abbr: "SlLi4",
      info: "",
      x: false,
      js: ["3", "3", "2", "3", "2", "3", "3", "", ""],
    },
    {
      abbr: "CiStW2+CiStM3",
      info: "",
      x: false,
      js: ["3", "1", "2", "3", "2", "2", "1", "", ""],
    },
    {
      abbr: "DSp4",
      info: "",
      x: false,
      js: ["3", "2", "2", "3", "2", "2", "3", "", ""],
    },
    {
      abbr: "ChSt1",
      info: "",
      x: false,
      js: ["3", "3", "3", "4", "3", "2", "3", "", ""],
    },
    {
      abbr: "RoLi4",
      info: "",
      x: false,
      js: ["4", "3", "3", "3", "3", "3", "2", "", ""],
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
      js: ["7.50", "7.25", "7.25", "7.75", "7.50", "7.50", "7.50", "", ""],
    },
    presentation: {
      js: ["8.00", "7.25", "7.50", "8.00", "7.50", "7.25", "7.75", "", ""],
    },
    skatingSkills: {
      js: ["7.50", "7.00", "7.00", "7.50", "7.50", "7.50", "7.00", "", ""],
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
        baseValue: new Decimal("1.10"),
        goe: new Decimal("1.83"),
        score: new Decimal("2.93"),
      },
      {
        baseValue: new Decimal("6.84"),
        goe: new Decimal("2.32"),
        score: new Decimal("9.16"),
      },
      {
        baseValue: new Decimal("6.47"),
        goe: new Decimal("1.46"),
        score: new Decimal("7.93"),
      },
      {
        baseValue: new Decimal("5.45"),
        goe: new Decimal("1.34"),
        score: new Decimal("6.79"),
      },
      {
        baseValue: new Decimal("7.83"),
        goe: new Decimal("2.08"),
        score: new Decimal("9.91"),
      },
      {
        baseValue: new Decimal("6.00"),
        goe: new Decimal("1.35"),
        score: new Decimal("7.35"),
      },
      {
        baseValue: new Decimal("1.10"),
        goe: new Decimal("2.49"),
        score: new Decimal("3.59"),
      },
      {
        baseValue: new Decimal("5.45"),
        goe: new Decimal("1.44"),
        score: new Decimal("6.89"),
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
    total: new Decimal("54.55"),
  },
  pc: {
    factor: new Decimal("2.00"),
    composition: new Decimal("7.45"),
    presentation: new Decimal("7.60"),
    skatingSkills: new Decimal("7.30"),
    total: new Decimal("44.70"),
  },
  deductions: { total: new Decimal("0.00") },
  total: new Decimal("99.25"),
}
