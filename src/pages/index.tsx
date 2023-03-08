import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Proustibat&apos;s website</title>
        <meta
          name="description"
          content="Proustibat's portfolio with a resume, side-projects and research by Jennifer Proust"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flex={1} justifyContent="center" alignItems="flex-start">
        <Card />
      </Flex>
    </>
  );
}
