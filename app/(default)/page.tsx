
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
  og?: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    site_name: string;
  };
  twitter?: {
    card: string;
    domain: string;
    url: string;
    title: string;
    description: string;
    image: string;
  };
}

export const metadata: Metadata = {
  title: 'AMBACO',
  description: '',
  og: {
    title: 'AMBACO',
    description: '',
    image: ogLogo.src,
    url: 'https://ambaco.com.ar/',
    type: 'website',
    site_name: 'AMBACO'
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'ambaco.com.ar',
    url: 'https://ambaco.com.ar/',
    title: 'AMBACO',
    description: '',
    image: ogLogo.src
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
