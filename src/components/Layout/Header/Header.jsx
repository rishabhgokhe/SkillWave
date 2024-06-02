import React from 'react';
import ColorModeSwitcher from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { TiThMenu } from 'react-icons/ti';
import { IoLogOut } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };

  function handleLogout() {
    console.log('Logged out');
    onClose();
  }

  return (
    <>
      <div className="nav-bar">
        <ColorModeSwitcher />
        <Button
          padding={'0'}
          margin={'0'}
          onClick={onOpen}
          colorScheme="brand"
          variant={'outline'}
          width={'12'}
          height={'12'}
          rounded={'15'}
          // position={'fixed'}
          // top={'6'}
          // left={'6'}
        >
          <TiThMenu />
        </Button>
      </div>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={'2px'}
            borderBottomStyle={'dashed'}
            fontSize={'2rem'}
            paddingBottom={'0'}
          >
            SkillWave
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'2'} alignItems={'flex-start'}>
              <Link onClick={onClose} to={'/'}>
                <Button variant={'ghost'}>Home</Button>
              </Link>
              <Link onClick={onClose} to={'/courses'}>
                <Button variant={'ghost'}>Explore Courses</Button>
              </Link>
              <Link onClick={onClose} to={'/mycourses'}>
                <Button variant={'ghost'}>My Courses</Button>
              </Link>
              <Link onClick={onClose} to={'/subscribe'}>
                <Button variant={'ghost'}>Subscription Plan</Button>
              </Link>
              <Link onClick={onClose} to={'/notes'}>
                <Button variant={'ghost'}>View Notes</Button>
              </Link>
              <Link onClick={onClose} to={'/notifications'}>
                <Button variant={'ghost'}>Notifications</Button>
              </Link>
              <Link onClick={onClose} to={'/about'}>
                <Button variant={'ghost'}>About Us</Button>
              </Link>
              <Link onClick={onClose} to={'/contact'}>
                <Button variant={'ghost'}>Contact Us</Button>
              </Link>
              <Link onClick={onClose} to={'/settings'}>
                <Button variant={'ghost'}>Settings</Button>
              </Link>
            </VStack>

            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link onClick={onClose} to={'/profile'}>
                        {' '}
                        <Button colorScheme="yellow">Profile</Button>
                      </Link>
                      <Button variant={'ghost'} onClick={handleLogout}>
                        <IoLogOut /> Logout
                      </Button>
                    </HStack>
                    {user && user.role === 'admin' && (
                      <Link onClick={onClose} to="/admin/dashboard">
                        <Button variant={'ghost'} colorScheme="teal">
                          {' '}
                          <MdSpaceDashboard style={{ margin: '3px' }} />{' '}
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link onClick={onClose} to={'/login'}>
                    {' '}
                    <Button colorScheme="blue">Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link onClick={onClose} to={'/register'}>
                    {' '}
                    <Button colorScheme="blue">Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
