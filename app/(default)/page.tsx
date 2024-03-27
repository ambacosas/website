
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { LanguageProvider } from '@/components/context/LanguageContext';
import ogLogo from '../../public/images/og.png';


export const metadata = {
  title: 'AMBACO',
  description: "Your strategic partner to drive growth and excellence in your company.",
  openGraph: {
    title: 'AMBACO',
    description: "Your strategic partner to drive growth and excellence in your company.",
    url: 'https://ambaco.com.ar/',
    type: 'website',
    siteName: 'AMBACO',
    images: [
      {
        url: "https://www.ambaco.com.ar/images/og.png",
        width: 1600,
        height: 630,
      }
    ]
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
