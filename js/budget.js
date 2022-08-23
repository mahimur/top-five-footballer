function getInputFieldValueById(elementId) {
    const inputFieldValue = document.getElementById(elementId);
    const currentInputValueString = inputFieldValue.value;
    const currentInputValue = parseFloat(currentInputValueString);
    return currentInputValue;
}

document.getElementById('btn-calc').addEventListener('click', function () {
    const perPlayerBuget = getInputFieldValueById('pp-input');
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = perPlayerBuget * 5;
});