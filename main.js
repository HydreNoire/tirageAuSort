let tabName = [];
let namee = document.getElementById('nom-input');
let listName = document.getElementById('liste-ajout');

// ======================= Ajout des noms dans une liste =======================//
document.getElementById('ajout-liste').addEventListener('click', addNameList);

function addNameList() {
    tabName.push(namee.value);
    let itemName = document.createElement('li');
    listName.appendChild(itemName);
    itemName.innerText = namee.value;

    console.log(tabName);
}