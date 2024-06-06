import React from 'react';
// import ColorModeSwitcher from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
//----------------icon import ---------------------//
import Home01Icon from '../../../assets/svg/Home01Icon.jsx';
import CourseIcon from '../../../assets/svg/CourseIcon.jsx';
import AudioBook01Icon from '../../../assets/svg/AudioBook01Icon.jsx';
import Award05Icon from '../../../assets/svg/Award05Icon.jsx';
import NoteEditIcon from '../../../assets/svg/NoteEditIcon.jsx';
import Notification03Icon from '../../../assets/svg/Notification03Icon.jsx';
import InformationCircleIcon from '../../../assets/svg/InformationCircleIcon.jsx';
import MailUpload01Icon from '../../../assets/svg/MailUpload01Icon.jsx';
import Settings02Icon from '../../../assets/svg/Settings02Icon.jsx';
import UserSquareIcon from '../../../assets/svg/UserSquareIcon.jsx';
import Analytics02Icon from '../../../assets/svg/Analytics02Icon.jsx';
import LoginSquare01Icon from '../../../assets/svg/LoginSquare01Icon.jsx';
import SidebarLeftIcon from '../../../assets/svg/SidebarLeftIcon.jsx';
import UserIdVerificationIcon from '../../../assets/svg/UserIdVerificationIcon.jsx';

export default function Header() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };

  function handleLogout() {
    console.log('Logged out');
    onClose();
  }

  return (
    <>
      <HStack className="nav-bar">
        {/* <ColorModeSwitcher /> */}
        <Button
          padding={'0'}
          margin={'0'}
          onClick={onOpen}
          colorScheme="brand"
          width={'12'}
          height={'12'}
          rounded={'15'}
          _hover={{ background: 'blackAlpha.300' }}
        >
          <SidebarLeftIcon />
        </Button>
        <Heading size={'lg'}>SkillWave</Heading>

        {isDesktop && (
          <>
            <HStack ml={'550'}>
              {isAuthenticated ? (
                <>
                  <Link onClick={onClose} to={'/profile'}>
                    <Button
                      _hover={{ backgroundColor: 'blackAlpha.300' }}
                      leftIcon={<UserSquareIcon />}
                      variant={'ghost'}
                    >
                      Profile
                    </Button>
                  </Link>
                  {user && user.role === 'admin' && (
                    <Link onClick={onClose} to="/admin/dashboard">
                      <Button
                        _hover={{ backgroundColor: 'blackAlpha.300' }}
                        leftIcon={<Analytics02Icon />}
                        variant={'ghost'}
                      >
                        Dashboard
                      </Button>
                    </Link>
                  )}
                </>
              ) : null}
              <Link onClick={onClose} to={'/notifications'}>
                <Button
                  _hover={{ backgroundColor: 'blackAlpha.300' }}
                  leftIcon={<Notification03Icon />}
                  variant={'ghost'}
                >
                  Notifications
                </Button>
              </Link>
              {isAuthenticated ? (
                <>
                  <Button
                    leftIcon={<LoginSquare01Icon />}
                    bg={'transparent'}
                    _hover={{ backgroundColor: 'blackAlpha.300' }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link onClick={onClose} to={'/login'}>
                    {' '}
                    <Button
                    leftIcon={<LoginSquare01Icon />}
                      bg={'transparent'}
                      _hover={{ backgroundColor: 'blackAlpha.300' }}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link onClick={onClose} to={'/register'}>
                    {' '}
                    <Button
                    leftIcon={<UserIdVerificationIcon />}
                      bg={'transparent'}
                      _hover={{ backgroundColor: 'blackAlpha.300' }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </HStack>
          </>
        )}
      </HStack>

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
            <VStack
              overflowY={'scroll'}
              spacing={'2'}
              alignItems={'flex-start'}
              height={'85%'}
            >
              <Link onClick={onClose} to={'/'}>
                <Button leftIcon={<Home01Icon />} variant={'ghost'}>
                  Home
                </Button>
              </Link>

              {isAuthenticated ? (
                <>
                  <Link onClick={onClose} to={'/profile'}>
                    <Button leftIcon={<UserSquareIcon />} variant={'ghost'}>
                      Profile
                    </Button>
                  </Link>
                  {user && user.role === 'admin' && (
                    <Link onClick={onClose} to="/admin/dashboard">
                      <Button leftIcon={<Analytics02Icon />} variant={'ghost'}>
                        Dashboard
                      </Button>
                    </Link>
                  )}
                </>
              ) : null}
              <Link onClick={onClose} to={'/courses'}>
                <Button leftIcon={<CourseIcon />} variant={'ghost'}>
                  Explore Courses
                </Button>
              </Link>
              <Link onClick={onClose} to={'/mycourses'}>
                <Button leftIcon={<AudioBook01Icon />} variant={'ghost'}>
                  My Courses
                </Button>
              </Link>
              <Link onClick={onClose} to={'/subscribe'}>
                <Button leftIcon={<Award05Icon />} variant={'ghost'}>
                  Subscription Plan
                </Button>
              </Link>
              <Link onClick={onClose} to={'/notes'}>
                <Button leftIcon={<NoteEditIcon />} variant={'ghost'}>
                  View Notes
                </Button>
              </Link>
              <Link onClick={onClose} to={'/notifications'}>
                <Button leftIcon={<Notification03Icon />} variant={'ghost'}>
                  Notifications
                </Button>
              </Link>
              <Link onClick={onClose} to={'/about'}>
                <Button leftIcon={<InformationCircleIcon />} variant={'ghost'}>
                  About Us
                </Button>
              </Link>
              <Link onClick={onClose} to={'/contact'}>
                <Button leftIcon={<MailUpload01Icon />} variant={'ghost'}>
                  Contact Us
                </Button>
              </Link>
              <Link onClick={onClose} to={'/settings'}>
                <Button leftIcon={<Settings02Icon />} variant={'ghost'}>
                  Settings
                </Button>
              </Link>
            </VStack>

            <HStack
              bg={'white'}
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <Button
                    leftIcon={<LoginSquare01Icon />}
                    variant={'outline'}
                    width={'full'}
                    colorScheme="teal"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
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
        <DrawerFooter></DrawerFooter>
      </Drawer>
    </>
  );
}
