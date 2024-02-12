import { getFormatTodayDate } from "./date.js";
import { STATUS_OF_SKY, TYPE_OF_PRECIPITATION } from "./const.js";

export const buildMessage = (weatherData) => {
  const todayDate = getFormatTodayDate("YYYY년 MM월 DD일");
  const messageHeader = `*[${todayDate} 인증 스레드]*\n`;
  const {
    skyStatus,
    precipitationType,
    lowestTempOfToday,
    highestTempOfToday,
  } = weatherData;
  const currentWeather = `${STATUS_OF_SKY[skyStatus]} (강수: ${TYPE_OF_PRECIPITATION[precipitationType]})`;
  const messageBody = `
  🌏 현재 날씨: ${currentWeather}
  🔼 최고 기온: ${highestTempOfToday}°C
  🔽 최저 기온: ${lowestTempOfToday}°C
  🔎 관측 지점: 서울 강남구 개포2동
  `;
  const message = messageHeader + messageBody;

  return message;
};
