import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import DetailsItem from './DetailsItem';

function Details() {
  return (
    <SimpleGrid
      zIndex="modal"
      mt="6"
      bgColor="white"
      rounded="2xl"
      p="6"
      py={{ md: '8' }}
      boxShadow="2xl"
      maxW="1024px"
      w="100%"
      mx="auto"
      columns={[1, null, 4]}
      spacingY="5"
      gridGap="1"
    >
      <DetailsItem title="IP Address" data="123.123.123.123" />
      <DetailsItem title="Location" data="Brooklyng, NY, 10000" />
      <DetailsItem title="Time Zone" data="123.123.123.123" />
      <DetailsItem title="ISP" data="123.123.123.123" noBorder={true} />
    </SimpleGrid>
  );
}

export default Details;
