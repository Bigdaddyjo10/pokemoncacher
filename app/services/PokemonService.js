
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonService {
    async getPokemon() {
        const response = await pokemonApi.get('')
        AppState.activePokemon = response.data.results
        console.log('🍾🍾🍾🍾🍾🍾');
    }

    async getPokemonDetails(pokemonIndex) {
        const response = await pokemonApi.get(`pokemon/${pokemonIndex}`)
        console.log('🧁🧁🧁', response.data.results)
    }

}

export const pokemonService = new PokemonService()