function getInputFieldValueById(elementId) {
    const inputFieldValue = document.getElementById(elementId);
    const currentInputValueString = inputFieldValue.value;
    const currentInputValue = parseFloat(currentInputValueString);
    return currentInputValue;
}

function playerExpenses() {
    const perPlayerBuget = getInputFieldValueById('pp-input');
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = perPlayerBuget * 5;
    return playerExpenses;
}

document.getElementById('btn-calc').addEventListener('click', function () {
    playerExpenses();
});

document.getElementById('btn-total').addEventListener('click', function () {
    const managerCost = getInputFieldValueById('manager-input');
    const coachCost = getInputFieldValueById('coach-input');
    const playerExpensesTotalString = playerExpenses().innerText;
    const playerExpensesTotal = parseFloat(playerExpensesTotalString);
    const totalExpenses = playerExpensesTotal + managerCost + coachCost;
    const totalExpensesField = document.getElementById('total-expenses');
    totalExpensesField.innerText = totalExpenses;
});