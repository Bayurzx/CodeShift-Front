// lib/astradb.ts
import { createClient } from "@astrajs/rest";

async function initAstraClient() {
  try {
    const astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    return astraClient;
  } catch (error) {
    // console.error("Astra client initialization error:", error);
    throw error; // Re-throw the error for higher-level handling
  }
}

const astraClientPromise = initAstraClient();
// ********************************
// TODO: Change to staging BasePath
// ********************************
const basePath = `/api/rest/v2/namespaces/hack/collections/autodocsTest`;
const basePathError = `/api/rest/v2/namespaces/hack/collections/errorsTest`;



const getUserDocListInDb = async (repoUserName) => {
  const astraClient = await astraClientPromise;

  try {
    const { status, data: getSubdocumentRes } = await astraClient.get(
      `${basePath}/${repoUserName}/docList`
    );

    console.log("getSubdocumentRes", getSubdocumentRes);

    return getSubdocumentRes

  } catch (error) {
    console.error("Error in getUserDocListInDb:", error);
    throw error;
  }

}


const getUserRepoInDb = async (repoUserName, repoName) => {
  const astraClient = await astraClientPromise;

  try {
    const { status, data: getSubdocumentRes } = await astraClient.get(
      `${basePath}/${repoUserName}/docList`
    );
    console.log("repoUserName", repoUserName);

    console.log("getSubdocumentRes", getSubdocumentRes);

    const resultArray = getSubdocumentRes
      ?.filter(item => repoName in item)
      ?.map(item => item[repoName].current);


    return resultArray[0]

  } catch (error) {
    console.error("Error in getUserRepoInDb:", error);
    throw error;
  }

}


const getUserDataInDb = async (repoUserName) => {
  const astraClient = await astraClientPromise;

  try {
    const getSubdocumentRes = await astraClient.get(
      `${basePath}/${repoUserName}`
    );

    console.log("getUserDataInDb", JSON.stringify(getSubdocumentRes));
    return getSubdocumentRes

  } catch (error) {
    console.error("Error in getUserDataInDb:", error);
    throw error;
  }

}


export { getUserDocListInDb, getUserDataInDb, getUserRepoInDb };