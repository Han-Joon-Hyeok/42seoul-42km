import { Octokit } from "octokit";

import env from "./env.js";
import { getFormatTodayDate } from "./date.js";
import logger from "./logger.js";

const octokit = new Octokit({
  auth: env.github.auth,
});

const OWNER = env.github.owner;
const REPO = env.github.repo;

const todayDate = getFormatTodayDate("yyyy년 MM월 dd일");
const year = getFormatTodayDate("yyyy년");
const month = getFormatTodayDate("MM월");

export const createGithubIssue = async (nofiticationMessage) => {
  try {
    const response = await octokit.request(
      `POST /repos/${OWNER}/${REPO}/issues`,
      {
        owner: "OWNER",
        repo: "REPO",
        title: `${todayDate} 날씨 정보`,
        body: nofiticationMessage,
        labels: [`${year} ${month}`],
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    logger.info("GitHub 이슈를 성공적으로 생성했습니다.");
  } catch (error) {
    logger.error(error);
  }
};
