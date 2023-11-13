import { NextAuthOptions, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import GithubProvider from "next-auth/providers/github";


export const authConfig: NextAuthOptions = {
  providers: [

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,

      profile: (profile) => {
        return {
          id: profile.id.toString(),
          name: profile.login ?? profile.name,
          email: profile.email,
          image: profile.avatar_url,
        }
      },


    }),
  ],
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

export function LoginIsRequiredClient() {
  // if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  // }
}
