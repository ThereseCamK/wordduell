const model = {
    user: { // fasit
        userName: "per",
        userPassword: "hemmelig",
    },
    current: {
        userName: 'per',
        page: 'main',
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
        game:
        {
            opponentIsBot: true,
			correctWord:
			{
                player: 'VASKE',
                opponent: 'ABCDE',
            },
            wordLength: 5,
            guesses: [{
                isPlayer: true,
                score: 2,
                text: 'TEKST',
                marks: [-1, 0, 1, 0, 0],
            }, ],
        },
    },
}