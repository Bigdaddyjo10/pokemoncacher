
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonService {

    async getPokemonDetails(pokemonIndex) {
        debugger
        const response = await pokemonApi.get(`pokemon/${pokemonIndex}`)
        const newPokemon = new Pokemon(response.data)
        console.log(newPokemon);
        // AppState.activePokemon = newPokemon
    }


    async getPokemon() {
        const response = await pokemonApi.get('pokemon')
        AppState.activePokemon = response.data.results

    }


}

export const pokemonService = new PokemonService()