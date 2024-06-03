import {
  Grid,
  Box,
  HStack,
  Button,
  Text,
  Divider,
  VStack,
  Heading,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import video from '../../assets/videos/intro_video.mp4';
import lectureData from '../../assets/docs/LectureData.js';

export default function CoursePage() {
  const [selectedlectureID, setSelectedlectureID] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState();

  const TabButton = ({ title, name }) => {
    return (
      <Button
        cursor="pointer"
        _hover="disable"
        bg={selectedTopic === title ? '#BABFD1' : null}
        onClick={() => handleTabButtonClick(title)}
        textTransform={'capitalize'}
      >
        {name ? name : title}
      </Button>
    );
  };

  function handleTabButtonClick(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

  let tabContent = selectedTopic
    ? lectureData[selectedlectureID][selectedTopic]
    : 'Have a great learning experience';

  return (
    <Grid minH="90vh" templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          style={{ marginTop: '6px', overflowX: 'scroll' }}
          controlsList="nodownload"
          playsInline
          src={video}
        ></video>
        <Heading p="4" pb="0" size={'md'}>
          Lecture {selectedlectureID + 1}:{' '}
          {lectureData[selectedlectureID].title}
        </Heading>
        <HStack
          margin="5"
          mb="2"
          gap={['8px', '20px']}
          wrap={['wrap', 'unset']}
        >
          <TabButton title={'overview'} />
          <TabButton title={'q_and_a'} name='Q & A' />
          <TabButton title={'notes'} />
          <TabButton title={'announcement'} />
          <TabButton title={'review'} />
        </HStack>
        <Divider borderWidth="2px" />
        <Box p="4">
          <Text>{tabContent}</Text>
        </Box>
        <Divider borderWidth="2px" />
      </Box>

      <VStack
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        width={'100%'}
        overflowY={'scroll'}
      >
        {lectureData.map((item, index) => (
          <>
            <Button
              key={index}
              onClick={() => setSelectedlectureID(index)}
              noOfLines={'1'}
              variant="ghost"
            >
              Section {index + 1}: {item.title}
            </Button>
            <Divider />
          </>
        ))}
      </VStack>
    </Grid>
  );
}
