import { Options } from "~/components/Select"

export const valueToLabel = (
  options: Options,
  value: string,
): string | null => {
  return options.find((option) => option.value === value)?.label ?? null
}
