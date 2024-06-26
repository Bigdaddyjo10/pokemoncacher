import { AppState } from "../AppState.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonService {
    async getPokemon() {
        const response = await pokemonApi.get()
        console.log('Gotta Catch them all!!!! 🪤', response.data);
    }

}

export const pokemonService = new PokemonService()