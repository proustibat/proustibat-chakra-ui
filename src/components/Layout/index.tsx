// import { Head } from 'next/head';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Flex
      as="main"
      maxWidth="100%"
      minHeight="calc(100vh - 4.5rem)"
      width="100%"
    >
      {children}
    </Flex>
  </>
);

export default Layout;
