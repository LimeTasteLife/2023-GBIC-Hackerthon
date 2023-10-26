import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import { useSession } from 'next-auth/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // const { data: session, status } = useSession();

  // console.log('session', session);

  return (
    <>
      <Head>
        <title>D Incheon NFT</title>

        <link rel='icon' href='/logo.png' />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
