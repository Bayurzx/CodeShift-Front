import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getUserDocListInDb } from "@/lib/astradb";
import { getServerSession } from "next-auth";
// import { myDocumentation } from "@/lib/fakerData";
import DocSelect from "./DocSelect";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
  await loginIsRequiredServer();

  const session = await getServerSession(authConfig);


  const repoList = session?.user?.name ? (await getUserDocListInDb("bayurzxsmtp")) : undefined
  

  await wait(1000);
// consider changing this to cient and using useeffect
  return (
    <>
      {/* {session?.user?.image && <img src={session?.user?.image} alt="" />}
      <h3>This is your session.user.email: {session?.user?.email}</h3> */}

      <DocSelect data={repoList} />
    </>

  );
}
