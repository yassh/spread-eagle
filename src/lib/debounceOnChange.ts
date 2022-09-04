import { debounce } from "throttle-debounce"

export const debounceOnChange = (onChange: Parameters<typeof debounce>[1]) =>
  debounce(500, onChange)
