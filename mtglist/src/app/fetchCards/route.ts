import {writeFileSync} from "fs";

export async function GET() {

    //cardList
    const cardList = ['gonti, canny acquisitor',
        'forest',
        'llanowar wastes',
        'fellwar stone',
        'yavimaya coast',
        'arcane signet',
        'necroblossom snarl',
        'swamp',
        'hinterland harbor',
        'orochi soul-reaver',
        'twilight mire',
        'ghostly pilferer',
        'commander\'s sphere',
        'stolen goods',
        'mercurial spelldancer',
        'edric, spymaster of trest',
        'dream-theif\'s bandana',
        'malcolm, alluring scoundrel',
        'rampant growth',
        'brainstealer dragon',
        'island',
        'gonti, lord of luxury',
        'thief of sanity',
        'foreboding landscape',
        'drowned catacomb',
        'exotic orchard',
        'vineglimmer snarl',
        'rogue\'s passage',
        'changeling outcast',
        'heartless conscription',
        'underground river',
        'villainous wealth',
        'temple of malady',
        'disorienting choice',
        'come back wrong',
        'doc aurlock, grizzled genius',
        'slither blade',
        'coastal piracy',
        'nature\'s lore',
        'oblivion sower',
        'malleable impostor',
        'predators\ hour',
        'nashi, moon sage\'s scion',
        'the mimeoplasm',
        'baleful mastery',
        'cold-eyed selkie',
        'arcane heist',
        'farseek',
        'felix five-boots',
        'kodama\'s reach',
        'invisible stalker',
        'opulent palace',
        'tasha, the witch queen',
        'chromatic lantern',
        'cultivate',
        'ohran frostfang',
        'triton shorewalker',
        'siphon insight',
        'savvy trader',
        'hostage taker',
        'thieving skydiver',
        'reconnaissance mission',
        'temple of mystery',
        'thieving amalgam',
        'valgavoth, terror eater',
        'fallen shinobi',
        'counterspell',
        'sunken hollow',
        'smirking spelljacker',
        'toxic deluge',
        'three visits',
        'putrefy',
        'tower winder',
        'baleful strix',
        'thieving varmint',
        'shadowmage infiltrator',
        'flooded grove',
        'silhana ledgewalker',
        'darkslick shores',
        'reliquary tower',
        'sol ring',
        'temple of deceit',
        'woodland cemetery',
        'command tower',
        'feed the swarm',
        'silent blade oni',
        'mind\'s dilation',
        'phyrexian arena'
    ]

    try {
        const response = await fetchCardAndSave(cardList);

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

async function fetchCardAndSave(cardNames: string[]) {

    //fetch card from scryfall
    //we shall test with gonti canny acquisitor first

    const allCardData = []

    for (const cardName of cardNames) {

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

        allCardData.push(importantData)
        console.log(`${cardData.name} retrieved`);

    }

    const fileName = './all_card_data.json'
    writeFileSync(fileName, JSON.stringify(allCardData, null, 2));
    console.log('file complete')

    return {job: 'complete'};
}
