import {db} from '@vercel/postgres';
import { readFileSync } from "fs";

//Card structure
interface Card {
    name: string,
    small_image_uri: string,
    normal_image_uri: string,
    cmc: number,
    type_line: string
}

export async function GET() {
    try {
        const response = await insertCardsIntoDatabase();

        if (!response) {
            throw new Error('error failed to seed tables into database');
        }

        return new Response(JSON.stringify({message: 'Database Tables Created', data: response}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    catch (error) {
        return new Response(JSON.stringify({error: (error as Error).message}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

async function insertCardsIntoDatabase() {

    const client = await db.connect();

    const cards: Card[] = await parseCardsJSON('./all_card_data.json');

    await client.sql`ALTER TABLE cards
    ADD CONSTRAINT unique_card_names UNIQUE(card_name);`;
    console.log('made card names unique');

    await client.sql`ALTER TABLE deck
    ADD CONSTRAINT unique_deck_names UNIQUE(deck_name);`;
    console.log('made deck names unique');
    
    await Promise.all(
        cards.map(async(card) => {
            return client.sql`
            INSERT INTO cards (card_name, cmc, small_image_uri, normal_image_uri, type_line)
            VALUES (${card.name}, ${card.cmc}, ${card.small_image_uri}, ${card.normal_image_uri}, ${card.type_line})
            ON CONFLICT (card_name) DO NOTHING;`;
        }
        
        )
    )

    console.log('cards inserted');

    const decks = [{deck_name: 'Gonti, Deck 1'}, {deck_name: 'Gonti, Deck 2'}]

    await Promise.all(
        decks.map(async(deck) => {
            return client.sql`
            INSERT INTO deck (deck_name)
            VALUES (${deck.deck_name})
            ON CONFLICT (deck_name) DO NOTHING;`;
        })
    )

    console.log('decks inserted');

    return {cards_and_decks: 'inserted'};
}

async function parseCardsJSON(fileName: string) {

    try {
        const fileContents = await readFileSync(fileName, 'utf-8');
        const cardList = JSON.parse(fileContents);
        
        console.log('successfully read the json-card-list');
        return cardList;
    } catch (error) {
        console.error('Error reading json-card-list', error);
        throw error;
    }
}