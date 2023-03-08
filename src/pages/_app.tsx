import type { AppProps } from 'next/app';
import '@fontsource/abel/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/jetbrains-mono/400.css';
import { Chakra } from '@/Chakra';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}
