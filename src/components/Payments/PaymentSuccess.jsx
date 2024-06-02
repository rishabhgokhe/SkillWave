import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import Lottie from 'lottie-react';
import checkMark from '../../assets/svg/Animated/checkMark.json';
import { Link } from 'react-router-dom';

export default function PaymentSuccess() {
  return (
    <Container minH="81vh" padding="5">
      <Heading my="5" textAlign="center">
        Subcribed to Pro Plan !!!
      </Heading>

      <VStack
        boxShadow="lg"
        paddingBottom="8"
        alignItems="center"
        borderRadius="lg"
      >
        <Box bg="teal.500" w="full" style={{ borderRadius: '8px 8px 0 0' }}>
          <Text textAlign="center" padding="3" color="white">
            Payment Successfull
          </Text>
        </Box>
        <Box>
          <VStack alignItems="center" px="6" mt="4">
            <Text>
              Congratulation 🎉 You are a Pro Plan Member. Enjoy your access to
              all premium courses and exclusive content.
            </Text>
            <div style={{ width: '250px' }}>
              <Lottie
                loop={true}
                animationData={checkMark}
              />
            </div>
            <Heading size='xs'>
              Payment ReferenceID : 910Bh!uy#83008%B342b 
            </Heading>
            <HStack display="flex">
              <Link to="/profile">
                <Button colorScheme="teal">View Profile</Button>
              </Link>
              <Link to="/">
                <Button colorScheme="teal" variant="outline">Back to HomePage</Button>
              </Link>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}