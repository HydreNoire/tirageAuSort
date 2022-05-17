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

    // console.log(tabName);
    // console.log(itemName.innerText)
}

// ======================= Ajout aléatoire de groupes =======================//
let inputNumber = document.getElementById('nb-groupe');
let listGroup = document.getElementById('liste-groupe');

document.getElementById('btn-groupe').addEventListener('click', getGroup)

function getGroup() {
    for (let i = 0; i < tabName.length; i++) {
        let randomNumber = Math.floor(Math.random() * tabName.length)
        let itemGroup = document.createElement('div');
        listGroup.appendChild(itemGroup);
        itemGroup.innerText = tabName[randomNumber];
    }

}