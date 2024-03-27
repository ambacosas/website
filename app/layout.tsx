import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import { LanguageProvider } from '@/components/context/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'AMBACO',
  description: '',
  icons: {
    icon: '/icon.ico',
  },
}

const RootLayout: React.FC<React.HTMLProps<HTMLBodyElement>> = ({ children }) => {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
            <Banner />
          </div>
        </body>
      </html>
    </LanguageProvider>
  );
};

export default RootLayout;