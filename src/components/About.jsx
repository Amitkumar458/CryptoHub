import { Box, Heading, Text, Stack, Container, Button, Flex, Image } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import img2 from '../assets/img2.jpg';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Box paddingTop={['16', '20']}>
      <Container maxW={"6xl"}>
        <Stack spacing={4} textAlign={"center"} mb={10}>
          <Heading fontSize={"4xl"}>About Us</Heading>
          <Text>
            Empowering the future of finance through blockchain and decentralized technologies.
          </Text>
        </Stack>

        <Flex direction={["column", "column", "column"]} align={"center"} gap={10} mb={16}>
          <Image
            src={img2}
            alt="Crypto Banner"
            boxSize={["100%", "100%", "50%"]}
            objectFit="contain"
          />
          <Stack spacing={5}>
            <Heading fontSize={"2xl"} textAlign={"center"}>Who We Are</Heading>
            <Text fontSize={"md"}>
              We are a team of passionate blockchain enthusiasts and developers committed to bringing transparency,
              security, and innovation to the world of digital finance. Our platform simplifies crypto trading,
              investing, and education for everyone—from beginners to seasoned pros.
            </Text>
          </Stack>
        </Flex>

        <Stack spacing={5} mb={12}>
          <Heading fontSize={"2xl"} textAlign={"center"}>
            Our Mission
          </Heading>
          <Text maxW="3xl" mx="auto" textAlign={"center"}>
            To make cryptocurrency accessible, secure, and trustworthy for everyone across the globe. We aim to
            revolutionize how people interact with digital assets by building intuitive tools and fostering financial
            independence.
          </Text>
        </Stack>

        <Stack spacing={8} direction={["column", "row"]} justify={"center"} textAlign="center" mb={12}>
          {["Transparency", "Security", "Innovation"].map((value) => (
            <Box key={value} p={6} borderWidth={1} borderRadius="lg" >
              <Heading fontSize="xl" mb={2}>
                {value}
              </Heading>
              <Text>
                {value === "Transparency" && "We operate with full openness in everything we do."}
                {value === "Security" && "Top-notch security measures to protect your digital assets."}
                {value === "Innovation" && "We are constantly evolving to stay ahead of the crypto curve."}
              </Text>
            </Box>
          ))}
        </Stack>

        <Stack align={"center"} spacing={4} mb={10}>
          <Button
            rightIcon={<FaArrowRight />}
            colorScheme="teal"
            size="lg"
            variant="solid"
            onClick={() => navigate('/coins')}
          >
            Join the Revolution
          </Button>
        </Stack>
      </Container>
      <Footer/>
    </Box>
  );
};

export default AboutUs;
