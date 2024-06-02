import React, { useState } from 'react'
import { Container, FormLabel, Heading, Image, VStack, Box, Input, Button, Flex, Avatar } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    // const [image, setImage] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    // dispatch(login(email, password));
  };

  function handleChangeImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
     reader.onloadend = () => {
        setAvatar(reader.result)
        // setImage(file);
    }
  }

  return (
    <Container>
      <Flex justifyContent={'left'} alignItems={'center'} height="80vh">
        <Box width="40%">
          <Image src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'} objectFit="cover" />
        </Box>
        <VStack width="60%" spacing={4} alignItems="stretch" p={4}>
          <Heading children="Create account on SkillWave" textAlign="center" />
          <form onSubmit={submitHandler} style={{ width: '100%' }}>

            <Box display={'flex'} justifyContent={'center'}>
                <Avatar src={avatar} size={'lg'} ></Avatar>
            </Box>

          <Box my={2}> 
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

            <Box my={2}>
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

            <Box my={2}>
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

            <Box my={2}>
              <FormLabel htmlFor="uploadAvatar" children="Upload Avatar" />
              <Input
              className='sign-up-upload-avatar'
                required
                id="uploadAvatar"
                accept='image/*'
                type='file'
                focusBorderColor="blue.500"
                onChange={handleChangeImage}
              />
            </Box>

            <Box textAlign="right">
              <Link to="/">
                <Button fontSize="sm" variant="link">
                  Generate strong Password
                </Button>
              </Link>
            </Box>

            <Button my={4} colorScheme="teal" type="submit" width="100%">
              Register Now
            </Button>

            <Box textAlign="center" my={4}>
              Already Registered ? {' '}
              <Link to="/login">
                <Button colorScheme="blue" variant="link">
                  Login
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
