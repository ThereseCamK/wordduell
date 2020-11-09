const homePage = `
        <button onclick="model.current.page = 'setup'; updateView();">start spill mot bot</button>
        <button onclick="model.current.page = 'blank'; updateView();">start spill mot spiller</button>
        <button onclick="model.current.page = 'help'; updateView();">Hjelp</button>
    `;

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

const gamePage = `
    
    <div>${model.current.userName} VS BOT</div><br>
    <div>${model.pages.game.correctWord.player}</div>
    <div style="display:flex;">
        <div></div>
        <div></div>
    </div>
`;

function updateView() {
    document.getElementById('app').innerHTML = drawPage();
}

function drawPage() {
    if (model.current.page == 'home') {
        return homePage;
    } else if (model.current.page == 'setup') {
        return setupPage;
    } else if (model.current.page == 'game') {
        return gamePage;
    }
}

function wordLengthsOptions() {
    let optionHTML;
    for (let option of model.pages.start.wordLengths) {
        optionHTML += `<option value="${option}" >${option} bokstaver</option>`;
    }
    return optionHTML;
}

function gameTable() {
    let tableHTML;
    let column = `<td></td>`;
}