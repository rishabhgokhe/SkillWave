import { Container, FormLabel, HStack, Heading, Image, VStack } from "@chakra-ui/react"
import React from 'react'

export default function Login() {
  return (
    <Container>
        <HStack justifyContent={'left'}  alignItems={'center'}>
            <Image src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'} justifyContent={'left'} ></Image>
            <VStack>
            <Heading children="Welcome to SkillWave" />
            <form style={{width: '100%'}}>
                <FormLabel></FormLabel>
            </form>
        </VStack>
        </HStack>
    </Container>
  )
}

{/* <VStack>
            <Heading children="Welcome to SkillWave" />
            <form style={{width: '100%'}}>
                <FormLabel></FormLabel>
            </form>
        </VStack> */}