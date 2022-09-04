import clsx from "clsx"
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react"

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Ref = HTMLInputElement

export const Checkbox = forwardRef<Ref, Props>(function Checkbox(props, ref) {
  const { className, ...restProps } = props

  return (
    <input
      ref={ref}
      type="checkbox"
      className={clsx("align-middle", className)}
      {...restProps}
    />
  )
})
