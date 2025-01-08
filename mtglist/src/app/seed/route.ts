import { db } from "@vercel/postgres";

export async function GET() {
    try {
        const response = await fetchCard("gonti, canny acquisitor");

        if (!response) {
            throw new Error('failed after exiting fetchcard function');
        }

        return new Response(JSON.stringify({message: 'Card fetched successfully', data: response}), {
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


async function fetchCard(cardName: string) {

    //fetch card from scryfall
    //we shall test with gonti canny acquisitor first
    const res = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`);

    if (!res.ok) {
        throw new Error('failed to fetch from scryfall API');
    }

    const cardData = await res.json();

    const importantData = {
        name: cardData.name,
        small_image_uri: cardData.image_uris.small,
        normal_image_uri: cardData.image_uris.normal,
        cmc: cardData.cmc,
        type_line: cardData.type_line
    };

    console.log(importantData);

    return importantData;
}

async function seedTableAndCards() {
    const client = await db.connect();

    await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql `CREATE TABLE IF NOT EXISTS cards (
        card_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
        name VARCHAR(255) NOT NULL
        cmc VARCHAR(50) NOT NULL
        small_image_uri VARCHAR(255)
        normal_image_Uri VARCHAR(255)
        type_line VARCHAR(255)
        );
    `;

    await client.sql `CREATE TABLE IF NOT EXISTS deck (
        deck_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        deck_name VARCHAR(255) NOT NULL
        );
    `;

    await client.sql `CREATE TABLE IF NOT EXISTS cards_deck (
        deck_id UUID
        card_id UUID
        quantity INT DEFAULT 1,
        PRIMARY KEY (deck_id, card_id)
        FOREIGN KEY (deck_id) REFERENCES deck(deck_id) ON DELETE CASCADE
        FOREIGN KEY (card_id) REFERENCES card(card_id) ON DELETE CASCADE
        );
    `;
}