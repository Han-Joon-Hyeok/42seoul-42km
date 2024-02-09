import env from "./env.js";
import api from "./api.js";
import { getFormatTodayDate } from "./date.js";
import logger from "./logger.js";

/*

- 관측 위치 : 서울특별시 강남구 개포2동
- 당일 새벽 2시에 발표된 예보를 기준으로 최저기온, 최고기온 정보를 가져옵니다.

*/

/*

category: 예보 항목
- TMN : 최저 기온 - 오전 6시
- TMX : 최고 기온 - 오후 3시
- SKY : 하늘 상태
- PTY : 강수 형태

*/

export const fetchWeather = async (pageNo, category, fcstTime) => {
  const baseDate = getFormatTodayDate("yyyyMMdd");

  try {
    const response = await api.get(
      "1360000/VilageFcstInfoService_2.0/getVilageFcst",
      {
        params: {
          base_date: baseDate,
          base_time: "0200",
          nx: "62",
          ny: "125",
          numOfRows: "10",
          pageNo,
          serviceKey: env.openData.key,
          dataType: "JSON",
        },
      }
    );
    if (!response.data) {
      throw ReferenceError("공공데이터 포털에서 데이터를 가져올 수 없습니다.");
    }
    logger.info(
      `공공데이터 포털에서 데이터를 성공적으로 가져왔습니다. (카테고리: ${category})`
    );

    const { item } = response.data.response.body.items;
    if (!item) {
      throw ReferenceError(
        "response.data.response.body.items.item 이 존재하지 않습니다."
      );
    }

    const found = item
      .filter((el) => el.category === category && el.fcstTime === fcstTime)
      .shift();
    if (!found) {
      throw ReferenceError(
        "해당하는 category 와 fcstTime 이 존재하지 않습니다."
      );
    }
    return found.fcstValue;
  } catch (error) {
    logger.error(error);
    return null;
  }
};
