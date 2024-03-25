import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Next | Authentication in NextJS",
  description: "Auth Next - Authenticate using NextJS",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider session={session}>
      <Navbar/>
              {children}
          </SessionProvider>
      </body>
    </html>
  );
}
