import {
  Box,
  Flex,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';

import { GiFrance } from 'react-icons/gi';
import { FaFlagUsa } from 'react-icons/fa';

export type LanguageType = {
  lang: string;
  level: string;
};

type SkillsProps = {
  skills: string[];
  languages: LanguageType[];
};

const Skills = ({ languages, skills }: SkillsProps) => (
  <SimpleGrid
    sx={{ 'grid-template-columns': 'max-content max-content' }}
    gap={{ base: 2, md: 4 }}
  >
    <Flex gap={2} flexDirection="column" alignItems="flex-start">
      {skills.map((skill) => (
        <Tag colorScheme="gray" size="lg" key={skill} variant="subtle">
          {skill}
        </Tag>
      ))}
    </Flex>
    <Box>
      <Flex gap={2} flexDirection="column" alignItems="flex-start">
        {languages.map(({ lang, level }) => (
          <Tag colorScheme="gray" size="lg" key={lang} variant="outline">
            <TagLeftIcon
              boxSize="12px"
              as={lang === 'French' ? GiFrance : FaFlagUsa}
            />
            <TagLabel>{`${lang}: ${level}`}</TagLabel>
          </Tag>
        ))}
      </Flex>
    </Box>
  </SimpleGrid>
);
export default Skills;
