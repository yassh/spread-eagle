import { NextPage } from "next"
import Head from "next/head"
import { useForm } from "react-hook-form"

type FormValues = { tabularData: string }
const DEFAULT_FORM_VALUES = { tabularData: "" }

const Page: NextPage = () => {
  const { register, watch } = useForm<FormValues>({
    defaultValues: DEFAULT_FORM_VALUES,
  })

  const json =
    "{\n" +
    watch("tabularData")
      .replaceAll(",", ".")
      .split("\n")
      .filter((line) => line !== "")
      .map((line) =>
        line.replace(
          /^([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*)$/,
          '"$1": { "-5": "$2", "-4": "$3", "-3": "$4", "-2": "$5", "-1": "$6", "base": "$7", "1": "$8", "2": "$9", "3": "$10", "4": "$11", "5": "$12" }',
        ),
      )
      .join(",\n") +
    "\n}"

  return (
    <>
      <Head>
        <title>SOV tabular data to JSON</title>
      </Head>
      <div className="grid h-screen grid-cols-[1fr_1fr] grid-rows-[auto_1fr] gap-x-4 p-4">
        <div>
          SOV tabular data (☞{" "}
          <a
            href="https://www.isu.org/inside-isu/isu-communications/communications/28337-isu-communication-2475/file"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            single &amp; pair skating SOV
          </a>{" "}
          /{" "}
          <a
            href="https://www.isu.org/inside-isu/isu-communications/communications/31294-isu-communication-2564/file"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            ice dance SOV
          </a>
          )
        </div>
        <div>JSON</div>

        <textarea
          className="px-1 outline outline-1"
          {...register("tabularData")}
          placeholder={`1T -0,20 -0,16 -0,12 -0,08 -0,04 0,40 0,04 0,08 0,12 0,16 0,20
1S -0,20 -0,16 -0,12 -0,08 -0,04 0,40 0,04 0,08 0,12 0,16 0,20
1Lo -0,25 -0,20 -0,15 -0,10 -0,05 0,50 0,05 0,10 0,15 0,20 0,25
1Eu -0,25 -0,20 -0,15 -0,10 -0,05 0,50 0,05 0,10 0,15 0,20 0,25
1F -0,25 -0,20 -0,15 -0,10 -0,05 0,50 0,05 0,10 0,15 0,20 0,25
1Lz -0,30 -0,24 -0,18 -0,12 -0,06 0,60 0,06 0,12 0,18 0,24 0,30`}
        />
        <textarea className="px-1 outline outline-1" value={json} readOnly />
      </div>
    </>
  )
}

export default Page
