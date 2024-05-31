import {
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
export default function CourseCard({
  title,
  description,
  id,
  imageSRC,
  views,
  creator,
  lectureCount,
  handleAddToPlaylist,
}) {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image
        src={imageSRC}
        boxSize={'60'}
        objectFit={'fill'}
        alt={`${title} Course Image`}
        borderRadius={'10px'}
      ></Image>
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        noOfLines={3}
        size={'md'}
      >
        {title}
      </Heading>
      <Text noOfLines={2}>{description}</Text>
      <HStack>
        <Text fontWeight={'bold'}>{'Creator:'}</Text>
        <Text fontFamily={'body'} textTransform={'capitalize'}>
          {creator}
        </Text>
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
      >{`Lectures: ${lectureCount}`}</Heading>
      <Heading textAlign={'center'} size={'xs'}>{`Views: ${views}`}</Heading>
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Button
          colorScheme="blue"
          size={'sm'}
          onClick={() => handleAddToPlaylist(id)}
          children='Add to Cart'
        />
        <Link to={`/course/${id}`}>
          <Button variant={'ghost'} colorScheme="blue" size={'sm'} children='Learn more' />
        </Link>
      </Stack>
    </VStack>
  );
}
