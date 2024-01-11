import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Header from '/app/components/Header';
import Sidebar from '/app/components/Sidebar';
import Footer from 'app/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'readme!!!',
  description: 'MMD model readme',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className='font-orbitron m-6 border-2 border-blue-500 shadow-lg'>
          <div className='hidden h-12 sm:flex justify-between items-center text-2xl text-blue-900'>
            <div>
              <p className='relative inline-block ml-4 pl-32 text-xl border-l-2 border-b-2 border-blue-500 text-blue-500'><label className='text-2xl absolute left-2 bottom-0 animate-pulse'>■</label>　</p>
              <Link className='hidden xl:inline hover:underline decoration-4 underline-offset-8 mx-8 hover:animate-pulse' href='/'>Japanese</Link>
              <Link className='hidden xl:inline hover:underline decoration-4 underline-offset-8 hover:animate-pulse' href='/rulesEn'>English</Link>
            </div>
            <p className='relative inline-block mr-4 pr-8 pl-20 text-xl border-r-2 border-b-2 border-blue-500 text-blue-500'><label className='text-2xl absolute right-2 bottom-0 animate-pulse'>■</label>ONLINE</p>
          </div>
          <Header />
          <div className='sm:m-4 sm:border-2 border-blue-500 sm:shadow-md'>
            <div className='md:m-3 md:border-2 border-blue-900'>
              <div className='flex m-4 p-2 sm:p-8 border-x-8 border-y-2 border-blue-900'>
                <div className='hidden xl:flex w-60 xl:w-80 flex-none mr-8 p-4 border-2 border-blue-900 shadow-xl animate-text-focus-in'>
                  <Sidebar />
                </div>
                <div className='flex-1 overflow-auto min-w-0 p-2 md:p-10 md:border-2 border-blue-900 md:shadow-xl animate-text-focus-in'>
                  {children}
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <div className='flex items-center mb-8 before:h-px before:flex-1 before:bg-blue-500 after:h-px after:flex-1 after:bg-blue-500 md:text-2xl text-blue-500'>
            <label className='pb-1 pr-8 animate-pulse'>■</label>DISPLAY SYSTEM VER.5.0<label className='pb-1 pl-8 animate-pulse'>■</label>
          </div>
        </div>
      </body>
    </html>
  )
}