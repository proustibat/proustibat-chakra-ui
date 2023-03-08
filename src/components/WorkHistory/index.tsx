import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
  Text,
  Flex,
  useToken,
} from '@chakra-ui/react';
import JobHeader from '@/components/WorkHistory/JobHeader';
import kebabCase from 'lodash/kebabCase';
import { MdWork } from 'react-icons/md';
import JobDetailsGrid from '@/components/WorkHistory/JobDetailsGrid';
import { capitalize } from 'lodash';

export type WorkHistoryType = {
  position: string;
  company: string;
  description: string;
  duration: string;
  location: string;
  responsibilities?: string[];
  techSkills?: string[];
  missions?: MissionType[];
};

type MissionType = Omit<
  WorkHistoryType,
  'position' | 'duration' | 'location' | 'missions'
>;

type WorkHistoryProps = {
  history: WorkHistoryType[];
};

const WorkHistory = ({ history }: WorkHistoryProps) => {
  const [orange900, orange600, gray300, black, gray900, gray50] = useToken(
    'colors',
    ['orange.900', 'orange.600', 'gray.300', 'black', 'gray.900', 'gray.50']
  );

  const boxColor = useColorModeValue(gray900, gray50);

  const accordionButtonExpandedStyle = {
    bg: useColorModeValue(gray300, black),
  };
  const highlightColor = useColorModeValue(orange900, orange600);
  const borderPanelColor = useColorModeValue(gray300, black);
  return (
    <Accordion allowToggle>
      {history.map(
        ({ position, company, description, duration, location, ...data }) => (
          <AccordionItem key={kebabCase(`${position}-${company}`)}>
            <AccordionButton _expanded={accordionButtonExpandedStyle}>
              <Box as="h2" flex="1" textAlign="left">
                <Text px="1" py="0.5" color={highlightColor} fontWeight="bold">
                  {position
                    .split(' ')
                    .map((word) => capitalize(word))
                    .join(' ')}
                </Text>
                <Text>{`@ ${company}`}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              as="section"
              border={`1px solid ${borderPanelColor}`}
            >
              <JobHeader duration={duration} location={location} />

              <Text>{description}</Text>

              <JobDetailsGrid
                position={position}
                responsibilities={data.responsibilities || null}
                techSkills={data.techSkills || null}
              />

              {data.missions &&
                data.missions.map(
                  ({
                    company,
                    description,
                    responsibilities = null,
                    techSkills = null,
                  }) => (
                    <Box key={kebabCase(company)} my={2}>
                      <Flex
                        as="h3"
                        color={boxColor}
                        p={2}
                        fontWeight="bold"
                        alignItems="center"
                        gap={1}
                      >
                        <MdWork />
                        {company}
                      </Flex>

                      <Text px={2} mb={2}>
                        {description}
                      </Text>

                      <JobDetailsGrid
                        position={position}
                        responsibilities={responsibilities}
                        techSkills={techSkills}
                      />
                    </Box>
                  )
                )}
            </AccordionPanel>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
};

export default WorkHistory;
