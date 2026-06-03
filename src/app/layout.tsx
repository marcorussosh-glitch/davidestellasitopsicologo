import "./globals.css"
import { Merriweather, Elms_Sans } from "next/font/google"

const elmsSans = Elms_Sans({
  subsets: ["latin"],
  variable: "--font-elms",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${merriweather.variable} ${elmsSans.variable}`}>
        {children}
      </body>
    </html>
  )
}