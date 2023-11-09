import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The End is NEAR',
  description: 'NEARCON submission 2023',
  icons: {
    icon: "./players/near.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <audio id="audio" controls src="/sounds/corn_sound.mp3" className='invisible'/>
        <audio id="oopsAudio" controls src="/sounds/umph.mp3" className='invisible'/>
        <audio id="deereAudio" controls src="/sounds/deere.mp3" className='invisible'/>
        <audio id="whooshAudio" controls src="/sounds/whoosh.mp3" className='invisible'/>
        </body>
    </html>
  )
}
