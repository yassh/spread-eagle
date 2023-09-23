import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Decimal from "decimal.js"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { Fragment } from "react"
import { Checkbox } from "~/components/Checkbox"
import { NumberInput } from "~/components/NumberInput"
import { Select } from "~/components/Select"
import { TextInput } from "~/components/TextInput"
import { decimalToString } from "~/lib/decimalToString"
import { valueToLabel } from "~/lib/valueToLabel"
import { DEDUCTION_P_OPTIONS } from "./constants/DEDUCTION_P_OPTIONS"
import { EE_J_OPTIONS } from "./constants/EE_J_OPTIONS"
import { PC_J_OPTIONS } from "./constants/PC_J_OPTIONS"
import { SEGMENT_OPTIONS } from "./constants/SEGMENT_OPTIONS"
import { useScoreSheetForm } from "./hooks/useScoreSheetForm"
import { getCalculatedValues } from "./lib/getCalculatedValues"

const MAIN_TITLE = "Figure Skating Score Sheet 2023-2024"
const JUDGES = ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9"]

const Page: NextPage = () => {
  const { isReady, watch, register, clear } = useScoreSheetForm()

  if (!isReady) {
    return (
      <Head>
        <title>{MAIN_TITLE}</title>
      </Head>
    )
  }

  const formValues = watch()
  const title =
    (formValues.data.name &&
      formValues.data.name +
        " (" +
        valueToLabel(SEGMENT_OPTIONS, formValues.data.segment) +
        ") - ") +
    (formValues.data.event && formValues.data.event + " - ") +
    MAIN_TITLE
  const preview = formValues.preview
  const calculatedValues = getCalculatedValues(formValues.data)

  if (process.env.NODE_ENV === "development") {
    console.log(JSON.stringify({ formValues, calculatedValues }))
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="min-w-[100rem]">
        <header className="sticky top-0 z-50 bg-slate-100 print:hidden">
          <div className="mx-auto flex w-[100rem] items-center gap-8 p-4">
            <div className="flex-1">{MAIN_TITLE}</div>
            <button type="button" onClick={() => clear()}>
              Clear
            </button>

            {/* https://flowbite.com/docs/forms/toggle/ */}
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                {...register("preview")}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[0.125rem] after:top-[0.125rem] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
              <span className="ml-3 text-sm font-medium">Preview</span>
            </label>
          </div>
        </header>

        <div className="mx-auto w-[100rem] px-4 py-6 text-lg leading-5">
          <div className="mb-2 text-4xl font-bold before:inline-block before:content-['']">
            {preview ? (
              watch("data.event")
            ) : (
              <TextInput {...register("data.event")} />
            )}
          </div>

          <div className="mb-6 grid grid-cols-[1fr_2fr] items-baseline gap-x-4 text-3xl font-bold">
            <div>
              {preview ? (
                valueToLabel(SEGMENT_OPTIONS, watch("data.segment"))
              ) : (
                <Select
                  {...register("data.segment")}
                  options={SEGMENT_OPTIONS}
                />
              )}
            </div>
            <div>JUDGES DETAILS PER SKATER</div>
          </div>

          <div className="mb-2 grid grid-cols-[4rem_1fr_5rem_5rem_2rem_6rem_7rem_16rem_8rem] items-center gap-x-4 gap-y-1 border-2 px-4 py-2 font-bold tabular-nums">
            <>
              <div className="mb-2 text-end">Rank</div>
              <div className="mb-2">Name</div>
              <div className="mb-2">Nation</div>
              <div className="mb-2 text-end">Starting Number</div>
              <div></div>
              <div className="mb-2 text-end">Total Segment Score</div>
              <div className="mb-2 text-end">Total Element Score</div>
              <div className="mb-2 text-end">
                Total Program Component Score (factored)
              </div>
              <div className="mb-2 text-end">Total Deductions</div>
            </>

            <>
              <div className="text-end">
                {preview ? (
                  watch("data.rank")
                ) : (
                  <NumberInput {...register("data.rank")} />
                )}
              </div>
              <div>
                {preview ? (
                  watch("data.name")
                ) : (
                  <TextInput {...register("data.name")} />
                )}
              </div>
              <div>
                {preview ? (
                  watch("data.nation")
                ) : (
                  <TextInput {...register("data.nation")} />
                )}
              </div>
              <div className="text-end">
                {preview ? (
                  watch("data.startingNumber")
                ) : (
                  <NumberInput {...register("data.startingNumber")} />
                )}
              </div>
              <div></div>
              <div className="text-end">
                {decimalToString(calculatedValues.total)}
              </div>
              <div className="text-end">
                {decimalToString(calculatedValues.ee.total)}
              </div>
              <div className="text-end">
                {decimalToString(calculatedValues.pc.total)}
              </div>
              <div className="text-end">
                {decimalToString(calculatedValues.deductions.total)}
              </div>
            </>
          </div>

          <div className="mb-2 grid grid-cols-[2rem_12.5rem_2rem_4.5rem_1.5rem_4rem_repeat(9,_1fr)_8rem_6rem] items-center gap-x-4 gap-y-1 border-2 px-4 py-2 tabular-nums">
            <>
              <div className="mb-2 text-end font-bold">#</div>
              <div className="mb-2 font-bold">Executed Elements</div>
              <div className="mb-2 rotate-[-90deg] text-center font-bold">
                Info
              </div>
              <div className="mb-2 text-end font-bold">Base Value</div>
              <div className="mb-2 text-center font-bold">
                {preview ? "" : "x"}
              </div>
              <div className="mb-2 text-end font-bold">GOE</div>
              {JUDGES.map((judge, i) => (
                <div key={i} className="mb-2 text-end font-bold">
                  {judge}
                </div>
              ))}
              <div className="mb-2 text-end font-bold">Ref.</div>
              <div className="mb-2 text-end font-bold">Scores of Panel</div>
            </>

            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                (number, i) =>
                  !(preview && watch(`data.ee.${i}.abbr`) === "") && (
                    <Fragment key={i}>
                      <div className="text-end">{number}</div>
                      <div>
                        {preview ? (
                          watch(`data.ee.${i}.abbr`)
                        ) : (
                          <TextInput
                            {...register(`data.ee.${i}.abbr`)}
                            id={`ee-${number}-abbr`}
                            onKeyDown={(event) => {
                              switch (event.key) {
                                case "ArrowUp":
                                  document
                                    .querySelector<HTMLInputElement>(
                                      `#ee-${number - 1}-abbr`,
                                    )
                                    ?.focus()
                                  break
                                case "ArrowDown":
                                  document
                                    .querySelector<HTMLInputElement>(
                                      `#ee-${number + 1}-abbr`,
                                    )
                                    ?.focus()
                                  break
                              }
                            }}
                          />
                        )}
                      </div>
                      <div className="text-center">
                        {preview ? (
                          watch(`data.ee.${i}.info`)
                        ) : (
                          <TextInput
                            {...register(`data.ee.${i}.info`)}
                            id={`ee-${number}-info`}
                            onKeyDown={(event) => {
                              switch (event.key) {
                                case "ArrowUp":
                                  document
                                    .querySelector<HTMLInputElement>(
                                      `#ee-${number - 1}-info`,
                                    )
                                    ?.focus()
                                  break
                                case "ArrowDown":
                                  document
                                    .querySelector<HTMLInputElement>(
                                      `#ee-${number + 1}-info`,
                                    )
                                    ?.focus()
                                  break
                              }
                            }}
                            className="text-center"
                          />
                        )}
                      </div>
                      <div className="text-end">
                        {decimalToString(
                          calculatedValues.ee.elements[i]?.baseValue ??
                            new Decimal(NaN),
                        )}
                      </div>
                      <div className="text-center">
                        {preview ? (
                          watch(`data.ee.${i}.x`) && "x"
                        ) : (
                          <Checkbox {...register(`data.ee.${i}.x`)} />
                        )}
                      </div>
                      <div className="text-end">
                        {decimalToString(
                          calculatedValues.ee.elements[i]?.goe ??
                            new Decimal(NaN),
                        )}
                      </div>
                      {JUDGES.map((_, j) => (
                        <div key={j} className="text-end">
                          {preview ? (
                            watch(`data.ee.${i}.js.${j}`)
                          ) : (
                            <Select
                              options={EE_J_OPTIONS}
                              {...register(`data.ee.${i}.js.${j}`)}
                              className="text-end"
                            />
                          )}
                        </div>
                      ))}
                      <div></div>
                      <div className="text-end">
                        {decimalToString(
                          calculatedValues.ee.elements[i]?.score ??
                            new Decimal(NaN),
                        )}
                      </div>
                    </Fragment>
                  ),
              )}
            </>

            <>
              <div className="col-start-4 text-end font-bold">
                {decimalToString(calculatedValues.ee.totalBaseValue)}
              </div>
              <div className="col-end-[-1] text-end font-bold">
                {decimalToString(calculatedValues.ee.total)}
              </div>
            </>

            <>
              <div className="col-[2_/_span_4] mb-2 mt-4 font-bold">
                Program Components
              </div>
              <div className="mb-2 mt-4 text-end font-bold">Factor</div>
            </>

            <>
              <div className="col-[2_/_span_4]">Composition</div>
              <div className="text-end">
                {decimalToString(calculatedValues.pc.factor)}
              </div>
              {JUDGES.map((_, i) => (
                <div key={i} className="text-end">
                  {preview ? (
                    watch(`data.pc.composition.js.${i}`)
                  ) : (
                    <Select
                      options={PC_J_OPTIONS}
                      {...register(`data.pc.composition.js.${i}`)}
                      className="text-end"
                    />
                  )}
                </div>
              ))}
              <div></div>
              <div className="text-end">
                {decimalToString(calculatedValues.pc.composition)}
              </div>
            </>

            <>
              <div className="col-[2_/_span_4]">Presentation</div>
              <div className="text-end">
                {decimalToString(calculatedValues.pc.factor)}
              </div>
              {JUDGES.map((_, i) => (
                <div key={i} className="text-end">
                  {preview ? (
                    watch(`data.pc.presentation.js.${i}`)
                  ) : (
                    <Select
                      options={PC_J_OPTIONS}
                      {...register(`data.pc.presentation.js.${i}`)}
                      className="text-end"
                    />
                  )}
                </div>
              ))}
              <div></div>
              <div className="text-end">
                {decimalToString(calculatedValues.pc.presentation)}
              </div>
            </>

            <>
              <div className="col-[2_/_span_4]">Skating Skills</div>
              <div className="text-end">
                {decimalToString(calculatedValues.pc.factor)}
              </div>
              {JUDGES.map((_, i) => (
                <div key={i} className="text-end">
                  {preview ? (
                    watch(`data.pc.skatingSkills.js.${i}`)
                  ) : (
                    <Select
                      options={PC_J_OPTIONS}
                      {...register(`data.pc.skatingSkills.js.${i}`)}
                      className="text-end"
                    />
                  )}
                </div>
              ))}
              <div></div>
              <div className="text-end">
                {decimalToString(calculatedValues.pc.skatingSkills)}
              </div>
            </>

            <>
              <div className="col-[2_/_-2] font-bold">
                Judges Total Program Component Score (factored)
              </div>
              <div className="text-end font-bold">
                {decimalToString(calculatedValues.pc.total)}
              </div>
            </>
          </div>

          <div className="grid grid-cols-[auto_1fr_5rem] items-center gap-x-8 border-2 py-2 pl-16 pr-4 tabular-nums">
            <div className="font-bold">Deductions:</div>
            <div className="grid grid-cols-[repeat(3,_1fr)] items-center gap-x-16">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_5rem] items-center gap-x-4"
                >
                  <div>
                    {preview ? (
                      watch(`data.deductions.${i}.t`)
                    ) : (
                      <TextInput {...register(`data.deductions.${i}.t`)} />
                    )}
                  </div>
                  <div className="text-end">
                    {preview ? (
                      watch(`data.deductions.${i}.p`)
                    ) : (
                      <Select
                        options={DEDUCTION_P_OPTIONS}
                        {...register(`data.deductions.${i}.p`)}
                        className="text-end"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-end font-bold">
              {decimalToString(calculatedValues.deductions.total)}
            </div>
          </div>
        </div>

        <footer className="flex items-center justify-center gap-6 pb-8 print:hidden">
          <Link href="/">
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
          <a
            href="https://twitter.com/yassh_skate"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <a
            href="https://github.com/yassh/spread-eagle"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </footer>
      </div>
    </>
  )
}

export default Page
