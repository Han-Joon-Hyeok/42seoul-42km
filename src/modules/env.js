import "dotenv/config";

const env = {
  github: {
    owner: process.env.OWNER,
    repo: process.env.REPO,
    auth: process.env.TOKEN,
  },
  openData: {
    key: process.env.OPEN_DATA_SERVICE_KEY,
  },
};

export default env;