import { Image, Stack } from '@chakra-ui/react';
import React from 'react';

// import iPhoneScreenshot from '../../assets/images/skillwave-iPhone-Screenshot.PNG';
// import MacbookScreenshot from '../../assets/images/skillwave-Macbook-Screenshot.PNG';
// import iPadScreenshot from '../../assets/images/skillwave-iPad-Screenshot.PNG';
import deviceScreenshot from '../../assets/images/device-screenshot.jpg';

export default function LandingScreenshot() {
  return (
    <div>
      <Stack
        direction={['column', 'row']}
        spacing={'0'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {/* <Stack
          direction={'row'}
          spacing={[10, 0]}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={iPhoneScreenshot} width={['25vw', '15vw']} />
          <Image src={iPadScreenshot} width={['40vw', '25vw']} />
        </Stack>
        <Image src={MacbookScreenshot} width={['90vw', '60vw']} /> */}
        <Image src={deviceScreenshot} width={"110vh"} />
      </Stack>
    </div>
  );
}
