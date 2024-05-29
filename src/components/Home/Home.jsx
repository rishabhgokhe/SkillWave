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
import home_img from '../../assets/images/home_image.JPG';
import Scroll from './Infinite_scroll';
import GoogleSvg from "../../assets/svg/google_icon.svg"
import YoutubeSvg from "../../assets/svg/youtube_icon.svg"
 
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

          <Image boxSize={'sm'} src={home_img} objectFit={'contain'} />
        </Stack>
      </div>

      <Box>
        <Heading
          textAlign={'center'}
          fontFamily={'body'}
          color={'yellow.400'}
          children="OUR BRANDS"
        />
      </Box>
      <HStack >
      <Scroll item1={GoogleSvg} item2={YoutubeSvg} item3={GoogleSvg} item4={GoogleSvg} item5={GoogleSvg} item6={GoogleSvg} item7={GoogleSvg} item8={GoogleSvg} />
      </HStack>
    </section>
  );
}
