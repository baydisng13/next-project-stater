import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {

  const session = await getServerSession() 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
