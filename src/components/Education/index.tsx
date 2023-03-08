import { StackDivider, VStack, Text, Grid, GridItem } from '@chakra-ui/react';
import { IoIosSchool } from 'react-icons/io';
import kebabCase from 'lodash/kebabCase';

export type EducationType = {
  degree: string;
  location: string;
};

type EducationProps = {
  list: EducationType[];
};
const Education = ({ list }: EducationProps) => (
  <VStack
    divider={<StackDivider borderColor="gray.200" />}
    spacing={4}
    align="stretch"
  >
    {list.map(({ degree, location }) => (
      <Grid key={kebabCase(degree)} gap={2} templateColumns="auto 1fr">
        <GridItem width="3rem" height="3rem">
          <IoIosSchool style={{ width: '100%', height: '100%' }} />
        </GridItem>
        <GridItem as="h3">
          <Text fontWeight="bold">{degree}</Text>
          <Text>{location}</Text>
        </GridItem>
      </Grid>
    ))}
  </VStack>
);

export default Education;
