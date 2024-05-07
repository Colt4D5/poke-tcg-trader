// import { error } from '@sveltejs/kit';
import pokemon from 'pokemontcgsdk';
import { connection } from '$db';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  let { userId, set } = await request.json();

  if (!set) set = 'base1';

	const cardsInSet = await pokemon.card.all({ q: `set.id:${set}` });

  const pokemonCards = cardsInSet.filter(card => card.supertype === 'Pokémon').sort(() => Math.random() - 0.5).slice(0, 7);
  const trainerCard = cardsInSet.filter(card => card.supertype === 'Trainer').sort(() => Math.random() - 0.5).slice(0, 1);
  const energyCards = cardsInSet.filter(card => card.supertype.includes('Energy')).sort(() => Math.random() - 0.5).slice(0, 2);

  const pulledCards = [...pokemonCards, ...trainerCard, ...energyCards];


  // save new record in Orders (ordertype, orderid, userid, date, title?)
  const [results, fields] = await connection.query('INSERT INTO Orders (user_id, title, order_type) VALUES (?,?,?)', [userId, set, 'booster']);

  const OrderId = results.insertId;

  if (OrderId) {
    // save record for each card in CardsPurchased (cardname, userid, orderid)
    const cardsSaved = Promise.all(pulledCards.map(card => {
			return connection.query('INSERT INTO CardsPurchased (card_id, user_id, order_id) VALUES (?,?,?)', [card.id, 3, OrderId]);
    }))
    
    // save any cards in Cards that are not yet in the system
  }

	return new Response(JSON.stringify({
    cards: pulledCards
  }));
};
