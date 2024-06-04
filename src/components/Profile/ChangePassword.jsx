import { Button, Container, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import LockSvg from '../../assets/svg/Animated/lock.json'
import Lottie from 'lottie-react';

export default function ChangePassword() {

    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

  return (
    <Container minH={'80vh'}>
        <form >
            <HStack>
            <Heading my={5}>
                Change Password ***
            </Heading>
            <div style={{width: '160px'}} ><Lottie animationData={LockSvg} /></div>
            </HStack>
            <VStack spacing={'5'}>
            <Input
                required
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                placeholder="Old Password"
                type="password"
                focusBorderColor="blue.500"
              />
              <Input
                required
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="New Password"
                type="password"
                focusBorderColor="blue.500"
              />
              <Button width={'full'} colorScheme='teal' variant={'outline'}>
                Change
              </Button>
            </VStack>
        </form>
    </Container>
  )
}
