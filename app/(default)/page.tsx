
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { LanguageProvider } from '@/components/context/LanguageContext';
import ogLogo from '../../public/images/og.png';
import Head from 'next/head'

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
          <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.og && (
          <>
            <meta property="og:title" content={metadata.og.title} />
            <meta property="og:description" content={metadata.og.description} />
            <meta property="og:image" content={metadata.og.image} />
            <meta property="og:url" content={metadata.og.url} />
            <meta property="og:type" content={metadata.og.type} />
            <meta property="og:site_name" content={metadata.og.site_name} />
          </>
        )}
        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:domain" content={metadata.twitter.domain} />
            <meta name="twitter:url" content={metadata.twitter.url} />
            <meta name="twitter:title" content={metadata.twitter.title} />
            <meta name="twitter:description" content={metadata.twitter.description} />
            <meta name="twitter:image" content={metadata.twitter.image} />
          </>
        )}
      </Head>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
