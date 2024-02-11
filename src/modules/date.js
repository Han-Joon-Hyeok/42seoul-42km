import { setDefaultOptions } from "date-fns";
import { ko } from "date-fns/locale";
import { format } from "date-fns-tz";

setDefaultOptions({ locale: ko });

export const getFormatTodayDate = (formatStr) => {
  const utc = new Date();
  return format(utc, formatStr, { timeZone: "Asia/Seoul" });
};
