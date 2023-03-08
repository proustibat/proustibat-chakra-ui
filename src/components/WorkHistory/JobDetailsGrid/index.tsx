import { SimpleGrid } from '@chakra-ui/react';
import { WorkHistoryType } from '@/components/WorkHistory';
import Responsibilities from '@/components/WorkHistory/JobDetailsGrid/Responsibilities';
import TechSkills from '@/components/WorkHistory/JobDetailsGrid/TechSkills';

const JobDetailsGrid = ({
  responsibilities,
  techSkills,
  position,
}: {
  responsibilities?: WorkHistoryType['responsibilities'] | null;
  techSkills?: WorkHistoryType['techSkills'] | null;
  position: WorkHistoryType['position'];
}) => {
  const nbCol: number = responsibilities && techSkills ? 2 : 1;
  return responsibilities || techSkills ? (
    <SimpleGrid
      columns={{ sm: 1, md: nbCol }}
      spacing={{ sm: 2, md: 10 }}
      mt={4}
    >
      <Responsibilities
        responsibilities={responsibilities}
        position={position}
      />

      <TechSkills skills={techSkills} />
    </SimpleGrid>
  ) : null;
};

export default JobDetailsGrid;
