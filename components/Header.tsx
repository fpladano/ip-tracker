import { Button, Flex, FormControl, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

function Header() {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const handleFormSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Flex
      flexDirection="column"
      bgImage="url('/assets/images/pattern-bg.png')"
      p="6"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      <Heading size="lg" color="white" as="h1" mb="6" textAlign="center">
        IP Address Tracker
      </Heading>
      <Flex onSubmit={handleFormSubmit} as="form" mb="28">
        <FormControl>
          <Input
            id="ip_address"
            value={input}
            onChange={handleInputChange}
            backgroundColor="white"
            roundedRight="0"
            size="lg"
            placeholder="Search for any IP address"
          />
        </FormControl>
        <Button
          type="submit"
          roundedLeft="0"
          backgroundColor="black"
          textColor="white"
          size="lg"
        >
          ❯
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
