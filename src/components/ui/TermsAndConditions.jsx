import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function TAndC({termsAndCondition}) {
  return (
    <Box marginY={'4'}>
      <Heading size="md" textAlign={['center', 'left']} marginY={'3'}>
        Terms and Condition
      </Heading>
      <Box h='200' p="2" overflowY={'scroll'}>
        <Text letterSpacing={'widest'} textAlign={['center', 'left']}>
          {termsAndCondition}
        </Text>
        <Heading
          paddingY={'3'}
          size={'xs'}
          children="30 days Moneyback Guarentee"
        />
      </Box>
    </Box>
  );
}
