import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import DetailsItem from './DetailsItem';
import { useDetailsContext } from './DetailsProvider';

function Details() {
  const context = useDetailsContext();

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
      <DetailsItem title="IP Address" data={context?.detailsData.ip} />
      <DetailsItem
        title="Location"
        data={`${context?.detailsData.location.city}, ${context?.detailsData.location.region} ${context?.detailsData.location.postalCode}`}
      />
      <DetailsItem
        title="Time Zone"
        data={`UTC ${context?.detailsData.location.timezone}`}
      />
      <DetailsItem
        title="ISP"
        data={`${context?.detailsData.isp}`}
        noBorder={true}
      />
    </SimpleGrid>
  );
}

export default Details;
