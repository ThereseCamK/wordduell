const model = {
    user: { // fasit
        userName: "per",
        userPassword: "hemmelig",
    },
    current: {
        userName: 'per',
        page: 'home',
    },

    pages: { // omfatter også det jeg ofte kaller inputs
        info: {
            header: "Hvordan fungerer spillet",
            text: 'skjhgfjsdgjhg',
        }, // eller hardkode i view-funksjonen
        start: {
            letterCount: 5,
            word: '',
            wordLengths: [2, 3, 4, 5, 6, 7]
        },
        game: {
            opponentIsBot: true,
            correctWord: {
                player: 'VASKE',
                opponent: 'ABCDE',
            },
            wordLength: 5,
            guesses: [{
                    isPlayer: true,
                    score: 2,
                    text: 'TEKST',
                    marks: [-1, 0, 1, 0, 0],
                },
                {
                    isPlayer: true,
                    score: 2,
                    text: 'VASKE',
                    marks: [-1, 0, 1, 0, 0],
                },
                {
                    isPlayer: false,
                    score: 2,
                    text: 'BUKSE',
                    marks: [-1, 0, 1, 0, 0],
                },
            ],
        },
    },
}


//model.pages.game.correctword.player