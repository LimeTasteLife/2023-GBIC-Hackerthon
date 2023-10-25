import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
       <Script
          type='text/javascript'
          src='//dapi.kakao.com/v2/maps/sdk.js?appkey=0936a76a76f908990b61f40ce4f15619&libraries=services,clusterer'
        ></Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}
