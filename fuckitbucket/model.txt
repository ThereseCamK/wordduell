const Model = {
    
	CurrentUser: {
		UserName: "",
		UserPassword: "",
	},
	CurrentPage: "",

	Info: "Hvordan fungerer spillet",



	// Game.Guesses[0]
	// Game.Guesses[rundeIndex]
	// Game historikk
	// Spiller =input 

	Game:
	{
		Id: 0,
        Player: {Input:'',},
        Opponent: {Type: '', Input: '',},
        Settings: {WordLength: [2,3,4,5,6,7]},
        Guesses:{
            Player:[{Word: '', Score: null,}],
            Opponent:[{Word: '', Score: null,}],        
        },
        // board = height x width
		Marks:  [],
		//highlighted (?)
    }

}

// GameSettings: {
    //     OpponentType: 'bot',
    //     WordLength: 5,
    //     PlayerInput: '',
    //     OpponentInput: "",
    // },
