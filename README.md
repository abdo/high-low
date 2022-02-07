## High Low cards game

### `This project is built with React JS`

You can check the game through [this link](https://high-low-game.netlify.app)

### To run locally:

- Make sure you are in the `main` branch
- Run `yarn`
- Run `yarn start`
- Go to `localhost:3000`

### Tools used:

- React JS
- Redux
- Framer motion
- Deck of Cards [API](https://deckofcardsapi.com/)

### Game rules

- **You try to guess whether the next drawn card will have a higher value or a lower value that the current card!**
- If you are correct, we add that card to the pile. If you ar incorrect, you get a point for every card that was in the pile at that time (for example, if 10 cards were in the pile, you would get 10 points).And the pile is cleared.
- After you get 3 successful guesses in a row, you "pass" to the other player.
- **The player with the least number of points at the of the game wins!**
