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
import { LuMenuSquare } from 'react-icons/lu';
import { IoLogOut } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: "admin"
  }

  function handleLogout() {
    console.log("Logged out");
  }

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'15'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <LuMenuSquare />
      </Button>

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
            <VStack spacing={'2'} alignItems={'flex-start'}  >
              <Link to={'/'}>
                <Button variant={'ghost'}>Home</Button>
              </Link>
              <Link to={'/courses'}>
                <Button variant={'ghost'}>Explore Courses</Button>
              </Link>
              <Link to={'/mycourses'}>
                <Button variant={'ghost'}>My Courses</Button>
              </Link>
              <Link to={'/notifications'}>
                <Button variant={'ghost'}>Notifications</Button>
              </Link>
              <Link to={'/about'}>
                <Button variant={'ghost'}>About Us</Button>
              </Link>
              <Link to={'/contact'}>
                <Button variant={'ghost'}>Contact Us</Button>
              </Link>
              <Link to={'/settings'}>
                <Button variant={'ghost'}>Settings</Button>
              </Link>
            </VStack>

            <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'}>
              {isAuthenticated? (<>
              <VStack>
                <HStack>
                <Link to={'/profile'} > <Button colorScheme='yellow' >Profile</Button></Link>
                <Button variant={'ghost'} onClick={handleLogout}><IoLogOut/> Logout</Button>

                </HStack>
{user && user.role === "admin" && <Link to='/admin/dashboard'>
  <Button variant={'ghost'} colorScheme='teal'> <MdSpaceDashboard style={{margin: '3px'}}/> Dashboard</Button>
</Link> }


              </VStack>
              
              </>) : (<>
              <Link to={'/login'} > <Button colorScheme='blue' >Login</Button></Link>
              <p>OR</p>
              <Link to={'/register'} > <Button colorScheme='blue' >Sign Up</Button></Link>
              </>)}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
