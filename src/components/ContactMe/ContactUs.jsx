import { Container, FormLabel, Heading, VStack, Box, Input, Button, Textarea } from "@chakra-ui/react"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";

export default function ContactUs() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

  return (

    <Container height={'72vh'} marginY={'10'}>
 <VStack height={'full'} spacing={'5'}> 
    <Heading children='Contact Us' />
    <form  style={{ width: '100%' }}>

    <Box my={4}>
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
              <FormLabel htmlFor="message" children="Message" />
              <Textarea
                required
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your Message here"
                focusBorderColor="blue.500"
              />
            </Box>

            <Button variant={'outline'} rightIcon={<MdOutgoingMail />} my={4} colorScheme="teal" type="submit" width="100%">
              Send Mail
            </Button>

            <Box textAlign="center" my={4}>
              New Course Suggestion ? {' '}
              <Link to="/request">
                <Button colorScheme="blue" variant="link">
                  Request Us
                </Button>
              </Link>
            </Box>
          </form>
 </VStack>
    </Container>
  )
}
