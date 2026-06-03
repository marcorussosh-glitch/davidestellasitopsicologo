import "./globals.css"
import { Montserrat, Elms_Sans } from "next/font/google"

const elmsSans = Elms_Sans({
  subsets: ["latin"],
  variable: "--font-elms",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${montserrat.variable} ${elmsSans.variable}`}>
        {children}
      </body>
    </html>
  )
}