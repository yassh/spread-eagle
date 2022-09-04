import clsx from "clsx"
import { forwardRef } from "react"

export type Options = Array<{ value: string; label: string }>

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Options
}

type Ref = HTMLSelectElement

export const Select = forwardRef<Ref, Props>(function Select(
  { options, ...props },
  ref,
) {
  const { className, ...restProps } = props

  return (
    <select
      ref={ref}
      className={clsx("w-full outline outline-1 focus:outline-2", className)}
      {...restProps}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
})
