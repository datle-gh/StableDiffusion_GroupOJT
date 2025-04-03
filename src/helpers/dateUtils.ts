import dayjs from "dayjs"

export const formatDate = (date: string | Date, formatStr = "DD-MM-YYYY") => {
  return dayjs(date).format(formatStr)
}