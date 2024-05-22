import React from 'react'
import { Button, Flex, HStack,Spacer,Text } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex backgroundColor={"black"} >
        <HStack>
        <Text color={"white"} marginLeft={"20px"} fontSize={"22px"} fontWeight={"bold"} fontFamily={"inherit"} >
            envato
        </Text>
        <Text color={"green"} fontSize={"22px"} position={"relative"} right={"8px"} fontWeight={"bold"}   >
            Market
        </Text>
        </HStack>
        <Spacer></Spacer>
        <HStack>
        <Button marginRight={"25px"} paddingRight={"20px"} paddingLeft={"20px"} paddingTop={"10px"} paddingBottom={"10px"} borderRadius={"10px"} backgroundColor={"green"} color={"white"} >
            Buy Now
        </Button>

        </HStack>
    </Flex>
  )
}

export default Navbar