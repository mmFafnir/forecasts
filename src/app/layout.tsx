import './scss/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Countries from '@/components/Widgets/Countries'
import Leagues from '@/components/Widgets/Leagues'
import Bookmakers from '@/components/Widgets/Bookmakers'
import Statistics from '@/components/Widgets/Statistics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className='wrapper'>
          <Header />
          <main>
            <div className="main container">
              <Sidebar widgets={[<Leagues key={1} />, <Countries key={2}/>]}/>
              <div className="page-content">
                {children}
              </div>
              <Sidebar widgets={[<Statistics key={4} />, <Bookmakers key={3}/>]}/>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
