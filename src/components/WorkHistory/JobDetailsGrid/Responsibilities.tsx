import { WorkHistoryType } from '@/components/WorkHistory';
import {
  Box,
  ListItem,
  UnorderedList,
  useColorModeValue,
  useToken,
} from '@chakra-ui/react';
import kebabCase from 'lodash/kebabCase';

const Responsibilities = ({
  responsibilities,
  position,
}: {
  responsibilities: WorkHistoryType['responsibilities'] | null;
  position: WorkHistoryType['position'];
}) => {
  const [gray50, gray900] = useToken('colors', ['gray.50', 'gray.900']);

  const boxBackground = useColorModeValue(gray50, gray900);
  const boxColor = useColorModeValue(gray900, gray50);

  if (!responsibilities) return null;
  return (
    <Box bg={boxBackground} color={boxColor} p={2}>
      <UnorderedList>
        {responsibilities.map((responsibility) => (
          <ListItem key={kebabCase(`${responsibility}-${position}`)}>
            {responsibility}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Responsibilities;
