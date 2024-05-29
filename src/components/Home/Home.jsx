import React from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Link,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import './home.scss';
import home_img from '../../assets/images/home_image.png';
import Scroll from './Infinite_scroll';
import YoutubeSvg from '../../assets/svg/youtube_icon.svg';
import IntroVideo from '../../assets/videos/intro_video.mp4';

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text children="Empower Yourself with Knowledge and Skills" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="blue">
                Explore Courses
              </Button>
            </Link>
          </VStack>

          <Image
            boxSize={'sm'}
            src={home_img}
            objectFit={'contain'}
            className="home-image"
          />
        </Stack>
      </div>

      <Box padding={'8'} backgroundColor={'blackAlpha.800'}>
        <Heading
          textAlign={'center'}
          fontFamily={'body'}
          color={'yellow.400'}
          children="TRUSTED BY BRANDS"
        />
      </Box>
      <HStack>
        <Scroll
          item1={YoutubeSvg}
          item2={YoutubeSvg}
          item3={YoutubeSvg}
          item4={YoutubeSvg}
          item5={YoutubeSvg}
          item6={YoutubeSvg}
          item7={YoutubeSvg}
          item8={YoutubeSvg}
        />
      </HStack>

      <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          loop
          src={IntroVideo}
        ></video>
      </div>
    </section>
  );
}
