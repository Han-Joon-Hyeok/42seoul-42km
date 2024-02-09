import { format, ko, setDefaultOptions } from "date-fns";

setDefaultOptions({ locale: ko });

export const getFormatTodayDate = (formatStr) => {
  const utc = new Date();
  return format(utc, formatStr);
};
