import {
  Avatar,
  Button,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCheck } from 'react-icons/bs';
import { PiPasswordFill } from 'react-icons/pi';
import { MdBookmarkRemove } from 'react-icons/md';

export default function Profile() {
  const user = {
    name: 'Rishabh',
    email: 'rishabhgokhe@email.com',
    dateCreated: String(new Date().toISOString()).split('T')[0],
    role: 'user',
    subscription: {
      status: true,
    },
    playlist: [
      {
        course: 'Web Development',
        courseID: 1,
        poster:
          'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      {
        course: 'Web Development',
        courseID: 2,
        poster:
          'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      {
        course: 'Web Development',
        courseID: 3,
        poster:
          'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      {
        course: 'Web Development',
        courseID: 4,
        poster:
          'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
      {
        course: 'Web Development',
        courseID: 5,
        poster:
          'https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg',
      },
    ],
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image) => {

  };

  return (
    <Container minH="85vh" maxW="container.lg">
      <Heading textAlign={['center', 'left']} mt="4">
        Profile
      </Heading>
      <Stack
        justifyContent={['flex-start']}
        direction={['column', 'row']}
        alignItems={'center'}
      >
        <VStack m={['4', '5']}>
          <Avatar boxSize="150px" />
          <Button onClick={onOpen} mt="2" colorScheme="teal" variant="outline">
            Change Photo
          </Button>
        </VStack>

        <VStack ml={['0', '8']} alignItems={['center', 'flex-start']}>
          <Text>
            <b>Name:</b> {user.name}
          </Text>
          <Text>
            <b>Email:</b> {user.email}
          </Text>
          <Text>
            <b>Created On:</b> {user.dateCreated}
          </Text>

          {user.role !== 'admin' && (
            <Text>
              {user.subscription.status === true ? (
                <Stack justifyContent={['flex-start']} direction={'row'}>
                  <Text>
                    <b>Subscription:</b> Pro Plan
                  </Text>
                  <Button
                    colorScheme="teal"
                    variant="ghost"
                    bottom="1"
                    size="sm"
                  >
                    Cancel Subscription
                  </Button>
                </Stack>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="teal" size={'sm'}>
                    Subscribe Now
                  </Button>
                </Link>
              )}
            </Text>
          )}

          <Stack justifyContent={'center'} direction={['column', 'row']}>
            <Link to="/updateprofile">
              <Button leftIcon={<BsPersonCheck />}>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button leftIcon={<PiPasswordFill />}>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading size="md" my="5" textTransform={'uppercase'}>
        Playlist
      </Heading>

      {user.playlist.length > 0 && (
        <Stack
          justifyContent={['flex-start']}
          direction={['column', 'row']}
          flexWrap={'wrap'}
        >
          {user.playlist.map(item => (
            <VStack
              boxShadow={'lg'}
              w="180px"
              mx="2"
              key={item.courseID}
              background={'#BABFD1'}
              borderRadius={'10px'}
            >
              <Image
                mt="1"
                borderRadius={'10px'}
                boxSize={'95%'}
                objectFit={'cover'}
                src={item.poster}
              />
              <Link to={`/course/${item.courseID}`}>
                <Button size={'sm'}>Watch Now</Button>
              </Link>
              <Button
                leftIcon={<MdBookmarkRemove />}
                size={'sm'}
                mb="2"
                onClick={onOpen}
              >
                Remove
              </Button>

              <Popup
                header={'Do you want to remove?'}
                body={
                  'Are you sure you want to remove this course from your playlist?'
                }
                isOpen={isOpen}
                onClose={onClose}
                cancelRef={cancelRef}
                handlerFunction={() => removeFromPlaylistHandler(item.courseID)}
              />
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoPopup isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />
    </Container>
  );
}

//-----------------------------------------------------------------------------------------

function Popup({ header, body, isOpen, onClose, cancelRef, handlerFunction }) {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay
        style={{
          background: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>{header}</AlertDialogHeader>
          <AlertDialogCloseButton></AlertDialogCloseButton>
          <AlertDialogBody>{body}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml="3" onClick={handlerFunction}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export function ChangePhotoPopup({isOpen, onClose}) {

  const [avatar, setAvatar] = useState();

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
  };

function closeHandler() {
  onClose();
  setAvatar('');
}

  function changeImageHandler(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
     reader.onloadend = () => {
        setAvatar(reader.result)
        // setImage(file);
    }
  }

  return (
    <Modal
    isCentered
    isOpen={isOpen} onClose={closeHandler} >
      <ModalOverlay backdropFilter={'blur(2px)'}></ModalOverlay>
      <ModalContent>
        <ModalHeader>Upload Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e, avatar)} >
              <VStack>
                {avatar && <Avatar mb='3' src={avatar} boxSize='150px' />}
                <Input onChange={changeImageHandler} type='file' className='sign-up-upload-avatar'></Input>
                <Button w={'full'} type='submit'>Change</Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='red' onClick={closeHandler} >Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
