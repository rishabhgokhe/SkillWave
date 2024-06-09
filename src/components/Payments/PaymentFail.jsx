import React from 'react';
import { Container, VStack, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import paymentFailed from '../../assets/svg/Animated/payment_failed.json';
import Lottie from 'lottie-react';

// icon import
import { FaCircleArrowLeft } from 'react-icons/fa6';


export default function PaymentFail() {
  return (
    <Container minH="74vh" mt="16">
      <VStack justifyContent="center" height="full" spacing="3">
        <div style={{ marginTop: '10px', width: '125px' }}>
          <Lottie animationData={paymentFailed} />
        </div>
        <Heading mb="3" textAlign="center">
          Payment Failed
        </Heading>
        <Link to="/subscribe">
          <Button rightIcon={<FaCircleArrowLeft />} colorScheme="teal">
            Try Again
          </Button>
        </Link>
      </VStack>
    </Container>
  );
}
