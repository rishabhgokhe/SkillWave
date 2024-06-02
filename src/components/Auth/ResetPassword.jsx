import { Box, Button, VStack, Container, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ResetPassword() {
  const [password, setPassword] = useState();
  const params = useParams()

  console.log(params.token);

  return (
    <Container height={'81vh'} paddingY={'10'}>
      <form>
        <Heading
          children="Reset Password"
          marginY={'10'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'5'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter new password !!"
            type="password"
            focusBorderColor="blue.500"
          />
          <Box textAlign={'left'} >
            <Button variant={'link'} >Generate Strong Password</Button>
          </Box>

          <Button
            type="submit"
            width="full"
            colorScheme="blue"
            variant="outline"
          >
            Update Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
}
