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
import ShoppingCartCheckIn01Icon from '../../assets/svg/ShoppingCartCheckIn01Icon';
import InformationDiamondIcon from '../../assets/svg/InformationDiamondIcon';

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
        leftIcon={<ShoppingCartCheckIn01Icon />}
          colorScheme="blue"
          size={'sm'}
          onClick={() => handleAddToPlaylist(id)}
        >Add to Cart</Button>
        <Link to={`/course/${id}`}>
          <Button rightIcon={<InformationDiamondIcon />} variant={'ghost'} colorScheme="blue" size={'sm'} >Learn more</Button>
        </Link>
      </Stack>
    </VStack>
  );
}
