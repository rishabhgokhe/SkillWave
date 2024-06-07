import React from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.scss';
import Scroll from '../ui/Infinite_scroll';
import FigmaSvg from '../../assets/svg/figma_icon.svg';
import AmazonSvg from '../../assets/svg/amazon_icon.svg';
import InstagramSvg from '../../assets/svg/instagram_icon.svg';
import FoodpandaSvg from '../../assets/svg/foodpanda_icon.svg';
import WalmartSvg from '../../assets/svg/walmart_icon.svg';
import GiphySvg from '../../assets/svg/giphy_icon.svg';
import InstaCartSvg from '../../assets/svg/instacart_icon.svg';
import BinanceSvg from '../../assets/svg/binance_icon.svg';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FlipWords } from '../ui/flip_text.jsx';
import SearchVisualIcon from '../../assets/svg/SearchVisualIcon.jsx';
import CircleArrowUpRight02Icon from '../../assets/svg/CircleArrowUpRight02Icon.jsx';
import developmentSvg from '../../assets/svg/Animated/development.json';
import StarsIcon from '../../assets/svg/StarsIcon.jsx';
import CircleArrowRight02Icon from '../../assets/svg/CircleArrowRight02Icon.jsx';
import Lottie from 'lottie-react';
import WithSpeechBubbles from '../ui/Testimonial.jsx';
import SimpleThreeColumns from '../ui/features.jsx';

export default function Home() {
  return (
    <>
      <Box p={'10'}>
        <VStack width={'full'} alignItems={'center'}>
          <Stack direction={['column', 'row']}>
            <Heading
              className="block"
              textAlign={['center', 'left']}
              size={'4xl'}
              fontWeight={'bold'}
            >
              Learning made
            </Heading>
            <Heading
              ml={3}
              className="block"
              textAlign={['center', 'left']}
              size={'4xl'}
              fontWeight={'bold'}
            >
              <FlipWords
                words={[
                  'Easy!',
                  'Accessible...',
                  'Fun!',
                  'Affordable!',
                  'Engaging...',
                  'Seamless!',
                  'Convenient...',
                  'Interactive!',
                  'Rewarding!',
                  'Innovative...',
                  'Efficient!',
                ]}
                className={'flip-text block'}
              />
            </Heading>
          </Stack>
          <Text
            textAlign={['center', 'left']}
            children="Empower Yourself with Knowledge and Skills"
            fontSize={'1.2rem'}
          />

          <Stack spacing={4} direction={['column', 'row']}>
            <Link to="/courses">
              <Button
                rightIcon={<SearchVisualIcon />}
                className="block"
                size={'lg'}
                colorScheme="blue"
              >
                Browse Courses
              </Button>
            </Link>
            <Link to="/subscribe">
              <Button
                rightIcon={<CircleArrowUpRight02Icon />}
                className="block"
                size={'lg'}
              >
                Join Now
              </Button>
            </Link>
          </Stack>
        </VStack>
        {/* <Image 
            boxSize={'sm'}
            src={home_img}
            objectFit={'contain'}
            className="home-image"
          />
        </Stack> */}
      </Box>

{/* -------------------------------------------------------------------------------------- */}

      <Box>
        <Button variant={'none'} _hover={{cursor: 'default'}} leftIcon={<StarsIcon />} color={'#FC775C'} size={'lg'}><b>Course Details</b></Button>

        <Stack direction={['column', 'row']} m={4} mt={0}>
          <Box minW={'200px'} padding={4}>
            <VStack>
              <Heading>Explore our <span style={{color: '#FFC759'}} >Categories</span></Heading>
              <Text opacity={0.5} >We understand that everyone’s learning journey is unique. That's why we offer a diverse range of categories to cater to all interests and skill levels. Whether you're looking to enhance your professional skills, explore creative arts, dive into the world of technology, or pursue personal development .All in one place. Start exploring today and unlock your full potential with SkillWave!</Text>
              <Divider />
              <Link to={'/courses'} ><Button borderRadius={15} color={'#FC775C'} rightIcon={<CircleArrowRight02Icon />} >All Categories</Button></Link>
            </VStack>
          </Box>
          <Box bg={'#e9e8ed'} minW={'200px'} borderRadius={10} p={4} boxShadow={'lg'} >
            <VStack>
              <div style={{width: 180}}>
                <Lottie animationData={developmentSvg} />
              </div>
              <Heading size={'xs'}>Development</Heading>
              <Text >Learn Industry leading skills in development such as Web dev, iOS dev etc</Text>
            </VStack>
          </Box>
        </Stack>
      </Box>

      <SimpleThreeColumns />
      <WithSpeechBubbles />

      <Box padding={'5'} backgroundColor={'#E8E9ED'}>
        <Heading
          className="block"
          textAlign={'center'}
          fontFamily={'body'}
          color={'green.400'}
        >
          Trusted by Brands
        </Heading>
      </Box>
      <HStack className="block">
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
          <Heading className="block">About Us</Heading>
          <Text
            className="block"
            maxW={['80%', '65%']}
            textAlign={['left', 'center']}
          >
            At SkillWave, we believe in the power of education to transform
            lives and empower individuals to achieve their fullest potential.
            Our mission is to make high-quality education accessible to
            everyone, everywhere.
          </Text>
          <Link to="/about">
            <Button
              className="block"
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
    </>
  );
}
