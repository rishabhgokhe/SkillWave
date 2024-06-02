import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdOutlineSms } from "react-icons/md";

export default function ForgetPassword() {
    const [email, setEmail] = useState('');

  return (
    <Container height={'81vh'} paddingY={'10'}>
        <form> 
            <Heading children='🗿 Forgot Password ?' marginY={'10'} textAlign={['center', 'left']} />
            <VStack spacing={'5'}>
            <Input
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                type="email"
                focusBorderColor="blue.500"
              />

              <Button rightIcon={<MdOutlineSms />} type='submit' width='full' colorScheme='blue' variant='outline' >Get verification code on Email</Button>
            </VStack>
        </form>
    </Container>
  )
}
