import { Heading, Input, Button, Container, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Updateprofile() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
  return (
    <Container minH={'80vh'}>
        <form >
            <Heading my={5}>
                Update Profile
            </Heading>
            <VStack spacing={'5'}>
            <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="New Name"
                type="password"
                focusBorderColor="blue.500"
              />
              <Input
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="New Email"
                type="email"
                focusBorderColor="blue.500"
              />
              <Button width={'full'} colorScheme='teal' variant={'outline'}>
                Update
              </Button>
            </VStack>
        </form>
    </Container>
  )
}
