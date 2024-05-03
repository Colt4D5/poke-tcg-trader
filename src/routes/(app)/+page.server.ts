import pokemon from '$lib/poke/index.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {	
  const res = await pokemon.card.find('base1-4')
  // const data = await res.json();
  // console.log(res)
  return {
    card: res,
  };
};
