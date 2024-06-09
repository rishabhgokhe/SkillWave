import { Box, SimpleGrid, Icon, Text, Stack, Flex, Divider } from '@chakra-ui/react';
import { FcCalendar, FcConferenceCall, FcReadingEbook } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={6}>
        <Divider mb={4} />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCalendar} w={10} h={10} />}
          title={'Personalized Learning Paths'}
          text={
"SkillWave offers personalized learning paths tailored to each user's goals and learning style. Whether you're a beginner or an experienced learner, our platform adapts to your needs, providing a seamless and effective learning experience"          }
        />
        <Feature
          icon={<Icon as={FcConferenceCall} w={10} h={10} />}
          title={'Expert-Led Courses'}
          text={
"Learn from industry experts and professionals who bring real-world experience to the table. Our courses are designed and delivered by experts in their fields, ensuring you receive high-quality, up-to-date content that is relevant and valuable."          }
        />
        <Feature
          icon={<Icon as={FcReadingEbook} w={10} h={10} />}
          title={'Interactive Learning Modules'}
          text={
"Dive into interactive learning modules that engage and challenge you. Our platform offers a variety of multimedia content, quizzes, and practical exercises to ensure you grasp concepts effectively and retain knowledge."          }
        />
      </SimpleGrid>
    </Box>
  );
}
