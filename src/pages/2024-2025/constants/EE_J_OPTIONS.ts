import { Options } from "~/components/Select"

const options: Options = [{ value: "", label: "" }]

for (let value = 5; value >= -5; value--) {
  options.push({ value: value.toString(), label: value.toString() })
}

export const EE_J_OPTIONS = options
