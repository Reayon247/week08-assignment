import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Reayon Minecraft World Log",
  description: "Created by Reayon",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunitoSans.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
