import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

const AvatarMenu = () => (
  <Menu>
    <MenuButton
      as={Button}
      rounded={'full'}
      variant={'link'}
      cursor={'pointer'}
      minW={0}
      width="48px"
    >
      <Avatar
        size={'md'}
        src={'/images/jennifer-proust.jpeg'}
        my={3}
        name="Jennifer Proust"
      />
    </MenuButton>
    <MenuList>
      <MenuItem>Link 1</MenuItem>
      <MenuDivider />
      <MenuItem>Link 2</MenuItem>
      <MenuDivider />
      <MenuItem>Link 3</MenuItem>
    </MenuList>
  </Menu>
);
export default AvatarMenu;
