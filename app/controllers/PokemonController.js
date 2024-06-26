

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
            console.log('🪤🦎');
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO CATCH THEM...🤔', error);
        }

    }

    drawPokemon() {
        const poky = AppState.activePokemon
        let innerHTMLString = ''
        poky.forEach((pokemon) => {
            innerHTMLString += `
            <button onclick="app.PokemonController.drawPokemonDetails()" class="btn btn-outline-danger mt-2 d-block w-100">${pokemon.name}</button>`
        })
        setHTML('pokeyList', innerHTMLString)
    }

    drawPokemonDetails() {
        const pokemonDetails = AppState.activePokemon
        setHTML('pokemonDetails', pokemonDetails)
    }
}