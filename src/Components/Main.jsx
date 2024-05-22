import {
  Flex,
  HStack,
  VStack,
  Image,
  Spacer,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import BGimage from "/Construction Site/my-app/src/Images/bg-2.jpg";
import person from "/Construction Site/my-app/src/Images/image-1.jpg";
import square from "/Construction Site/my-app/src/Images/square.png";
import signature from "/Construction Site/my-app/src/Images/signature.png";
import founder from "/Construction Site/my-app/src/Images/author-1.jpg";
function Main() {
  return (
    <Flex>
      <HStack
        backgroundImage={BGimage}
        width={"100%"}
        height={"700px"}
        position={"relative"}
      >
        <VStack>
          <Image
            src={person}
            position={"absolute"}
            height={"600px"}
            width={"300px"}
            left={"100px"}
            bottom={"100px"}
          ></Image>
          <Image
            src={square}
            position={"absolute"}
            top={"360px"}
            left={"216px"}
          ></Image>
        </VStack>
        <VStack position={"absolute"} left={"300px"}>
          <Text
            color={"red"}
            fontWeight={"bold"}
            letterSpacing={"3px"}
            fontSize={"16px"}
            marginRight={"440px"}
          >
            Welcome to company
          </Text>
          <Heading
            color={"white"}
            textAlign={"justify"}
            marginRight={"220px"}
            fontWeight={"bold"}
            fontSize={"25px"}
          >
            Construction Company With Strategy <br></br>
            In Business Growth
          </Heading>
          <Text textAlign={"justify"} color={"white"} fontSize={"20px"}>
            We have been the trusted name in heating, air conditioning and
            plumbing <br></br> businesses. Throughout the years, our number one
            goal
          </Text>
          <Text
            textAlign={"justify"}
            color={"white"}
            marginLeft={"140px"}
            marginBottom={"150px"}
            fontWeight={"bold"}
            fontSize={"18px"}
          >
            For over 80 years, We have been the trusted name in heating, air
            conditioning and plumbing <br></br> businesses. Throughout the
            years, our number one goal has been to accurately . For over 80{" "}
            <br></br> years, We have been the trusted name in heating, air
            conditioning and plumbing businesses.<br></br> Throughout the years,
            our number one goal has been to accurately .For over 80 years, We
            have <br></br> been the trusted name in heating.
          </Text>
          <HStack position={"absolute"} top={"450px"} left={"140px"} >
            <Image src={founder}></Image>
            <VStack>
              <Text color={"white"} fontWeight={"bold"}> Robert Joe Kerry </Text>

              <Text color={"white"} fontWeight={"extrabold"} marginRight={"20px"} position={"absolute"} top={"40px"} >Founder</Text>
            </VStack>
            <Spacer></Spacer>
            <Image src={signature}></Image>
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default Main;
