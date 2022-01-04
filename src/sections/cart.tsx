import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack w="full" alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src={imageUrl} alt="Skateboard" />
        </AspectRatio>
        <Stack
          w="full"
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Skateboard</Heading>
            <Text color={secondaryTextColor}>PNYCOMP1234</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $199.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between" w="full">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;

const imageUrl =
  "https://www.wikihow.com/images_en/thumb/0/07/Skateboard-Step-24-Version-4.jpg/v4-1200px-Skateboard-Step-24-Version-4.jpg";
