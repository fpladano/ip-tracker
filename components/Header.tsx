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
      align="center"
      bgImage="url('/assets/images/pattern-bg.png')"
      p="6"
    >
      <Heading size="lg" color="white" as="h1" mb="6">
        IP Address Tracker
      </Heading>
      <Flex onSubmit={handleFormSubmit} as="form">
        <FormControl>
          <Input
            id="ip_address"
            value={input}
            onChange={handleInputChange}
            backgroundColor="white"
            roundedRight="0"
          />
        </FormControl>
        <Button
          type="submit"
          roundedLeft="0"
          backgroundColor="black"
          textColor="white"
        >
          ❯
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
