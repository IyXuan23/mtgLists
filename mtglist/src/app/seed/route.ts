import { db } from "@vercel/postgres";


export async function GET() {
    try {
        const response = await seedTable();

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

async function seedTable() {

    const client = await db.connect();

    await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    console.log('extension created');

    await client.sql `CREATE TABLE IF NOT EXISTS cards (
        card_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        card_name VARCHAR(255) NOT NULL,
        cmc VARCHAR(50) NOT NULL,
        small_image_uri VARCHAR(255),
        normal_image_uri VARCHAR(255),
        type_line VARCHAR(255)
        );
    `;

    console.log('cards table created');

    await client.sql `CREATE TABLE IF NOT EXISTS deck (
        deck_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        deck_name VARCHAR(255) NOT NULL
        );
    `;

    console.log('deck table created');

    await client.sql `CREATE TABLE IF NOT EXISTS cards_deck (
        deck_id UUID,
        card_id UUID,
        quantity INT DEFAULT 1,
        PRIMARY KEY (deck_id, card_id),
        FOREIGN KEY (deck_id) REFERENCES deck(deck_id) ON DELETE CASCADE,
        FOREIGN KEY (card_id) REFERENCES cards(card_id) ON DELETE CASCADE
        );
    `;

    console.log('card-deck table created');

    return {database: 'created'};
}