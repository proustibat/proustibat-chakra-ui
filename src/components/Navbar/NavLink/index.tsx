import { ReactNode } from 'react';
import { Link, useColorModeValue, useToken } from '@chakra-ui/react';

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const [gray200, gray700] = useToken('colors', ['gray.200', 'gray.700']);

  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue(gray200, gray700),
      }}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
