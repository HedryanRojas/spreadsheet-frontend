export function generate(basename) {
  const now = new Date()
  const date = '' + now.getDay() + now.getMonth() + now.getFullYear()
  const time = '' + now.getHours() + now.getMinutes() + now.getSeconds()
  return `${basename}-${date}${time}`
}