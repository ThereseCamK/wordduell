function pushWord(player) {
    const game = model.pages.game;
    let boolean = player === 'player' ? true : false;
    game.guesses.push({
        isPlayer: boolean,
        score: 3,
        text: game.guessInput,
        /*boolean? game.guessInput: botGetWord() */

    })
    updateView();
}

function wordLength() {}


function checkWin(word) {


}

function finishedGame() {
    model.current.page == 'end';
    drawPage();
}