import Decimal from "decimal.js"
import LZString from "lz-string"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { FC, Fragment, useCallback, useEffect, useState } from "react"
import { DeepPartial, useForm } from "react-hook-form"
import { Checkbox } from "~/components/Checkbox"
import { NumberInput } from "~/components/NumberInput"
import { Select } from "~/components/Select"
import { TextInput } from "~/components/TextInput"
import { decimalToString } from "~/lib/decimalToString"
import { valueToLabel } from "~/lib/valueToLabel"
import { DEDUCTION_P_OPTIONS } from "./constants/DEDUCTION_P_OPTIONS"
import { DEFAULT_FORM_VALUES } from "./constants/DEFAULT_FORM_VALUES"
import { EE_J_OPTIONS } from "./constants/EE_J_OPTIONS"
import { PC_J_OPTIONS } from "./constants/PC_J_OPTIONS"
import { SEGMENT_OPTIONS } from "./constants/SEGMENT_OPTIONS"
import { getCalculatedValues } from "./lib/getCalculatedValues"
import { FormValues } from "./types/FormValues"

const FORM_VALUES_PARAM_NAME = "d"
const TITLE = "Figure Skating Score Sheet 2022-2023"
const JUDGES = ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9"]

const Page: NextPage = () => {
  const router = useRouter()
  const [defaultValues, setDefaultValues] = useState<FormValues | null>(null)

  useEffect(() => {
    if (!router.isReady) return

    let formValues = {}

    const data = router.query[FORM_VALUES_PARAM_NAME]
    if (typeof data === "string") {
      try {
        const maybeJson = LZString.decompressFromEncodedURIComponent(data)
        if (maybeJson) {
          formValues = JSON.parse(maybeJson)
        }
      } catch (error) {
        console.error(error)
      }
    }

    setDefaultValues({ ...DEFAULT_FORM_VALUES, ...formValues })
  }, [router.isReady, router.query])

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      {defaultValues && <View defaultValues={defaultValues} />}
    </>
  )
}

const View: FC<{
  defaultValues: DeepPartial<FormValues>
}> = (props) => {
  const { defaultValues } = props
  const {
    register: originalRegister,
    watch,
    getValues,
  } = useForm<FormValues>({ defaultValues })
  const router = useRouter()

  const saveFormValuesInUrl = useCallback(() => {
    const formValues = getValues()
    const formValuesJson = JSON.stringify(formValues)
    const hash = LZString.compressToEncodedURIComponent(formValuesJson)

    router.replace(`?${FORM_VALUES_PARAM_NAME}=${hash}`, undefined, {
      scroll: false,
    })
  }, [getValues, router])

  const register = useCallback(
    (...args: Parameters<typeof originalRegister>) =>
      originalRegister(args[0], {
        onChange: () => saveFormValuesInUrl(),
      }),
    [originalRegister, saveFormValuesInUrl],
  )

  const onClickClearButton = useCallback(() => {
    if (window.confirm("Do you really want to clear?")) {
      location.replace(location.pathname)
    }
  }, [])

  const formValues = watch()
  const calculatedValues = getCalculatedValues(formValues)

  if (process.env.NODE_ENV === "development") {
    console.log(JSON.stringify({ formValues, calculatedValues }))
  }

  const preview = formValues.preview

  return (
    <>
      <Head>
        <title>
          {watch("name")
            ? watch("name") +
              " (" +
              valueToLabel(SEGMENT_OPTIONS, watch("segment")) +
              ") - "
            : ""}
          {watch("event") ? watch("event") + " - " : ""}
          {TITLE}
        </title>
      </Head>

      <div className="min-w-[100rem]">
        <header className="sticky top-0 z-50 bg-slate-100 print:hidden">
          <div className="mx-auto flex w-[100rem] items-center gap-8 p-4">
            <div className="flex-1">{TITLE}</div>
            <button type="button" onClick={onClickClearButton}>
              Clear
            </button>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                {...register("preview")}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[0.125rem] after:left-[0.125rem] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              <span className="ml-3 text-sm font-medium">Preview</span>
            </label>
          </div>
        </header>

        <div className="mx-auto w-[100rem] px-4 py-6 text-lg leading-5">
          <div className="mb-2 text-4xl font-bold before:inline-block before:content-['']">
            {preview ? watch("event") : <TextInput {...register("event")} />}
          </div>

          <div className="mb-6 grid grid-cols-[1fr_2fr] items-baseline gap-x-4 text-3xl font-bold">
            <div>
              {preview ? (
                valueToLabel(SEGMENT_OPTIONS, watch("segment"))
              ) : (
                <Select {...register("segment")} options={SEGMENT_OPTIONS} />
              )}
            </div>
            <div>JUDGES DETAILS PER SKATER</div>
          </div>

          <div className="mb-2 grid grid-cols-[4rem_1fr_5rem_5rem_2rem_6rem_7rem_16rem_8rem] items-center gap-x-4 gap-y-1 border-2 py-2 px-4 font-bold tabular-nums">
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
                  watch("rank")
                ) : (
                  <NumberInput {...register("rank")} />
                )}
              </div>
              <div>
                {preview ? watch("name") : <TextInput {...register("name")} />}
              </div>
              <div>
                {preview ? (
                  watch("nation")
                ) : (
                  <TextInput {...register("nation")} />
                )}
              </div>
              <div className="text-end">
                {preview ? (
                  watch("startingNumber")
                ) : (
                  <NumberInput {...register("startingNumber")} />
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

          <div className="mb-2 grid grid-cols-[1.5rem_14rem_2rem_3.5rem_1.5rem_4rem_repeat(9,_1fr)_8rem_6rem] items-center gap-x-4 gap-y-1 border-2 py-2 px-4 tabular-nums">
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
                  !(preview && watch(`ee.${i}.abbr`) === "") && (
                    <Fragment key={i}>
                      <div className="text-end">{number}</div>
                      <div>
                        {preview ? (
                          watch(`ee.${i}.abbr`)
                        ) : (
                          <TextInput {...register(`ee.${i}.abbr`)} />
                        )}
                      </div>
                      <div className="text-center">
                        {preview ? (
                          watch(`ee.${i}.info`)
                        ) : (
                          <TextInput
                            {...register(`ee.${i}.info`)}
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
                          watch(`ee.${i}.x`) && "x"
                        ) : (
                          <Checkbox {...register(`ee.${i}.x`)} />
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
                            watch(`ee.${i}.js.${j}`)
                          ) : (
                            <Select
                              options={EE_J_OPTIONS}
                              {...register(`ee.${i}.js.${j}`)}
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
                    watch(`pc.composition.js.${i}`)
                  ) : (
                    <Select
                      options={PC_J_OPTIONS}
                      {...register(`pc.composition.js.${i}`)}
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
                    watch(`pc.presentation.js.${i}`)
                  ) : (
                    <Select
                      options={PC_J_OPTIONS}
                      {...register(`pc.presentation.js.${i}`)}
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
                    watch(`pc.skatingSkills.js.${i}`)
                  ) : (
                    <Select
                      options={PC_J_OPTIONS}
                      {...register(`pc.skatingSkills.js.${i}`)}
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

          <div className="grid grid-cols-[auto_1fr_5rem] gap-x-8 border-2 py-2 pr-4 pl-14 tabular-nums">
            <div className="font-bold">Deductions:</div>
            <div className="grid grid-cols-[repeat(3,_1fr)] gap-x-16">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="grid grid-cols-[1fr_5rem] gap-x-4">
                  <div>
                    {preview ? (
                      watch(`deductions.${i}.t`)
                    ) : (
                      <TextInput {...register(`deductions.${i}.t`)} />
                    )}
                  </div>
                  <div className="text-end">
                    {preview ? (
                      watch(`deductions.${i}.p`)
                    ) : (
                      <Select
                        options={DEDUCTION_P_OPTIONS}
                        {...register(`deductions.${i}.p`)}
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
      </div>
    </>
  )
}

export default Page
