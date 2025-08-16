import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Growth Levers - 한글판 최초 출간 | Matt Lerner',
  description: 'Matt Lerner의 성장 전략 바이블, 한국 최초 출간! 스타트업의 숨겨진 성장 레버를 찾아드립니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
