import {
  Flex,
  HStack,
  Text,
  Image,
  Box,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import BGimage from "/Construction Site/my-app/src/Images/banner-1.jpg";
import BGimage2 from "/Construction Site/my-app/src/Images/house.png";
import person from "/Construction Site/my-app/src/Images/image-1.png";
import logo from "/Construction Site/my-app/src/Images/Build.png";

const Header = () => {
  return (
    <Flex>
      {/* <Image src={BGimage}  height={"750px"} width={"1263px"} position={"relative"}  >
        </Image> */}
      <Box
        bgImage={BGimage}
        bgSize={"cover"}
        width={"100%"}
        height={"820px"}
        position={"relative"}
      >
        <Image src={logo} right={"1000px"} position={"absolute"}></Image>
        <Image
          src={BGimage2}
          width={"400px"}
          height={"400px"}
          position={"absolute"}
          left={"860px"}
          top={"420px"}
        ></Image>
        <Image
          src={person}
          position={"absolute"}
          height={"660px"}
          width={"500px"}
          left={"400px"}
          top={"180px"}
        ></Image>

        <HStack position={"absolute"} left={"700px"}>
          <Text fontSize={"25px"} marginRight={"20px"} color={"white"}>
            Home
          </Text>
          <Text fontSize={"25px"} marginRight={"20px"} color={"white"}>
            About
          </Text>
          <Text fontSize={"25px"} marginRight={"20px"} color={"white"}>
            Services
          </Text>
          <Text fontSize={"25px"} marginRight={"20px"} color={"white"}>
            Blog
          </Text>
          <Text fontSize={"25px"} marginRight={"20px"} color={"white"}>
            Contact Us
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Header;