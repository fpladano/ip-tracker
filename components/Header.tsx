import { Button, Flex, FormControl, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import Details from './Details';
import SearchBar from './SearchBar';
import { DetailsProvider } from './DetailsProvider';

function Header() {
  return (
    <Flex
      flexDirection="column"
      bgImage="url('/assets/images/pattern-bg.png')"
      p="6"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      height="30vh"
    >
      <Heading size="lg" color="white" as="h1" mb="6" textAlign="center">
        IP Address Tracker
      </Heading>
      <SearchBar />
      <Details />
    </Flex>
  );
}

export default Header;
