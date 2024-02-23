import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight:['400','500','700'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "YouTube",
  description: "Create by VoMinhPhu",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
