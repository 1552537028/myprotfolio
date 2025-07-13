import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayanth",
  description: "jayanth protfolio",
};
<script src="https://331d-103-99-9-195.ngrok-free.app/api/track.js?websiteId=79286964-a4da-403f-b021-4a316b2fade3"/>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
           >
            {children}
          </ThemeProvider>
        </body>
        <script src="http://localhost:3001/api/track.js?websiteId=ca253f80-5f71-4ac8-a4fb-6b82f9bddda0"/>
    </html>
  );
}
