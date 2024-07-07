import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700', '800', '900'],
})
const myFont = localFont({
  src: './../assets/fonts/mochiy-pop-one/mochiyPopOne-regular.ttf',
  variable: '--font-mochiy-pop',
})
export const metadata: Metadata = {
  title: 'AgriCargas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${myFont.variable} `}>
        {children}
      </body>
    </html>
  )
}
