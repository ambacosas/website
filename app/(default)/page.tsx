
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { LanguageProvider } from '@/components/context/LanguageContext';
import ogLogo from '../../public/images/og.png';


export const metadata = {
  title: 'AMBACO',
  description: '',
  openGraph: {
    title: 'AMBACO',
    description: '',
    url: 'https://ambaco.com.ar/',
    type: 'website',
    siteName: 'AMBACO',
    images: [
      {
        url: "http://drive.google.com/uc?export=view&id=1A-kn_UfSNzz8FwIuv_11-Gl7Pixq3vPJ",
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
