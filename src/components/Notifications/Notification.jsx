import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Notification() {
  return (
    <Container minH={'81vh'}>
        <VStack alignItems={['flex-start', 'center']}>
            <Heading>
                All Notifications
            </Heading>
            <Box>
                <Text>No New Notification Available</Text>
            </Box>
        </VStack>
    </Container>
  )
}
