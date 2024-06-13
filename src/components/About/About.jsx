import {
  Avatar,
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
import termsAndCondition from '../../assets/docs/TermsAndCondition';
import TAndC from '../ui/TermsAndConditions';

// icon import
import MailOpenIcon from '../../assets/svg/icons/MailOpenIcon';

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
          >
            Hello, I'm Rishabh Gokhe, the founder of SkillWave. I am a passionate Full-Stack Developer currently pursuing a degree in Computer Science and Engineering. With a deep interest in technology and education, my aim is to create a platform that empowers individuals with the skills they need to thrive in the digital world. Through SkillWave, I aspire to make learning accessible and enjoyable, ultimately contributing to a better, more knowledgeable world. Join me on this journey towards innovation and excellence. Together, we can build a brighter future.
          </Text>
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
        <Link to="/subscribenewsletter">
          <Button rightIcon={<MailOpenIcon />} variant={'outline'} colorScheme="teal">
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
      <TAndC termsAndCondition={termsAndCondition} /> 
      {/* <Box>
        <Heading>payments</Heading>
      </Box> */}
    </Container>
  );
}
