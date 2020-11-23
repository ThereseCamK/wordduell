const homePage = `
        <button onclick="model.current.page = 'setup'; updateView();">start spill mot bot</button>
        <button onclick="model.current.page = 'blank'; updateView();">start spill mot spiller</button>
        <button onclick="model.current.page = 'help'; updateView();">Hjelp</button>
    `; //"start spil mot spiller bryr vi oss ikke om enda"

const setupPage = `

    <div> MOT BOT </div>
    <select>
    ${wordLengthsOptions()}
    </select>
    <br>
    <input type="text" placeholder="skriv ord.."></input>
    <br>
    <button onclick="model.current.page = 'game'; updateView();">Start</button>
`;

function gamePage() { return `
    
    <div>${model.current.userName} VS BOT</div><br>
    <div>${model.pages.game.correctWord.player}</div>
    <div style="display:flex;">
        <div>
        <table>${gameTable('bot')}</table> 
        </div>
        <hr style="width: 1px; height: 230px; margin:  3px;">
        <div>
            <table>${gameTable('player')}</table>
        </div>   
    </div>
    <input type="text" placeholder="Gjett her" oninput="model.pages.game.guessInput = this.value"/> 
    <button type="button" onclick="pushWord('player')"> Gjett </button>
`; }

const endPage = `
<div>${checkWin()}</div>`

function updateView() {
    document.getElementById('app').innerHTML = drawPage();
}

function drawPage() {
    if (model.current.page == 'home') {
        return homePage;
    } else if (model.current.page == 'setup') {
        return setupPage;
    } else if (model.current.page == 'game') {
        return gamePage();
    } else if (model.current.page == 'end') {
        return endPage;
    }
}

function wordLengthsOptions() {
    let optionHTML;
    for (let option of model.pages.start.wordLengths) {
        optionHTML += `<option value="${option}" >${option} bokstaver</option>`;
    }
    return optionHTML;
}

function gameTable(player) { // Kanskje lettere bruker forståelse om man tar imot parameter height og width.
    console.log('kjørt')
        // Kan tas imot som parameter
    let wordLength = model.pages.game.wordLength

    let tableHTML = ''

    // Kan puttes rett inn i loops
    let rowStart = `<tr>`
    let rowEnd = `</tr>`
    let columnStart = `<td style="box-sizing:border-box; border:2px solid black; width:24px; height:24px;">`; // Jeg la på border - mads
    let columnEnd = `</td>`;

    let guesses = filterGuesses(player)
    let wordTableHeight = guesses.length;

    for (let r = 0; r < wordTableHeight; r++) {

        tableHTML += rowStart

        for (let i = 0; i < wordLength; i++) {

            tableHTML += columnStart
            if (guesses[r] != null) tableHTML += guesses[r].text[i];
            tableHTML += columnEnd
        }

        tableHTML += `<td>${guesses[r].score}</td>` + rowEnd

    }

    return tableHTML
}

function filterGuesses(player) {
    let boolean = player === 'player' ? true : false;
    let guesses = model.pages.game.guesses.filter(guess => guess.isPlayer === boolean);
    return guesses;
}