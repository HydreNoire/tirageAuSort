let tabName = [];
let namee = document.getElementById('nom-input');
let listName = document.getElementById('liste-ajout');

// ======================= Ajout des noms dans une liste =======================//
document.getElementById('ajout-liste').addEventListener('click', addNameList);

function addNameList() {
    tabName.push(namee.value);
    console.log(namee.value);
    let itemName = document.createElement('li');
    listName.appendChild(itemName);
    itemName.innerText = namee.value;
    console.log(tabName)

    return namee.value = "";
}

// ======================= Ajout aléatoire de groupes =======================//
let inputNumber = document.getElementById('nb-groupe');
let listGroup = document.getElementById('liste-groupe');

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

document.getElementById('btn-groupe').addEventListener('click', getGroup)

function getGroup() {
    const tabBis = tabName;
    // console.log(shuffle(tabBis))

    do {
        let itemName = document.createElement('li');
        listGroup.appendChild(itemName);
        itemName.innerText = tabBis.splice(0, 2);
    } while (tabBis.length > 0);
}
