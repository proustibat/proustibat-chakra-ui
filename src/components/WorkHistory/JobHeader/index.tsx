import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { MdDateRange } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';

type JobHeaderProps = {
  duration: string;
  location: string;
};
const JobHeader = ({ duration, location }: JobHeaderProps) => (
  <Grid templateColumns="repeat(5, 1fr)" gap={4} my={4}>
    <GridItem colSpan={2}>
      <Flex as="p" alignItems="center">
        <MdDateRange />
        <Text as="span" ml={1}>
          {duration}
        </Text>
      </Flex>
    </GridItem>
    <GridItem colSpan={3} textAlign="right">
      <Flex as="p" justifyContent="flex-end" alignItems="center">
        <ImLocation2 />
        <Text as="span" ml={1}>
          {location}
        </Text>
      </Flex>
    </GridItem>
  </Grid>
);

export default JobHeader;
