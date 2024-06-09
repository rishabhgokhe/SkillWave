import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar.jsx';

//icon import
import Delete02Icon from '../../../assets/svg/icons/Delete02Icon.jsx';

export default function Users() {
  const users = [
    {
      _id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      subscription: {
        status: 'active',
      },
      role: 'admin',
      action: 'edit',
    },
    {
      _id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      subscription: {
        status: 'active',
      },
      role: 'user',
      action: 'view',
    },
    {
      _id: '3',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      subscription: {
        status: 'inactive',
      },
      role: 'moderator',
      action: 'suspend',
    },
    {
      _id: '4',
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      subscription: {
        status: 'active',
      },
      role: 'user',
      action: 'delete',
    },
  ];


  function updateRoleHandler(id) {
console.log(id);
  }
  function deleteUserHandler(id) {
console.log(id);
  }

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box overflowX={'auto'}>
        <Heading p={5} textAlign={['center', 'left']}>
          All Users
        </Heading>

        <TableContainer width={['100vb', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>Updated few seconds ago</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Subscription</Th>
                <Th>Role</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users.map(user => (
                <TableRow  key={user._id} data={user}  updateRoleHandler={updateRoleHandler} deleteUserHandler={deleteUserHandler}/>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
}

function TableRow({ data, updateRoleHandler, deleteUserHandler }) {
  return (
    <Tr>
      <Td>{data._id}</Td>
      <Td>{data.name}</Td>
      <Td>{data.email}</Td>
      <Td>{data.subscription.status === 'active' ? <Text fontWeight={'bold'} color={'green'} >Active</Text> : 'Not Active'}</Td>
      <Td>{data.role}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'} >
          <Button onClick={() => updateRoleHandler(data._id)} size={'sm'}>Change Role</Button>
          <Button onClick={() => deleteUserHandler(data._id)} size={'sm'} _hover={{backgroundColor: 'red.200'}}><Delete02Icon /></Button>
        </HStack>
      </Td>
    </Tr>
  );
}
