import { cookies } from "next/headers";
import Header from "@/components/common/header";

export default async function AlbumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = (await cookies()).has("isLoggedIn");

  return (
    <>
      <Header variant={isLoggedIn ? "default" : "logo-only"} />
      {children}
    </>
  );
}
