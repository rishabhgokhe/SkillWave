import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";


 export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <Box padding={'5'} bg='blackAlpha.700' minH={'10vh'}>
<Stack direction={['column', 'row']}  >
    <VStack alignItems={['center', 'flex-start']} width={'100%'} >
        <Heading children='All Rights Reserved' color={'white'} size={'md'} />
        <Heading children={`© ${currentYear} By Rishabh`} color={'yellow'} size={'sm'} />
    </VStack>

    <HStack spacing={['2', '10']} justifyContent={'center'} color={'white'} >
        <a href='https://github.com/rishabhgokhe' target={'blank'}>
           Github <VscGithub fontSize={'2rem'}/> 
        </a>
        <a href='https://www.linkedin.com/in/rishabh-gokhe-22168b287' target={'blank'}>
           Linkedin <BsLinkedin fontSize={'2rem'}/> 
        </a>
        <a href='https://twitter.com/rishabhgokhe' target={'blank'}>
           X(Twitter)<FaXTwitter fontSize={'2rem'}/> 
        </a>
        <a href='https://instagram.com/rishabh_gokhe' target={'blank'}>
           Instagram <FaInstagram fontSize={'2rem'}/> 
        </a>
    </HStack>
</Stack>
    </Box>
  )
}
