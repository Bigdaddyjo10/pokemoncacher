

import { Pokemon } from "../models/Pokemon.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class PokemonController {
    constructor() {
        this.getPokemon()
        AppState.on('activePokemon', this.drawPokemon)
    }

    async getPokemon() {
        try {
            await pokemonService.getPokemon();
            pokemonService.getPokemonDetails()

        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO CATCH THEM...🤔', error);
        }

    }

    async getPokemonDetails(pokemonIndex) {
        try {
            console.log('🤪', pokemonIndex);
            await pokemonService.getPokemonDetails(pokemonIndex);
        } catch (error) {
            Pop.error(error)
            console.error('FAILED...🤔', error);
        }
    }

    drawPokemon() {
        const poky = AppState.activePokemon
        let innerHTMLString = ''
        poky.forEach((pokemon) => {
            innerHTMLString += `
            <button onclick="app.PokemonController.getPokemonDetails('${pokemon.name}')" class="btn btn-outline-danger mt-2 d-block w-100">${pokemon.name}</button>`
        })
        setHTML('pokeyList', innerHTMLString)
    }
    // drawPokemonDetails() {
    //     const poky = AppState.activePokemon
    //     setHTML('pokemonDetails', poky.)
    // }


}