import AutoDocsNavbar from "@/components/autodocsNavbar";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";


export default async function Layout({ children }: { children: any }) {
  const session = await getServerSession(authConfig);
  return (
    <main className="flex h-screen">
      <AutoDocsNavbar session={session} />
      <div className="flex-grow bg-black p-8 overflow-y-auto">
        {children}
      </div>

    </main>
  );
}
