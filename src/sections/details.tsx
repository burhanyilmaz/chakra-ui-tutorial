import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SelectField,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({
    base: 2,
    md: 1,
  });

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack alignItems={"flex-start"} spacing={3}>
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to login</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Burhan" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="YILMAZ" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Broken Dream 24" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Ankara" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="turkey">Turkey</option>
              <option value="usa">USA</option>
              <option value="germany">Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="full" size="lg" variant="primary">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
