// ☞ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
export const escapeRegex = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
