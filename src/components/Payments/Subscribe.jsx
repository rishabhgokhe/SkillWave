import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Button,
  Container,
  VStack,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

// icon import
import { MdVerified as CheckIcon } from 'react-icons/md';
import CircleArrowRight02Icon from '../../assets/svg/icons/CircleArrowRight02Icon'

export default function Subscribe() {
  return (
    <Container minH={'100vh'}>
      <VStack>
        <Heading mt={'5'}>Welcome</Heading>
        <Heading marginBottom={'7'} size={'md'}>
          Our Pricing Plan
        </Heading>

        <Stack spacing={10} direction={['column', 'row']}>

        <Box
          minW="350px"
          bg="white"
          shadow="2xl"
          rounded="lg"
          overflow="hidden"
          borderWidth="1px"
          borderColor="gray.200"
          // transform="scale(1.05)"
          // transition="transform 0.2s"
          // _hover={{ transform: 'scale(1.1)' }}
        >
          <Box bg="teal.500" py={6} textAlign="center">
            <Heading as="h2" size="lg" color="white">
              Montly Premium Plan
            </Heading>
          </Box>
          <VStack p={6} spacing={4} align="start">
            <Text
              fontSize="3xl"
              fontWeight="extrabold"
              textAlign="center"
              color="teal.500"
            >
              ₹199
              <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                {' '}
                /month
              </span>
            </Text>
            <Text textAlign="center" color="gray.600">
              Get access to all premium courses and exclusive content.
            </Text>
            <List spacing={3} w="full">
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                Access to all courses
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                24/7 Support
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                Certificate of completion
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                Access to community forums
              </ListItem>
            </List>
            <Button rightIcon={<CircleArrowRight02Icon />} colorScheme="teal" size="lg" width="full" mt={4}>
              Get Started
            </Button>
          </VStack>
          <Box bg={'blackAlpha.500'} padding={'4'}>
            <Heading color={'white'} size={'sm'} textTransform={'uppercase'}>
              100% Refunable for Cancellation
            </Heading>
            <Text
              fontSize={'xs'}
              children="* Terms and condition applied"
              color={'white'}
            />
          </Box>
        </Box>


        <Box
          minW="350px"
          bg="white"
          shadow="2xl"
          rounded="lg"
          overflow="hidden"
          borderWidth="1px"
          borderColor="gray.200"
          // transform="scale(1.05)"
          // transition="transform 0.2s"
          // _hover={{ transform: 'scale(1.1)' }}
        >
          <Box bg="teal.500" py={6} textAlign="center">
            <Heading as="h2" size="lg" color="white">
              Yearly Premium Plan
            </Heading>
          </Box>
          <VStack p={6} spacing={4} align="start">
            <Text
              fontSize="3xl"
              fontWeight="extrabold"
              textAlign="center"
              color="teal.500"
            >
              ₹1999
              <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                {' '}
                /year
              </span>
              <span style={{ fontSize: '1.2rem' ,color: 'red'}}>     16.24 % off</span>
            </Text>
            <Text textAlign="center" color="gray.600">
              Get access to all premium courses and exclusive content.
            </Text>
            <List spacing={3} w="full">
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                Access to all courses
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                24/7 Support
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                Certificate of completion
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="teal.500" />
                Access to community forums
              </ListItem>
            </List>
            <Button rightIcon={<CircleArrowRight02Icon />} colorScheme="teal" size="lg" width="full" mt={4}>
              Get Started
            </Button>
          </VStack>
          <Box bg={'blackAlpha.500'} padding={'4'}>
            <Heading color={'white'} size={'sm'} textTransform={'uppercase'}>
              100% Refunable for Cancellation
            </Heading>
            <Text
              fontSize={'xs'}
              children="* Terms and condition applied"
              color={'white'}
            />
          </Box>
        </Box>

        </Stack>
      </VStack>
    </Container>
  );
}
