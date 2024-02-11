
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { LanguageProvider } from '@/components/context/LanguageContext';
import ogLogo from '../../public/images/og.png';

interface Metadata {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    site_name: string;
  };
}

export const metadata: Metadata = {
  title: 'AMBACO',
  description: '',
  openGraph: {
    title: 'AMBACO',
    description: '',
    image: ogLogo.src,
    url: 'https://ambaco.com.ar/',
    type: 'website',
    site_name: 'AMBACO'
  }
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
