import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  // Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar.jsx';
import Delete02Icon from '../../../assets/svg/Delete02Icon.jsx';

export default function AdminCourses() {
  const courses = [
    {
      _id: '1',
      poster: {
        url: 'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      courseName: 'React for Beginners',
      category: 'Development',
      creator: 'John Doe',
      views: 1200,
      lectures: 25,
      action: 'edit',
    },
    {
      _id: '2',
      poster: {
        url: 'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      courseName: 'Marketing 101',
      category: 'Business',
      creator: 'Jane Smith',
      views: 800,
      lectures: 20,
      action: 'view',
    },
    {
      _id: '3',
      poster: {
        url: 'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      courseName: 'Advanced Python',
      category: 'Development',
      creator: 'Alice Johnson',
      views: 1500,
      lectures: 30,
      action: 'suspend',
    },
    {
      _id: '4',
      poster: {
        url: 'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      courseName: 'Graphic Design Basics',
      category: 'Design',
      creator: 'Bob Brown',
      views: 500,
      lectures: 10,
      action: 'delete',
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  function updateLectureHandler(id) {
    onOpen();
  }
  function deleteUserHandler(id) {
    console.log(id);
  }

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box overflowX={'auto'}>
        <Heading p={5} textAlign={['center', 'left']}>
          All Courses
        </Heading>

        <TableContainer width={['100vb', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Uploaded Courses</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Course Name</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(course => (
                <TableRow
                  key={course._id}
                  data={course}
                  updateLectureHandler={updateLectureHandler}
                  deleteUserHandler={deleteUserHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModalViewLectures isOpen={isOpen} onClose={onClose} />
      </Box>
      <Sidebar />
    </Grid>
  );
}

//-------------------------------------------------------------------------------------//

function TableRow({ data, updateLectureHandler, deleteUserHandler }) {
  return (
    <Tr>
      <Td>{data._id}</Td>
      <Td>
        <Image src={data.poster.url} borderRadius={'5px'}></Image>
      </Td>
      <Td>{data.courseName}</Td>
      <Td>{data.category}</Td>
      <Td>{data.creator}</Td>
      <Td isNumeric>{data.views}</Td>
      <Td isNumeric>{data.lectures}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={() => updateLectureHandler(data._id)} size={'sm'}>
            View Lectures
          </Button>
          <Button
            onClick={() => deleteUserHandler(data._id)}
            size={'sm'}
            _hover={{ backgroundColor: 'red.200' }}
          >
            <Delete02Icon />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

//-------------------------------------------------------------------------------------//

function CourseModalViewLectures({ isOpen, onClose }) {

  const courseTitle = 'Python Course';
  const id = 2;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns={['1fr', '3fr 1fr']} >
<Box>
  <Box>
    <Heading>{courseTitle}</Heading>
    <Heading size={'sm'} opacity={0.5} >{id}</Heading>
  </Box>

  <Heading>Lectures</Heading>
</Box>


          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

//-------------------------------------------------------------------------------------//

// function VideoCard() {
//   return <Stack>
// <Box>
//   <Heading>

//   </Heading>
// </Box>
//   </Stack>
// }