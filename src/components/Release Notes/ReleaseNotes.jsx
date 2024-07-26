import { Box, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react';
import React from 'react';
import { ReleaseNotesData } from '../../utils/Data';

export default function ReleaseNotes() {
  return (
    <>
      <Heading textAlign="center" mb={8}>
        Release Notes
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} margin={4} spacing={4}>
        {ReleaseNotesData.map((item, id) => (
          <Box
            key={id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
          >
            <Heading textAlign={'center'} size="md" mb={2}>
              Version {item.version}
            </Heading>
            <Text textAlign={'center'} fontSize="sm" color="gray.500" mb={2}>
              {item.date}
            </Text>
            <Divider mb={2} />
            <Box
              as="ul"
              style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: '6',
                WebkitBoxOrient: 'vertical',
                listStyle: "disc",
                listStyleType: "inherit"
                
              }}
            >
              {item.notes.map((note, index) => (
                <Box as="li" key={index}>
                 <span style={{fontWeight: "bolder"}}>-</span> {note}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
