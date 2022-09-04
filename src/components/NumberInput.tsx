import clsx from "clsx"
import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useMemo,
} from "react"
import { debounceOnChange } from "~/lib/debounceOnChange"

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Ref = HTMLInputElement

export const NumberInput = forwardRef<Ref, Props>(function NumberInput(
  props,
  ref,
) {
  const { className, onChange, ...restProps } = props

  const debouncedOnChange = useMemo(() => {
    return onChange && debounceOnChange(onChange)
  }, [onChange])

  return (
    <input
      ref={ref}
      type="number"
      className={clsx(
        "w-full text-end outline outline-1 focus:outline-2",
        className,
      )}
      onChange={debouncedOnChange}
      {...restProps}
    />
  )
})
