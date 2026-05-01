import { cookies } from "next/headers";
import Header from "@/components/common/header";
import LogoHeader from "@/components/common/logo-header";

export default async function AlbumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("refreshToken");

  return (
    <>
      {isLoggedIn ? <Header /> : <LogoHeader />}
      {children}
    </>
  );
}
