import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AMBACO',
    short_name: 'AMBACO',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        "src": "/android-icon1.png",
        "sizes": "192x192",
        "type": "image/png"
    },
    {
        "src": "/android-icon2.png",
        "sizes": "512x512",
        "type": "image/png"
    },
    {
        "src": "/favicon-32x32.png",
        "sizes": "32x32",
        "type": "image/png"
    },
    {
        "src": "/favicon-16x16.png",
        "sizes": "16x16",
        "type": "image/png"
    },
    {
        "src": "/apple-icon.png",
        "sizes": "32x32",
        "type": "image/png"
    }
    ],
  }
}