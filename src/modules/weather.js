import env from "./env"
import api from "./api"
import { getFormatTodayDate } from "./date";


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
        const response = await api.get("1360000/VilageFcstInfoService_2.0/getVilageFcst", {
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
        });
        if (!response.data) {
            throw ReferenceError("데이터가 없습니다.");
        }
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
