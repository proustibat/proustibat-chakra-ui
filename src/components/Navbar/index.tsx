import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  useColorMode,
  useToken,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from '@/components/Navbar/NavLink';
import AvatarMenu from '@/components/Navbar/AvatarMenu';
import links from '@/components/Navbar/links';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [gray100, gray900] = useToken('colors', ['gray.100', 'gray.900']);
  const renderLinks = () =>
    links.map(([text, slug], index) => (
      <NavLink key={slug} href={index === 0 ? '/' : `/${slug}`}>
        {text}
      </NavLink>
    ));

  return (
    <Box
      bg={useColorModeValue(gray100, gray900)}
      px={4}
      sx={{ position: 'sticky', top: 0 }}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        maxWidth="container.lg"
        m="auto"
      >
        {/* MENU BUTTON, CLOSE BUTTON FOR MOBILE*/}
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* TABLET & DESKTOP MENU*/}
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {renderLinks()}
          </HStack>
        </HStack>

        {/* AVATAR AND THEME BUTTON */}
        <Flex alignItems={'center'}>
          <Button
            bg="none"
            onClick={toggleColorMode}
            mr={3}
            aria-label={`Switch to ${
              colorMode === 'dark' ? 'light' : 'dark'
            } mode`}
          >
            {colorMode === 'dark' ? <BsSun /> : <BsMoonStarsFill />}
          </Button>
          {router.pathname !== '/' && <AvatarMenu />}
        </Flex>
      </Flex>

      {/* MOBILE MENU */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {renderLinks()}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
