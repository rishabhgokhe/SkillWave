import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Profile() {
  return (
    <Container minH='85vh' maxW='container.lg' >
        <Heading textAlign={['center', 'left']} mt='4' >Profile</Heading>
    </Container>
  )
}
