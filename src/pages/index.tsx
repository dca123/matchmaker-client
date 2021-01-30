import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Image,
  Flex,
  Heading,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <Flex
    flexDirection="column"
    justifyContent="space-around"
    alignItems="center"
    background="linear-gradient(179.99deg, #1D2D50 0.01%, #52057B 193.87%);"
    w="571px"
    h="564px"
    borderRadius="30px"
  >
    <Heading size="3xl" color="white">DOTA Newbs</Heading>
    <Image h="120px" w="120px" src="dotaImg.png" />
    <Button backgroundColor="pink" size="lg">Login Via Steam</Button>
  </Flex>
);

export default Index;
