import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UserGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = UseGames();

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{sm:2, md:3, lg:4, xl:5}} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
