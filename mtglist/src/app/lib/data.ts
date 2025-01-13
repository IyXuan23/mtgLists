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

const ITEMS_PER_PAGE = 6;
export async function fetchSearchedCards(query: string, currentPage: number) {

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const searchedCards = await sql<Card>
        `SELECT * 
        FROM cards
        WHERE cards.card_name ILIKE ${`%${query}%`}
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

        return searchedCards.rows;
    } catch (error) {
        console.log('Database Error: ', error);
        throw new Error('Failed to Fetch Cards.');
    }

}

export async function fetchAllSearchedCards(query: string) {
    try {
        const count = await sql`SELECT COUNT(*)
        FROM cards
        WHERE cards.card_name ILIKE ${`%${query}%`}`;

        //count is an array with 1 item, the number of rows
        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Cards.');
    }
}
