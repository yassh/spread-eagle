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

export const TextInput = forwardRef<Ref, Props>(function TextInput(props, ref) {
  const { className, onChange, ...restProps } = props

  const debouncedOnChange = useMemo(() => {
    return onChange && debounceOnChange(onChange)
  }, [onChange])

  return (
    <input
      ref={ref}
      type="text"
      className={clsx(
        "w-full px-1 outline outline-1 focus:outline-2",
        className,
      )}
      onChange={debouncedOnChange}
      {...restProps}
    />
  )
})
