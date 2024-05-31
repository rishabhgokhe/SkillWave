import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CourseCard from './CourseCard';

export default function Courses() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = ['Development', 'Business', 'Software', 'Marketing'];
  function addToPlaylist() {
    console.log("Added item to Playlist");
  }

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading m={'8'}>All Courses</Heading>
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search Courses..."
        type="text"
      ></Input>

      <HStack overflowX={'auto'} paddingY={'5'}>
        {categories.map((category, index) => {
          return (
            <Button
              key={index}
              onClick={() => setCategory(category)}
              minW={'60'}
            >
              {category}
            </Button>
          );
        })}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <CourseCard
          title={'Web Development'}
          description={'Welcome to the Ultimate Web Development Course'}
          views={67}
          creator={'Rishabh Gokhe'}
          imageSRC={'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg'}
          id={1}
          lectureCount={10}
          handleAddToPlaylist={addToPlaylist}
        />
      </Stack>
    </Container>
  );
}
