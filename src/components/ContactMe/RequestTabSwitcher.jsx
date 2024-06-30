import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
} from '@chakra-ui/react';
import RequestCourse from './RequestCourse';
import RequestFeature from './RequestFeature';

export default function RequestTabSwitcher() {
  const clickedButton = '';

  return (
    <Box
      minH={'80vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Tabs minW={'40vw'}>
        <TabList justifyContent={'center'}>
          <Box display={'flex'} flexDirection={'row'} borderRadius={13} mb={2}>
            <Tab>
              <Button
                variant={'outline'}
                colorScheme={clickedButton === 'course' ? 'teal' : 'none'}
              >
                Request Course
              </Button>
            </Tab>
            <Tab>
              <Button
                variant={'outline'}
                colorScheme={clickedButton === 'feature' ? 'teal' : 'none'}
              >
                Request Feature
              </Button>
            </Tab>
          </Box>
        </TabList>
        <TabPanels>
          <TabPanel>
            <RequestCourse />
          </TabPanel>
          <TabPanel>
            <RequestFeature />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
