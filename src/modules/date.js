import moment from "moment-timezone";

const timezone = "Asia/Seoul";

export const getFormatTodayDate = (formatStr) => {
  const formattedTimezoneDate = moment().tz(timezone).format(formatStr);
  return formattedTimezoneDate;
};
