import { HStack, Image } from '@chakra-ui/react'
import React from 'react'

import iPhoneScreenshot from '../../assets/images/skillwave-iPhone-Screenshot.PNG'
import MacbookScreenshot from '../../assets/images/skillwave-Macbook-Screenshot.PNG'
import iPadScreenshot from '../../assets/images/skillwave-iPad-Screenshot.PNG'

export default function LandingScreenshot() {
  return (
    <div>
        <HStack spacing={"0"} justifyContent={"center"} alignItems={"center"}>
        <Image src={iPhoneScreenshot} width={"15vw"}/>
        <Image src={iPadScreenshot} width={"25vw"} />
        <Image src={MacbookScreenshot} width={"60vw"} />
        </HStack>
    </div>
  )
}
