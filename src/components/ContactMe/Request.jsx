import { Container, FormLabel, Heading, VStack, Box, Input, Button, Textarea } from "@chakra-ui/react"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";

export default function Request() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [course, setCourse] = useState();
    const [courseDetail, setCourseDetail] = useState();

  return (

    <Container height={'75vh'} marginY={'10'}>
 <VStack height={'full'} spacing={'5'}> 
    <Heading children='Request New Course' />
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
              <FormLabel htmlFor="course" children="Suggest Course Name" />
              <Input
                required
                id="course"
                value={course}
                onChange={e => setCourse(e.target.value)}
                placeholder="ex. python crash course"
                type="text"
                focusBorderColor="blue.500"
              />
            </Box>

            <Box my={4}>
              <FormLabel htmlFor="courseDetail" children="Course Details" />
              <Textarea
                required
                id="courseDetail"
                value={courseDetail}
                onChange={e => setCourseDetail(e.target.value)}
                placeholder="Provide details about course and include which technologies should be Included"
                focusBorderColor="blue.500"
              />
            </Box>

            <Button variant={'outline'} rightIcon={<MdOutgoingMail />} my={4} colorScheme="teal" type="submit" width="100%">
              Send Mail
            </Button>

            <Box textAlign="center" my={4}>
              Browse Available Courses {' '}
              <Link to="/courses">
                <Button colorScheme="blue" variant="link">
                  Click
                </Button>{' '} Here
              </Link>
            </Box>
          </form>
 </VStack>
    </Container>
  )
}

