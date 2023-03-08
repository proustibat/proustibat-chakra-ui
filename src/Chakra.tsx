import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import theme from '../theme';
import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';

type ChakraProps = {
  cookies?: string;
  children: ReactNode;
};

export const Chakra = ({ cookies, children }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

// also export a reusable function getServerSideProps
export const getServerSideProps = (context: GetServerSidePropsContext) => ({
  props: {
    // first time users will not have any cookies and you may not return
    // undefined here, hence ?? is necessary
    cookies: context.req.headers.cookie ?? '',
  },
});
