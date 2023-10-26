/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      
        
        <script
          type='text/javascript'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer`}
        ></script>
        <meta property='og:title' content='dNFT GBI' key='title' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
