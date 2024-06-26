import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonController {
    constructor() {
        this.getPokemon()
    }

    async getPokemon() {
        try {
            await pokemonService.getPokemon();
            console.log('🪤🦎');
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO CATCH THEM...🤔', error);
        }
    }
}