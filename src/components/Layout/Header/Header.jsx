import React from 'react';
// import ColorModeSwitcher from '../../../ColorModeSwitcher';
import {
  Box,
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
import { css, keyframes } from '@emotion/react';

// icon import
import Home01Icon from '../../../assets/svg/icons/Home01Icon.jsx';
import CourseIcon from '../../../assets/svg/icons/CourseIcon.jsx';
import AudioBook01Icon from '../../../assets/svg/icons/AudioBook01Icon.jsx';
import Award05Icon from '../../../assets/svg/icons/Award05Icon.jsx';
import NoteEditIcon from '../../../assets/svg/icons/NoteEditIcon.jsx';
import Notification03Icon from '../../../assets/svg/icons/Notification03Icon.jsx';
import InformationCircleIcon from '../../../assets/svg/icons/InformationCircleIcon.jsx';
import MailUpload01Icon from '../../../assets/svg/icons/MailUpload01Icon.jsx';
import Settings02Icon from '../../../assets/svg/icons/Settings02Icon.jsx';
import UserSquareIcon from '../../../assets/svg/icons/UserSquareIcon.jsx';
import Analytics02Icon from '../../../assets/svg/icons/Analytics02Icon.jsx';
import LoginSquare01Icon from '../../../assets/svg/icons/LoginSquare01Icon.jsx';
import SidebarLeftIcon from '../../../assets/svg/icons/SidebarLeftIcon.jsx';
import UserIdVerificationIcon from '../../../assets/svg/icons/UserIdVerificationIcon.jsx';
import AccountSetting03Icon from '../../../assets/svg/icons/AccountSetting03Icon.jsx';

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

  const movingBackground = keyframes`
  0% {
    background-position: 0% 20%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

  return (
    <>
    <Box backgroundColor={"#F6FB7A"} textAlign={"center"} fontWeight={"bold"} p={2}>
      <p>SkillWave is under development.. View <Link to={"/releasenotes"}><span style={{color: "#EF5A6F", textDecoration: "underline"}}>Release Notes</span></Link> for new release, feature or bug fixes</p>
    </Box>
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
          _hover={{ backgroundColor: 'blackAlpha.300' }}
        >
          <SidebarLeftIcon />
        </Button>
        <Link to={'/'}>
          <Heading size={'lg'}>SkillWave</Heading>
        </Link>

        {isDesktop && (
          <>
            <HStack justifyContent={'flex-end'}>
              {/* if isAuthenticated true then it will display profile and dashboard */}
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

              {/* Notification is always displayed in the header weather isAuthenticated is true or false */}
              <Link onClick={onClose} to={'/notifications'}>
                <Button
                  _hover={{ backgroundColor: 'blackAlpha.300' }}
                  leftIcon={<Notification03Icon />}
                  variant={'ghost'}
                >
                  Notifications
                </Button>
              </Link>
              {/* if isAuthenticated true then it will display Logout otherwise login and signup */}
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

        <Link to={'https://portfolio-rishabhgokhe.vercel.app/'}>
          <Button
          size={'sm'}
            leftIcon={<AccountSetting03Icon />}
            position={'absolute'}
            top={'4'}
            right={'3'}
            variant={'outline'}
            css={css`
              background-image: linear-gradient(45deg, #ffafbd, #ffc3a0);
              color: white;
              animation: ${movingBackground} 2s linear infinite;
              &:hover {
                background: blackAlpha.300;
              }
                color: black;
            `}
            borderRadius={'20'}
          >
            My Portfolio
          </Button>
        </Link>
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
