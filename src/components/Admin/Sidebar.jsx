import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Analytics02Icon from '../../assets/svg/Analytics02Icon';
import UserMultiple02Icon from '../../assets/svg/UserMultiple02Icon';
import AddCircleHalfDotIcon from '../../assets/svg/AddCircleHalfDotIcon';
import CourseIcon from '../../assets/svg/CourseIcon';
import MoneyBag02Icon from '../../assets/svg/MoneyBag02Icon';
import UserSquareIcon from '../../assets/svg/UserSquareIcon';
import Settings04Icon from '../../assets/svg/Settings04Icon';

export default function Sidebar() {
  const location = useLocation();
  return (
    <VStack
      bg={'black'}
      borderRadius={'10px'}
      p={'4'}
      m={'4'}
      spacing={'5'}
      alignItems={'flex-start'}
    >
      <LinkButton
        text={'Dashboard'}
        url={'dashboard'}
        icon={<Analytics02Icon />}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        text={'Users'}
        url={'users'}
        icon={<UserMultiple02Icon />}
        active={location.pathname === '/admin/users'}
      />
      <LinkButton
        text={'Courses'}
        url={'courses'}
        icon={<CourseIcon />}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        text={'Earnings'}
        url={'earnings'}
        icon={<MoneyBag02Icon />}
        active={location.pathname === '/admin/earnings'}
      />
      <LinkButton
        text={'Manage Profile'}
        url={'profile'}
        icon={<UserSquareIcon />}
        active={location.pathname === '/admin/profile'}
      />
      <LinkButton
        text={'Controls'}
        url={'controls'}
        icon={<Settings04Icon />}
        active={location.pathname === '/admin/controls'}
      />
      <LinkButton
        text={'Create Course'}
        url={'createcourse'}
        icon={<AddCircleHalfDotIcon />}
        active={location.pathname === '/admin/createcourse'}
      />
    </VStack>
  );
}

function LinkButton({ text, url, icon, active }) {
  return (
    <Link to={`/admin/${url}`} style={{ width: '100%' }}>
      <Button w={'100%'} leftIcon={icon} colorScheme={active ? 'teal' : null}>
        {text}
      </Button>
    </Link>
  );
}
