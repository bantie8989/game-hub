import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav " "aside main"`,
        }}
      >
        <GridItem bg="blue.300" area={"nav "}>
          nav
        </GridItem>
        <Show above="lg">
        
          <GridItem bg="red.300" area={"aside "}>
            aside
          </GridItem>
        </Show>

        <GridItem bg="yellow.300" area={"main "}>
          main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
