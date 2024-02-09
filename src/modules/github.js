import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: env.github.auth,
});

const OWNER = env.github.owner;
const REPO = env.github.repo;

const github = async () => {
  try {
    const response = await octokit.request(
      `POST /repos/${OWNER}/${REPO}/issues`,
      {
        owner: "OWNER",
        repo: "REPO",
        title: event.name,
        body: body,
        labels: ["weather"],
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    
  } catch (error) {
    console.log(error);
  }
};

export default github;
