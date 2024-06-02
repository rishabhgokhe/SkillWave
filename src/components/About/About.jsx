import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import TermsAndCondition from '../../assets/docs/TermsAndCondition';

const TandC = ({ termsAndCondition }) => {
  return (
    <Box marginY={'4'}>
      <Heading size="md" textAlign={['center', 'left']} marginY={'3'}>
        Terms and Condition
      </Heading>
      <Box h='200' p="2" overflowY={'scroll'}>
        <Text letterSpacing={'widest'} textAlign={['center', 'left']}>
          {termsAndCondition}
        </Text>
        <Heading
          paddingY={'3'}
          size={'xs'}
          children="30 days Moneyback Guarentee"
        />
      </Box>
    </Box>
  );
};

export default function About() {
  return (
    <Container maxWidth={'container.lg'}>
      <Heading
        children="About Us"
        fontFamily={'sans-serif'}
        textAlign={['center', 'left']}
        margin={'3'}
        marginBottom={['0', '3']}
      />

      <Stack direction={['column', 'row']} padding={'5'} spacing={['3', '9']}>
        <VStack>
          <Avatar
            src="https://avatars.githubusercontent.com/u/120303705?v=4"
            boxSize={['40', '150']}
          />
          <Text children="Founder" color={'gray'} />
        </VStack>

        <VStack width={'full'}>
          <Heading
            className="about-us-name"
            children="Rishabh Gokhe"
            size={['md', 'xl']}
            textAlign={'center'}
          />

          <Text
            padding={'5'}
            textAlign={['center', 'left']}
            children="Hello, I am a Full-Stack Developer currently pursuing a Computer Science and Enginnering Degree. My aim is to make a better world"
          />
        </VStack>
      </Stack>

      <Stack direction={'column'} alignItems="center">
        <Text textAlign={['center', 'left']}>
          Welcome to SkillWave, your premier destination for online learning and
          personal development. At SkillWave, we believe in the power of
          education to transform lives and empower individuals to achieve their
          fullest potential. Our mission is to make high-quality education
          accessible to everyone, everywhere.
        </Text>
        <Link to="/subscribe">
          <Button variant={'outline'} colorScheme="teal">
            Subscribe to our NewsLetter
          </Button>
        </Link>
      </Stack>

      <Stack direction={'column'} alignItems={['center', 'left']} marginY={'3'}>
        <Heading size={'md'} textAlign={'left'}>What We Offer</Heading>
        <UnorderedList >
            <ListItem><b>Comprehensive Course Library:</b> Our extensive library covers a wide range of subjects including technology, business, arts, and personal development. Whether you are looking to advance your career, switch fields, or pursue a new hobby, we have a course for you.
            <ListItem><b>Expert Instructors:</b> Our courses are crafted and taught by industry experts and experienced educators who are passionate about sharing their knowledge and helping you achieve your goals.</ListItem>
            <ListItem><b>Flexible Learning:</b> Learn at your own pace with our flexible online courses. Whether you have a few minutes each day or can dedicate several hours a week, SkillWave fits into your schedule.</ListItem>
            <ListItem><b>Community Support:</b> Join a thriving community of learners and professionals. Engage in discussions, share insights, and network with peers from around the world.</ListItem></ListItem>
        </UnorderedList>
            <Heading size={'md'} textAlign={'left'}>Our Values</Heading>
        <UnorderedList>
            <ListItem><b>Quality Education:</b> We are committed to providing top-notch educational content that is accurate, up-to-date, and relevant.</ListItem>
            <ListItem><b>Accessibility:</b> Education should be accessible to all. We strive to create a platform that is inclusive and available to learners everywhere.</ListItem>
            <ListItem><b>Continuous Improvement:</b> We are always looking for ways to improve our platform and our offerings. Your feedback is invaluable to us as we continue to grow and evolve.</ListItem>
        </UnorderedList>

        <Heading size={'md'} textAlign={'left'} >Join Us</Heading>
        <UnorderedList>
            <Text>
            Embark on your learning journey with SkillWave today. Whether you are looking to develop new skills, advance in your career, or simply explore new interests, SkillWave is here to help you navigate the waves of knowledge and achieve your goals.
            </Text>
        </UnorderedList>
      </Stack>
<Divider borderWidth={2} />
      <TandC termsAndCondition={TermsAndCondition} />
      {/* <Box>
        <Heading>payments</Heading>
      </Box> */}
    </Container>
  );
}
