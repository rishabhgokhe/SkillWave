import React from 'react';
import {
  Button,
  Box,
  Stack,
  Divider,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// icons import
import StarsIcon from '../../assets/svg/icons/StarsIcon.jsx';
import CircleArrowRight02Icon from '../../assets/svg/icons/CircleArrowRight02Icon.jsx';
import CircleArrowRight01Icon from '../../assets/svg/icons/CircleArrowRight01Icon.jsx'

// animated svg import
import developmentSvg from '../../assets/svg/Animated/development.json';
import bussinessSvg from '../../assets/svg/Animated/businesss.json'
import graphicDesignSvg from '../../assets/svg/Animated/graphicDesign.json'
import musicSvg from '../../assets/svg/Animated/music.json'
import fitnessSvg from '../../assets/svg/Animated/fitness.json'
import Lottie from 'lottie-react';

export default function ExploreCoursesHome() {
  return (
    <Box>
      <Button
        variant={'none'}
        _hover={{ cursor: 'default' }}
        leftIcon={<StarsIcon />}
        color={'#FC775C'}
        size={'lg'}
      >
        <b>Course Details</b>
      </Button>

      <Stack direction={['column', 'row']} m={4} mt={0}>
        <Box minW={'200px'} padding={4}>
          <VStack>
            <Heading>
              Explore our <span style={{ color: '#FFC759' }}>Categories</span>
            </Heading>
            <Text opacity={0.5}>
              We understand that everyone’s learning journey is unique. That's
              why we offer a diverse range of categories to cater to all
              interests and skill levels. Whether you're looking to enhance your
              professional skills, explore creative arts, dive into the world of
              technology, or pursue personal development .All in one place.
              Start exploring today and unlock your full potential with
              SkillWave!
            </Text>
            <Divider />
            <Link to={'/courses'}>
              <Button
                borderRadius={15}
                color={'#FC775C'}
                rightIcon={<CircleArrowRight02Icon />}
              >
                All Categories
              </Button>
            </Link>
          </VStack>
        </Box>

        <CategoryBox link={'development'} animatedSvg={developmentSvg} title={'Development'} description={"Learn Industry leading skills in development such as Web dev, iOS dev etc"} />
        <CategoryBox link={'bussiness'} animatedSvg={bussinessSvg} title={'Bussiness'} description={'Enterpreneurship, Communication, Managment, Sales, Business Strategy etc'} />
        <CategoryBox link={'design'} animatedSvg={graphicDesignSvg} title={'Design'} description={'Web Design, Graphic Design & Illustrations, Design Tools, UI/UX, Game Design, 3D & Animations'} />
        <CategoryBox link={'fitness'} animatedSvg={fitnessSvg} title={'Fitness'} description={'Fitness, General Health, Sports, Nutrition & Diet, Yoga, Mental Health'} />
        <CategoryBox link={'music'} animatedSvg={musicSvg} title={'Music'} description={'Instruments, Music Production, Music Fundamental, Vocals, Music Technique, Music Software'} />
      </Stack>
    </Box>
  );
}

function CategoryBox({animatedSvg, title, description, link}) {
  return (
    <Box position={'relative'} bg={'rgba(242,222,186,0.6)'} minW={'200px'} borderRadius={10} p={4} boxShadow={'lg'} _hover={{bg: 'rgba(242,222,186)'}} transition={'all 0.3s ease'}>
      <VStack >
        <div style={{ width: 180, height: 180 }}>
          <Lottie animationData={animatedSvg} />
        </div>
        <Heading size={'xs'}>{title}</Heading>
        <Text>{description}</Text>
        <Link to={`/courses/:${link}`} ><Button _hover={'none'} position={'absolute'} bottom={3} right={3} bg={'transparent'} ><CircleArrowRight01Icon /></Button></Link> 
      </VStack>
    </Box>
  );
}

// {/*rgb(232,232,232) */}