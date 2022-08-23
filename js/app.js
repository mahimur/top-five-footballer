const selectedPlayersArray = [];

function playerName(playerId) {
    const playerNamefield = document.getElementById(playerId);
    const playerName = playerNamefield.innerText;

    const selectedField = document.getElementById('selection-field');
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedField.appendChild(li);
}

function buttonDisabled(btnId) {
    const button = document.getElementById(btnId);
    button.setAttribute("disabled", "");
}

function displayPlayers() {
    const totalPlayers = document.getElementById("total-players");
    totalPlayers.innerText = selectedPlayersArray.length;
}

const players = {
    playerName: playerName
}

function addTopFive() {
    if (selectedPlayersArray.length >= 5) {
        const buttons = document.querySelectorAll('.btn-select');
        for (const button of buttons) {
            button.disabled = true;
        }
        // alert("You can't select more than 5 players!");
        // return;
    }
}

function commonFunction() {
    selectedPlayersArray.push(players);
    displayPlayers();
    addTopFive();
}

document.getElementById('player-1').addEventListener('click', function () {
    playerName('ronaldo');
    buttonDisabled('player-1');
    commonFunction();
});

document.getElementById('player-2').addEventListener('click', function () {
    playerName('haaland');
    buttonDisabled('player-2');
    commonFunction();
});

document.getElementById('player-3').addEventListener('click', function () {
    playerName('joshua');
    buttonDisabled('player-3');
    commonFunction();
});

document.getElementById('player-4').addEventListener('click', function () {
    playerName('bruyne');
    buttonDisabled('player-4');
    commonFunction();
});

document.getElementById('player-5').addEventListener('click', function () {
    playerName('mbappe');
    buttonDisabled('player-5');
    commonFunction();
});

document.getElementById('player-6').addEventListener('click', function () {
    playerName('messi');
    buttonDisabled('player-6');
    commonFunction();
});

document.getElementById('player-7').addEventListener('click', function () {
    playerName('salah');
    buttonDisabled('player-7');
    commonFunction();
});

document.getElementById('player-8').addEventListener('click', function () {
    playerName('neymar');
    buttonDisabled('player-8');
    commonFunction();
});

document.getElementById('player-9').addEventListener('click', function () {
    playerName('robert');
    buttonDisabled('player-9');
    commonFunction();
});

