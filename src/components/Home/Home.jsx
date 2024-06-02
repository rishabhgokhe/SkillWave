import React from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.scss';
import home_img from '../../assets/images/home_image.png';
import Scroll from '../ui/Infinite_scroll';
import FigmaSvg from '../../assets/svg/figma_icon.svg';
import AmazonSvg from '../../assets/svg/amazon_icon.svg';
import InstagramSvg from '../../assets/svg/instagram_icon.svg';
import FoodpandaSvg from '../../assets/svg/foodpanda_icon.svg';
// import SpotifySvg from '../../assets/svg/extras/spotify_icon.svg';
// import SwiggySvg from '../../assets/svg/extras/swiggy_icon.svg';
import WalmartSvg from '../../assets/svg/walmart_icon.svg';
import GiphySvg from '../../assets/svg/giphy_icon.svg';
import InstaCartSvg from '../../assets/svg/instacart_icon.svg';
import BinanceSvg from '../../assets/svg/binance_icon.svg';



import IntroVideo from '../../assets/videos/intro_video.mp4';
import { FlipWords } from '../ui/flip_text.jsx';
 
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
            <Heading textAlign={['center', 'left']} size={'2xl'}>LEARN FROM THE EXPERTS<FlipWords words={['Development', 'Business', 'Finance', 'Software', 'Design', 'Marketing', 'Fitness', 'Music']} className={'flip-text'} /></Heading>
            <Text textAlign={['center', 'left']} children="Empower Yourself with Knowledge and Skills" fontSize={'1.2rem'}/>
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
        >Trusted by Brands</Heading>
      </Box>
      <HStack>
        <Scroll
          item1={FigmaSvg}
          item2={BinanceSvg}
          item3={AmazonSvg}
          item4={InstagramSvg}
          item5={FoodpandaSvg}
          item6={WalmartSvg}
          item7={InstaCartSvg}
          item8={GiphySvg}
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
