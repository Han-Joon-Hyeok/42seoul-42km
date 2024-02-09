import { fetchWeather } from "./modules/weather.js";
import { buildMessage } from "./modules/message.js";
import { createGithubIssue } from "./modules/github.js";
import logger from "./modules/logger.js";

/*
- skyStatus = 하늘 상태
- precipitationType = 강수 형태
- lowestTempOfToday = 오늘의 최저 기온
- highestTempOfToday = 오늘의 최고 기온
*/

const run = async () => {
  const skyStatus = await fetchWeather(3, "SKY", "0500");
  const precipitationType = await fetchWeather(4, "PTY", "0500");
  const lowestTempOfToday = await fetchWeather(5, "TMN", "0600");
  const highestTempOfToday = await fetchWeather(16, "TMX", "1500");

  if (
    !skyStatus ||
    !precipitationType ||
    !lowestTempOfToday ||
    !highestTempOfToday
  ) {
    logger.error("날씨 정보를 가져오는데 실패했습니다.");
    return;
  }

  logger.info("날씨 정보를 성공적으로 가져왔습니다.");

  const nofiticationMessage = buildMessage({
    skyStatus,
    precipitationType,
    lowestTempOfToday,
    highestTempOfToday,
  });

  createGithubIssue(nofiticationMessage);
};

run();
