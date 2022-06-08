import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useDetailsContext } from './DetailsProvider';

function checkIfValidIP(str: string) {
  // Regular expression to check if string is a IP address
  const regexExp =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  return regexExp.test(str);
}

function SearchBar() {
  const [input, setInput] = useState('');
  const [isError, setIsError] = useState<boolean>();

  const context = useDetailsContext();

  const searchIpDetails = async (ip: string) => {
    const response = await fetch('/api/getIpDetails', {
      body: JSON.stringify(ip),
      method: 'POST',
    });

    const data = await response.json();

    context?.updateDetails(data);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const handleFormSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!checkIfValidIP(input)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    searchIpDetails(input);
  };

  return (
    <Flex onSubmit={handleFormSubmit} as="form" maxW="762px" mx="auto" w="100%">
      <FormControl isRequired isInvalid={isError}>
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
  );
}

export default SearchBar;
