import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <HStack >
        <Switch colorScheme="teal" size="lg" onChange={toggleColorMode} />
        <Text> {colorMode === "light" ? "Dark" : "light"} Mode</Text>
      </HStack>
    </div>
  );
}

export default ColorMode;
