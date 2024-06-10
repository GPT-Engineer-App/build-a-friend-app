import React, { useState } from "react";
import { Container, VStack, HStack, Heading, Text, Input, Button, Box, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";

const Index = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submittedInfo, setSubmittedInfo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedInfo(userInfo);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} w="100%">
        <Heading as="h1" size="xl">
          User Information Form
        </Heading>
        <Box w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <HStack>
                  <IconButton aria-label="Name" icon={<FaUser />} />
                  <Input type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="Enter your name" />
                </HStack>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <HStack>
                  <IconButton aria-label="Email" icon={<FaEnvelope />} />
                  <Input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Enter your email" />
                </HStack>
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone</FormLabel>
                <HStack>
                  <IconButton aria-label="Phone" icon={<FaPhone />} />
                  <Input type="tel" name="phone" value={userInfo.phone} onChange={handleChange} placeholder="Enter your phone number" />
                </HStack>
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <HStack>
                  <IconButton aria-label="Address" icon={<FaAddressCard />} />
                  <Input type="text" name="address" value={userInfo.address} onChange={handleChange} placeholder="Enter your address" />
                </HStack>
              </FormControl>
              <Button type="submit" colorScheme="teal" size="lg" w="100%">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        {submittedInfo && (
          <Box w="100%" p={4} borderWidth={1} borderRadius="lg">
            <Heading as="h2" size="lg" mb={4}>
              Submitted Information
            </Heading>
            <Text>
              <strong>Name:</strong> {submittedInfo.name}
            </Text>
            <Text>
              <strong>Email:</strong> {submittedInfo.email}
            </Text>
            <Text>
              <strong>Phone:</strong> {submittedInfo.phone}
            </Text>
            <Text>
              <strong>Address:</strong> {submittedInfo.address}
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
