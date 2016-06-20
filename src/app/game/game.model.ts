export interface Game {
	$key: string;
	game_id: string;
	name: string;
	users: any[];
	decks: {
		whiteDeck: any[],
		blackDeck: any[]
	};
}
