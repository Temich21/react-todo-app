import { IPokemon } from "../models/IPokemon"

type Result =
    | {
        data: IPokemon[]
        error: null
    }
    | { data: null, error: Error }

export const fetchPokemon = async (limit = 20, offset = 0): Promise<Result> => {
    try {
        const listBlob = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        const { results } = await listBlob.json()

        const urlList: string[] = results.map(
            (result: { name: string; url: string }) => result.url
        )

        const fetchedBlobs: Response[] = await Promise.all(
            urlList.map((url) => fetch(url))
        )
        const fetchedPokemon = await Promise.all(
            fetchedBlobs.map((blob) => blob.json())
        )

        const formattedPokemon: IPokemon[] = fetchedPokemon.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            imgUrl: pokemon.sprites.front_default,
            type: pokemon.types[0].type.name
        }))

        return { data: formattedPokemon, error: null }
    } catch (error) {
        console.log(error);
        return { data: null, error: error as Error }
    }
};
