import "dotenv/config";

const env = {
  github: {
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    auth: process.env.GITHUB_TOKEN,
  },
  openData: {
    key: process.env.OPEN_DATA_SERVICE_KEY,
  },
};

export default env;