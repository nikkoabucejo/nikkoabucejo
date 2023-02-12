import "@/core/styles/globals.css";
import { Oxanium } from "@next/font/google";

const oxanium = Oxanium({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      <body className={`${oxanium.className}`}>{children}</body>
    </html>
  );
};

export default Layout;
