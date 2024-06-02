import { Container, FormLabel, Heading, Image, VStack, Box, Input, Button, Flex } from "@chakra-ui/react"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/actions/user';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    // dispatch(login(email, password));
  };

  return (
    <Container>
      <Flex justifyContent={'left'} alignItems={'center'} height="80vh">
        <Box width="40%">
          <Image src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'} objectFit="cover" />
        </Box>
        <VStack width="60%" spacing={4} alignItems="stretch" p={4}>
          <Heading children="Welcome to SkillWave" textAlign="center" />
          <form onSubmit={submitHandler} style={{ width: '100%' }}>
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
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                type="password"
                focusBorderColor="blue.500"
              />
            </Box>

            <Box textAlign="right">
              <Link to="/forgetpassword">
                <Button fontSize="sm" variant="link">
                  Forget Password?
                </Button>
              </Link>
            </Box>

            <Button my={4} colorScheme="teal" type="submit" width="100%">
              Login
            </Button>

            <Box textAlign="center" my={4}>
              New User ? {' '}
              <Link to="/register">
                <Button colorScheme="blue" variant="link">
                  Sign Up
                </Button>{' '}
                here
              </Link>
            </Box>
          </form>
        </VStack>
      </Flex>
    </Container>
  );
}
