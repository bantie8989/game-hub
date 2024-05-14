import {
  HStack,
  Img
} from "@chakra-ui/react";
import ColorMode from "./ColorMode";
import log from "../assets/react.svg"

function NavBar() {
  return (
    <div>
      <HStack justifyContent="space-between" paddingLeft={10} paddingRight={10}>
        <Img src={log} alt="logo" boxSize={"60px"} />
        <ColorMode />
      </HStack>
    </div>
  );
}

export default NavBar;
