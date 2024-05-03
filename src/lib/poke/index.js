import pokemon from 'pokemontcgsdk';
import { POKEMON_TCG_API_KEY } from '$env/static/private';

pokemon.configure({ api_apiKey: POKEMON_TCG_API_KEY })

export default pokemon;
