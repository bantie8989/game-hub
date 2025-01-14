import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchGames {
    count: number;
    results: Game[];
  }

const UseGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState(null);
    useEffect(() => {

            const controller = new AbortController();
            apiClient
                .get("/games")
                .then((res: { data: FetchGames }) => {
                    setGames(res.data.results);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                });
                return () => controller.abort();
        }, []);
      return {games, error};  
}
export default UseGames;