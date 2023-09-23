import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { FC } from "react"

export const Footer: FC = () => {
  return (
    <footer className="flex items-center justify-center gap-6 pb-8 print:hidden">
      <Link href="/">
        <FontAwesomeIcon icon={faHouse} /> Home
      </Link>
      <a
        href="https://github.com/yassh/spread-eagle"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <a
        href="https://twitter.com/yassh_skate"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} />
        <span className="sr-only"> X (Twitter)</span>
      </a>
    </footer>
  )
}
