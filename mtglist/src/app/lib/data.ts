import { sql } from "@vercel/postgres";
import { Deck, Card } from "./definitions";
import { assert } from "console";

export async function fetchDeck(deckName: string) {

    const deckData = await sql<Deck>`SELECT * FROM deck WHERE deck_name = ${deckName}`;
    assert(deckData.rows.length == 1);

    return deckData.rows[0];
}

export async function fetchCardsInDeck(deck_id: string) {

    const cardsInDeck = await sql<Card>
    `SELECT * 
     FROM cards
     INNER JOIN cards_deck ON cards_deck.card_id = cards.card_id
     INNER JOIN deck ON deck.deck_id = cards_deck.deck_id
     WHERE deck.deck_id = ${deck_id}`;

    console.log(cardsInDeck.rows);

    return cardsInDeck.rows;
}