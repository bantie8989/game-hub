import {
  HStack
} from "@chakra-ui/react";
import ColorMode from "./ColorMode";

function NavBar() {
  return (
    <div>
      <HStack boxSize="60px">
        <img src="src\assets\jungle.jpg" alt="" />
        <ColorMode/>
      </HStack>
    </div>
  );
}

export default NavBar;
