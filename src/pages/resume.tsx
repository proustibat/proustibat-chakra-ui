import Head from 'next/head';
import {
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
} from '@chakra-ui/react';
import WorkHistory, { WorkHistoryType } from '@/components/WorkHistory';
import { GetStaticProps } from 'next';
import data from '@/data/resume.json';
import Education, { EducationType } from '@/components/Education';
import Skills, { LanguageType } from '@/components/Skills';

export type ResumeProps = {
  presentation: string;
  workHistory: WorkHistoryType[];
  education: EducationType[];
  skills: string[];
  languages: LanguageType[];
};
const Resume = ({
  presentation,
  workHistory,
  education,
  skills,
  languages,
}: ResumeProps) => (
  <>
    <Head>
      <title>Jennifer Proust&apos;s resume</title>
      <meta
        name="description"
        content="Proustibat's - Lead frontend engineer - resume"
      />
    </Head>

    <Container p={5} maxW="container.lg">
      <Heading as="h1">Jennifer Proust</Heading>

      <Text my={5}>{presentation}</Text>

      <Tabs variant="enclosed" colorScheme="base" size="lg">
        <TabList>
          <Tab fontWeight="bold">Work history</Tab>
          <Tab fontWeight="bold">Education</Tab>
          <Tab fontWeight="bold">Skills</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <WorkHistory history={workHistory} />
          </TabPanel>
          <TabPanel>
            <Education list={education} />
          </TabPanel>
          <TabPanel>
            <Skills skills={skills} languages={languages} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  </>
);

export default Resume;

export const getStaticProps: GetStaticProps = () => {
  const { presentation, workHistory, education, skills, languages } = data;
  return {
    props: {
      presentation,
      workHistory,
      education,
      skills,
      languages,
    },
  };
};
