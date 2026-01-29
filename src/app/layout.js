import "./globals.css";
import { Poppins, Fjalla_One, Montserrat } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fjalla",
  display: "swap",
});

export const metadata = {
  title: "Ekka Shop",
  description: "E-commerce UI clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${fjalla.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
