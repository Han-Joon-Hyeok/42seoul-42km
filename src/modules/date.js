import { format, setDefaultOptions } from "date-fns";
import { ko } from "date-fns/locale";

setDefaultOptions({ locale: ko });

export const getFormatTodayDate = (formatStr) => {
  const utc = new Date();
  return format(utc, formatStr);
};
