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
import { BsPersonLinesFill } from 'react-icons/bs';
// import IntroVideo from '../../assets/videos/intro_video.mp4';
import { FlipWords } from '../ui/flip_text.jsx';
import SearchVisualIcon from '../../assets/svg/SearchVisualIcon.jsx'

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
            <Heading className='block' textAlign={['center', 'left']} size={'2xl'}>
              LEARN FROM THE EXPERTS
              <FlipWords
                words={[
                  'Development',
                  'Business',
                  'Finance',
                  'Software',
                  'Design',
                  'Marketing',
                  'Fitness',
                  'Music',
                ]}
                className={'flip-text block'}
              />
            </Heading>
            <Text
              textAlign={['center', 'left']}
              children="Empower Yourself with Knowledge and Skills"
              fontSize={'1.2rem'}
            />
            <Link to="/courses">
              <Button rightIcon={<SearchVisualIcon />} className='block' size={'lg'} colorScheme="blue">
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
        <Heading className='block' textAlign={'center'} fontFamily={'body'} color={'yellow.400'}>
          Trusted by Brands
        </Heading>
      </Box>
      <HStack
      className='block'>
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

      {/* <div className="container2">
        <video
        className='block'
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          loop
          playsInline
          src={IntroVideo}
        ></video>
      </div> */}

      <Box>
        <VStack>
          <Heading className='block'>About Us</Heading>
          <Text className='block' maxW={['80%', '65%']} textAlign={['left', 'center']}>
            At SkillWave, we believe in the power of education to transform
            lives and empower individuals to achieve their fullest potential.
            Our mission is to make high-quality education accessible to
            everyone, everywhere.
          </Text>
          <Link to="/about">
            <Button
            className='block'
              leftIcon={<BsPersonLinesFill />}
              mb="4"
              variant={'outline'}
              colorScheme="teal"
            >
              Know More..
            </Button>
          </Link>{' '}
        </VStack>
      </Box>
    </section>
  );
}
