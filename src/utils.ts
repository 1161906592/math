export function toNonExponential(value: number) {
  const matches = value.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)

  return value.toFixed(Math.max(0, (matches?.[1] || '').length - Number(matches?.[2] || 0)))
}
