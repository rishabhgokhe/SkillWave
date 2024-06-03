import { Box, Container, FormLabel, Heading, Input, VStack, Button, Stack, Divider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlEnvolopeLetter } from "react-icons/sl";
import newLetter from '../../assets/svg/Animated/newsLetter.json'
import Lottie from 'lottie-react';
import { RiLeafFill } from "react-icons/ri";
import { SiMailchimp } from "react-icons/si";

export default function NewletterSubscribe() {
 const [email, setEmail] = useState()

  return (
    <Container minH={'72vh'} marginY={'10'}>
 <VStack height={'full'} spacing={'5'}> 
    
    <Stack direction={['column', 'row']}>
    <Box justifyContent={'center'} alignContent={'center'}><Heading >Subscribe to Free Our Newsletter</Heading></Box>
    <div style={{width:'180px'}}>
<Lottie animationData={newLetter} />
    </div>
    </Stack>
    <form  style={{ width: '100%' }}>

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

            <Button variant={'outline'} rightIcon={<SlEnvolopeLetter />} my={4} colorScheme="teal" type="submit" width="100%">
              Subscribe Now
            </Button>

            <Box textAlign="center" my={4}>
              Checkout our Pro Plan.. {' '}
              <Link to="/subscribe">
                <Button leftIcon={<RiLeafFill />} mb='1' colorScheme="blue" variant="ghost">
                  View now !
                </Button>
              </Link>
              <Divider />
              <Button mt='3' cursor={'default'} _hover={'disable'} _active={false} leftIcon={<SiMailchimp />}>
              Powered by MailChimp
              </Button>
            </Box>
          </form>
 </VStack>
    </Container>
  );
}
