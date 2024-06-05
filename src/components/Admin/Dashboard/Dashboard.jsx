import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar.jsx';
import TradeDownIcon from '../../../assets/svg/TradeDownIcon.jsx';
import TradeUpIcon from '../../../assets/svg/TradeUpIcon.jsx';
import { DoughnutChart, LineChart } from './Chart.jsx';

export default function Dashboard() {
  const originalTopText = `Last updated on ${String(new Date()).split('G')[0]}`;
  const [topText, setTopText] = useState(originalTopText);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box>
        <Text
          mt={'2'}
          cursor={'pointer'}
          onClick={() =>
            topText === originalTopText
              ? setTopText(
                  `Account Created on ${String(new Date()).split('G')[0]}`
                )
              : setTopText(originalTopText)
          }
          textAlign={'center'}
          opacity={0.6}
        >
          {topText}
        </Text>

        <Heading ml={'5'}>Dashboard</Heading>
        <Stack
        spacing={'3'}
          mt={5}
          direction={['column', 'row']}
          justifyContent={['center', 'space-evenly']}
        >
          <StatsBox title={'Views'} qty={4528} percentage={36} profit={true} />
          <StatsBox title={'Users'} qty={408} percentage={29} profit={false} />
          <StatsBox title={'Subscription'} qty={48} percentage={56} profit={true} />
          <StatsBox title={'Ratings'} qty={448} percentage={45} profit={true} />
        </Stack>

        <Box borderRadius={'10px'} bg={'#BABFD1'} boxShadow={'lg'} m={5} p={4}>
            <Heading textAlign={['center', 'left']} size={'md'} >Views Graph</Heading>
            <LineChart />
        </Box>


        <Grid templateColumns={['1fr', '2fr 1fr']}>
            <Box p={4} bg={'#BABFD1'} borderRadius={'10px'} boxShadow={'lg'} m={5} >
                <Heading textAlign={['center', 'left']} size={'md'} >
                    Progress Bar
                </Heading>
                <Box>
                    <Bar title='Views' value={36} profit={true} />
                    <Bar title='Users' value={29} profit={false} />
                    <Bar title='Subscription' value={56} profit={true} />
                    <Bar title='Ratings' value={45} profit={true} />
                </Box>
            </Box>

            <Box p={4} bg={'#BABFD1'} borderRadius={'10px'} boxShadow={'lg'} m={5} >
                <Heading textAlign={['center', 'left']} size={'md'} >
                    Users
                </Heading>
                <DoughnutChart />
            </Box>
        </Grid>



      </Box>
      <Sidebar />
    </Grid>
  );
}

function StatsBox({ title, qty, percentage, profit }) {
  return (
    <Box
      width={['90%', '20%']}
      mx={4}
      p={3}
      borderRadius={'10px'}
      bg={'#BABFD1'}
      boxShadow={'lg'}
    >
      <Text>{title}</Text>
      <HStack>
        <Text fontSize={'2xl'} fontWeight={'bold'}>
          {qty}
        </Text>
        <HStack>
          <Text>{percentage}%</Text>
          {profit ? <TradeUpIcon color='green' /> : <TradeDownIcon color='red' />}
        </HStack>
      </HStack>
      <Text opacity={0.6}>In Past Seven Days</Text>
    </Box>
  );
}


function Bar({title, value, profit}) {
    return (
        <Box pt={3} >
            <Heading size={'sm'} mb={1} >{title}</Heading>
            <HStack w={'full'} alignItems={'center'} >
            <Text>{profit ? `+${value}%` : `-${value}%`}</Text>
                <Progress colorScheme={profit ? 'green' : 'red'} borderRadius={'5px'} w='full' value={value}></Progress>
                <Text>{value>100 ? {value} : 100}%</Text>
            </HStack>
        </Box>
    )
}