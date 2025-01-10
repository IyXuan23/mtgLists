export type Deck = {
    deck_id: string,
    deck_name: string

}

export type Card = {
    card_id: string,
    card_name: string,
    cmc: number,
    small_image_uri: string,
    normal_image_uri: string,
    type_line: string
}