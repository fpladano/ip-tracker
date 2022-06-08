import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  data: string | undefined;
  noBorder?: boolean;
}

function DetailsItem({ title, data, noBorder }: Props) {
  return (
    <Container
      textAlign={{ base: 'center', md: 'left' }}
      borderRight={noBorder ? { md: '0' } : { md: '1px' }}
      borderColor={{ md: 'gray.300' }}
    >
      <Heading textTransform="uppercase" textColor="gray" size="xs">
        {title}
      </Heading>
      <Text fontWeight="extrabold" fontSize="2xl">
        {data}
      </Text>
    </Container>
  );
}

export default DetailsItem;
