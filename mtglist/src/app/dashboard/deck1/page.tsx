import CardWrapper from "@/app/ui/cards"
import EditBanner from "@/app/ui/editbanner";
import { fetchDeck, fetchCardsInDeck } from "@/app/lib/data"

export default async function Page() {

    const currDeck = await fetchDeck('Gonti, Deck 1');
    const cardsInDeck = await fetchCardsInDeck(currDeck.deck_id);

    return (
        <div>
            <EditBanner></EditBanner>
            <CardWrapper></CardWrapper>
        </div>
    )
}