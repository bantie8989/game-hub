import {
  HStack,Image
} from "@chakra-ui/react";
import ColorMode from "./ColorMode";
import logo from "../assets/jungle.jpg"

function NavBar() {
  return (
    <div>
      <HStack  justifyContent="space-between" pl={2} pr={2} >
        <Image  src={logo} boxSize="60px" />
        <ColorMode/>
      </HStack>
    </div>
  );
}

export default NavBar;
