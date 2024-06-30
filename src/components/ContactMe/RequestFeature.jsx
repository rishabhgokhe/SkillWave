import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Box,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// icon import
import MailSend01Icon from '../../assets/svg/icons/MailSend01Icon';

export default function RequestFeature() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [featureDetail, setFeatureDetail] = useState();

  return (
    <Container height={'75vh'} marginY={'10'}>
      <VStack height={'full'} spacing={'5'}>
        <Heading>Request New Feature✨</Heading>
        <form style={{ width: '100%' }} action="/api/v1/request" method="POST">
        <Box my={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              type="text"
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={4}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={4}>
            <FormLabel htmlFor="featureDetail" children="Feature Details" />
            <Textarea
              required
              id="featureDetail"
              value={featureDetail}
              onChange={e => setFeatureDetail(e.target.value)}
              placeholder="Provide details about feature and its use cases..."
              focusBorderColor="blue.500"
            />
          </Box>

          <Button
            variant={'outline'}
            rightIcon={<MailSend01Icon />}
            my={4}
            colorScheme="teal"
            type="submit"
            width="100%"
          >
            Send Mail
          </Button>

          <Box textAlign="center" my={4}>
            Browse Available Courses{' '}
            <Link to="/courses">
              <Button colorScheme="blue" variant="link">
                Click
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}
