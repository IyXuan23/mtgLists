import CardWrapper from "@/app/ui/cards";
import EditBanner from "@/app/ui/editbanner";
import CardListDisplay from "@/app/ui/cardlistdisplay";
import CardDisplay from "@/app/ui/carddisplay";
import { fetchDeck, fetchCardsInDeck } from "@/app/lib/data";

export default async function Page() {

    const currDeck = await fetchDeck('Gonti, Deck 1');
    //commented out currently in order to facilitate compilation, will use later on
    //const cardsInDeck = await fetchCardsInDeck(currDeck.deck_id);

    return (
        <div>
            <EditBanner></EditBanner>
            <CardWrapper></CardWrapper>
            <div className="flex py-4 gap-4">
                <CardListDisplay></CardListDisplay>
                <CardDisplay></CardDisplay>
            </div>

        </div>
    )
}