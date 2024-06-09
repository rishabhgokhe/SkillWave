import { Box, HStack, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

// icon import
import { FaInstagram } from 'react-icons/fa6';
import NewTwitterRectangleIcon from '../../../assets/svg/icons/NewTwitterRectangleIcon';
import Linkedin01Icon from '../../../assets/svg/icons/Linkedin01Icon';
import GithubIcon from '../../../assets/svg/icons/GithubIcon';
import MailAdd02Icon from '../../../assets/svg/icons/MailAdd02Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  //  const mailtoLink = () => {
  //    const href = `mailto:rishabhgokhe2004@gmail.com`;
  //    return <Link href={href}>Open Mail</Link>;
  //  };

  return (
    <Box padding={'5'} pb={'0'} bg="black" minH={'10vh'}>
      <VStack>
        <HStack spacing={['4', '10']} justifyContent={'center'} color={'white'}>
          <a href="https://github.com/rishabhgokhe" target={'blank'}>
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rishabh-gokhe-22168b287"
            target={'blank'}
          >
            <Linkedin01Icon />
          </a>
          <a href="https://twitter.com/rishabhgokhe" target={'blank'}>
            <NewTwitterRectangleIcon />
          </a>
          <a href="https://instagram.com/rishabh_gokhe" target={'blank'}>
            <FaInstagram fontSize={'2rem'} />
          </a>
          <a href={`mailto:rishabhgokhe@gmail.com`} target={'blank'}>
            <MailAdd02Icon />
          </a>{' '}
        </HStack>
        <Heading
          children={`Copyright © ${currentYear} By Rishabh`}
          color={'yellow'}
          size={'sm'}
        />
        <HStack>
          <Link to={'/contact'}>
            <Button size={'xs'} >Feedback</Button>
          </Link>
          <Link to={'/subscribenewsletter'}>
            <Button size={'xs'}>Subscribe to Newsletter</Button>
          </Link>
        </HStack>
      </VStack>
      <Heading
        mb="0"
        pb={'0'}
        className="footer-text"
        textAlign={'center'}
        color={'yellow'}
        fontSize={['75px', '200px']}
      >
        SkillWave
      </Heading>
    </Box>
  );
}
