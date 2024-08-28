import "dotenv/config";

const env = {
  github: {
    owner: process.env.OWNER,
    repo: process.env.REPO,
    auth: process.env.TOKEN,
    appId: process.env.GITHUB_APP_ID,
    installationId: process.env.GITHUB_APP_INSTALLATION_ID,
    privateKey: process.env.GITHUB_APP_PRIVATE_KEY,
  },
  openData: {
    key: process.env.OPEN_DATA_SERVICE_KEY,
  },
};

export default env;