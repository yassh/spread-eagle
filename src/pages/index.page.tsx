import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spread Eagle</title>
      </Head>
      <div className="mx-auto max-w-4xl p-4">
        <h1 className="text-xl">Spread Eagle</h1>
        <ul className="mt-2">
          <li>
            ☞{" "}
            <Link href="./2024-2025">Figure Skating Score Sheet 2024-2025</Link>
          </li>
          <li>
            ☞{" "}
            <Link href="./2023-2024">Figure Skating Score Sheet 2023-2024</Link>
          </li>
          <li>
            ☞{" "}
            <Link href="./2022-2023">Figure Skating Score Sheet 2022-2023</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Page
