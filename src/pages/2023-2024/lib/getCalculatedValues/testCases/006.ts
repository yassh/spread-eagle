import Decimal from "decimal.js"
import { FormValues } from "../../../types/FormValues"

export const input: FormValues["data"] = {
  event: "2023 AUTUMN CLASSIC INTERNATIONAL",
  segment: "wfs",
  rank: "3",
  name: "Justine MICLETTE",
  nation: "CAN",
  startingNumber: "12",
  ee: [
    {
      abbr: "3F",
      info: "",
      x: false,
      js: ["-4", "-4", "-4", "-4", "-4", "-3", "-3", "", ""],
    },
    {
      abbr: "2A+3T",
      info: "F",
      x: false,
      js: ["-5", "-5", "-4", "-4", "-5", "-5", "-4", "", ""],
    },
    {
      abbr: "3Lz+2T",
      info: "",
      x: false,
      js: ["0", "1", "1", "1", "1", "1", "1", "", ""],
    },
    {
      abbr: "3F+REP",
      info: "",
      x: false,
      js: ["0", "0", "0", "1", "0", "1", "0", "", ""],
    },
    {
      abbr: "FCSp4",
      info: "",
      x: false,
      js: ["1", "2", "1", "3", "1", "2", "1", "", ""],
    },
    {
      abbr: "3T",
      info: "",
      x: true,
      js: ["1", "1", "1", "1", "1", "1", "0", "", ""],
    },
    {
      abbr: "3S<",
      info: "",
      x: true,
      js: ["-3", "-2", "-2", "-2", "-2", "-3", "-2", "", ""],
    },
    {
      abbr: "2A",
      info: "",
      x: true,
      js: ["0", "1", "0", "1", "1", "1", "2", "", ""],
    },
    {
      abbr: "CCoSp4",
      info: "",
      x: false,
      js: ["1", "1", "1", "2", "2", "2", "1", "", ""],
    },
    {
      abbr: "ChSq1",
      info: "",
      x: false,
      js: ["1", "0", "1", "2", "2", "2", "2", "", ""],
    },
    {
      abbr: "StSq4",
      info: "",
      x: false,
      js: ["1", "1", "2", "3", "2", "2", "1", "", ""],
    },
    {
      abbr: "LSp4",
      info: "",
      x: false,
      js: ["1", "0", "1", "2", "2", "2", "2", "", ""],
    },
  ],
  pc: {
    composition: {
      js: ["7.00", "7.50", "7.25", "7.75", "7.50", "7.25", "7.00", "", ""],
    },
    presentation: {
      js: ["6.50", "7.25", "7.75", "8.25", "7.75", "7.50", "8.00", "", ""],
    },
    skatingSkills: {
      js: ["6.75", "7.50", "7.25", "7.50", "7.00", "7.00", "7.50", "", ""],
    },
  },
  deductions: [
    { t: "Falls", p: "-1.00" },
    { t: "", p: "" },
    { t: "", p: "" },
  ],
}

export const output = {
  ee: {
    elements: [
      {
        baseValue: new Decimal("5.3"),
        goe: new Decimal("-2.01"),
        score: new Decimal("3.29"),
      },
      {
        baseValue: new Decimal("7.5"),
        goe: new Decimal("-1.93"),
        score: new Decimal("5.57"),
      },
      {
        baseValue: new Decimal("7.2"),
        goe: new Decimal("0.59"),
        score: new Decimal("7.79"),
      },
      {
        baseValue: new Decimal("3.71"),
        goe: new Decimal("0.11"),
        score: new Decimal("3.82"),
      },
      {
        baseValue: new Decimal("3.2"),
        goe: new Decimal("0.45"),
        score: new Decimal("3.65"),
      },
      {
        baseValue: new Decimal("4.62"),
        goe: new Decimal("0.42"),
        score: new Decimal("5.04"),
      },
      {
        baseValue: new Decimal("3.78"),
        goe: new Decimal("-0.76"),
        score: new Decimal("3.02"),
      },
      {
        baseValue: new Decimal("3.63"),
        goe: new Decimal("0.26"),
        score: new Decimal("3.89"),
      },
      {
        baseValue: new Decimal("3.5"),
        goe: new Decimal("0.49"),
        score: new Decimal("3.99"),
      },
      {
        baseValue: new Decimal("3"),
        goe: new Decimal("0.8"),
        score: new Decimal("3.8"),
      },
      {
        baseValue: new Decimal("3.9"),
        goe: new Decimal("0.62"),
        score: new Decimal("4.52"),
      },
      {
        baseValue: new Decimal("2.7"),
        goe: new Decimal("0.43"),
        score: new Decimal("3.13"),
      },
    ],
    totalBaseValue: new Decimal("52.04"),
    total: new Decimal("51.51"),
  },
  pc: {
    factor: new Decimal("2.67"),
    composition: new Decimal("7.3"),
    presentation: new Decimal("7.65"),
    skatingSkills: new Decimal("7.25"),
    total: new Decimal("59.28"),
  },
  deductions: { total: new Decimal("-1") },
  total: new Decimal("109.79"),
}
