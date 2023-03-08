import { WorkHistoryType } from '@/components/WorkHistory';
import { Badge, Flex, useColorModeValue, useToken } from '@chakra-ui/react';
import kebabCase from 'lodash/kebabCase';

const TechSkills = ({
  skills,
}: {
  skills: WorkHistoryType['techSkills'] | null;
}) => {
  const [gray50, gray900] = useToken('colors', ['gray.50', 'gray.900']);

  const boxBackground = useColorModeValue(gray50, gray900);
  const boxColor = useColorModeValue(gray900, gray50);

  if (!skills) return null;

  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      alignContent="flex-start"
      gap={2}
      bg={boxBackground}
      color={boxColor}
      p={2}
    >
      {skills.map((skill) => (
        <Badge key={kebabCase(skill)} variant="subtle">
          {skill}
        </Badge>
      ))}
    </Flex>
  );
};
export default TechSkills;
