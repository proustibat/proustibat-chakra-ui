import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Badge,
  useColorModeValue,
  Flex,
  useToken,
} from '@chakra-ui/react';

const badges = ['#FRONTEND', '#RUNNING', '#PHOTOGRAPHY', '#MUSIC', '#DRAWING'];

const Card = () => {
  const [base, sm, md, lg, xl, xl2] = useToken('sizes', [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
  ]);

  const badgeBackground = useColorModeValue('gray.50', 'gray.800');
  return (
    <Center py={6}>
      <Box
        width={{ base, sm, md, lg, xl, '2xl': xl2 }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          src={'/images/jennifer-proust.jpeg'}
          mb={4}
          pos={'relative'}
          name="Jennifer Proust"
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Jennifer Proust
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @proustibat
        </Text>
        <Text
          as="p"
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          Lead frontend developer. I&apos;ve been living in Paris for many
          years.
        </Text>
        <Text as="p"> I love to learn new things.</Text>

        <Flex
          flexWrap="wrap"
          gap={3}
          align={'center'}
          justify={'center'}
          direction={'row'}
          mt={6}
        >
          {badges.map((badge) => (
            <Badge
              key={badge}
              px={2}
              py={1}
              bg={badgeBackground}
              fontWeight={'400'}
            >
              {badge}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Center>
  );
};

export default Card;
