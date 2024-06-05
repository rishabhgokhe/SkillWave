import React from 'react';
import { Container, VStack, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import error404_1 from '../assets/svg/Animated/error404_1.json'
import error404_2 from '../assets/svg/Animated/error404_2.json'
import error404_3 from '../assets/svg/Animated/error404_3.json'
import error404_4 from '../assets/svg/Animated/error404_4.json'
import error404_5 from '../assets/svg/Animated/error404_5.json'
import Lottie from 'lottie-react';
import Home04Icon from '../assets/svg/Home04Icon';

const svg_arr = [error404_1, error404_2, error404_3, error404_4, error404_5 ]

export default function NotFound() {
  return (
    <Container minH="81vh">
      <VStack justifyContent='center' height='full' >
        <div style={{marginTop: '10px'}}>
<Lottie animationData={svg_arr[Math.floor(Math.random() * svg_arr.length)]} />
        </div>
      <Heading mb='3' textAlign="center">
        Page Not Found
      </Heading>
          <Link to="/">
            <Button rightIcon={<Home04Icon />} colorScheme="teal">Go Home</Button>
          </Link>
      </VStack>
    </Container>
  );
}
