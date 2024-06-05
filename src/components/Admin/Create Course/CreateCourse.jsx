import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar.jsx'

export default function CreateCourse() {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']} >
        <Box>
            <Text>Work in progress...</Text>
        </Box>
        <Sidebar />
    </Grid>
  )
}
