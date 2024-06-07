import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import Quotes  from '../../assets/images/quotes.png'
 
const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: '""',
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const WithSpeechBubbles = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Testimonials...</Heading>
          <Text>We have been working with clients and students around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Interface</TestimonialHeading>
              <TestimonialText>
              SkillWave has been an incredible learning platform for me. The programming courses are well-structured and easy to follow. I've learned so much and feel confident in my skills now!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={Quotes}
              name={'Rishabh Gokhe'}
              title={'Aspiring Programmer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
              We partnered with SkillWave to provide professional development courses for our employees. The courses were well-received, and we've seen a noticeable improvement in our team's skills and performance.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={Quotes}
              name={'Rishabh Gokhe'}
              title={'CEO, TechCorp Inc.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              I took the graphic design course on SkillWave, and it exceeded my expectations. The instructors are knowledgeable, and the hands-on projects helped me improve my skills significantly.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={Quotes}
              name={'Rishabh Gokhe'}
              title={'Graphic Designer'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

export default WithSpeechBubbles;