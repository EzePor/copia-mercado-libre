import './globals.css'
import { Inter } from 'next/font/google'

import HeaderComponent from './shared/components/HeaderComponent'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mercado Libre',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <HeaderComponent />
        

        <main className='max-w-screen-xl mx-auto ' >
          {children}
        </main>
        
        </body>
    </html>
  )
}
