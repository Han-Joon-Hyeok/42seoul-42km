import "dotenv/config";

const env = {
  github: {
    owner: process.env.OWNER,
    repo: process.env.REPO,
    auth: process.env.TOKEN,
    appId: process.env.APP_ID,
    installationId: process.env.APP_INSTALLATION_ID,
    privateKey: process.env.APP_PRIVATE_KEY,
  },
  openData: {
    key: process.env.OPEN_DATA_SERVICE_KEY,
  },
};

export default env;
