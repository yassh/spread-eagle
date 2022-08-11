import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spread Eagle</title>
      </Head>
      <h1>Spread Eagle</h1>
      <ul>
        <li>
          <Link href="./2022-2023/single">2022-2023 Single Skating</Link>
        </li>
      </ul>
    </>
  )
}

export default Page
