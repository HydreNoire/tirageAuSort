let tabBase = [];
let namee = document.getElementById('nom-input')
let listName = document.getElementById('liste-ajout');
let i = 0;

addName = document.getElementById('ajout-liste').addEventListener('click', addNameListWithClick)

function addNameListWithClick() {
    if (namee.value === tabBase[i]) {
        return alert('Vous avez dejà rentré ce nom !')
    }

    if (!namee.value.trim()) {
        return alert('Veuillez rentrer un nom !')
    }
    tabBase.push(namee.value)
    let itemName = document.createElement('li');
    listName.appendChild(itemName);
    itemName.innerText = namee.value;

    return namee.value = ''
}

namee.addEventListener('keypress', addNameListWithKeyboard)

function addNameListWithKeyboard(input) {
    if (input.keyCode == 13) {
        addNameListWithClick()
    }
}

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}

let inputNumber = document.getElementById('nb-groupe');
let listGroup = document.getElementById('liste-groupe');

document.getElementById('btn-groupe').addEventListener('click', getGroup);

function getGroup() {
    let tabBis = Object.values(tabBase);
    shuffleArray(tabBis);

    if (!inputNumber.value) {
        return alert('Combien de personnes par groupe veux-tu ?')
    }

    if (!tabBis.length) {
        return alert('Les groupes sont faits')
    }

    if (tabBis.length % 2 != 0) {
        let itemName = document.createElement('li');
        listGroup.appendChild(itemName);
        itemName.innerText = tabBis.splice(tabBis.length - inputNumber.value).concat(tabBis.splice(-1));
    }

    do {
        let itemName = document.createElement('li');
        listGroup.appendChild(itemName);
        itemName.innerText = tabBis.splice(0, inputNumber.value).join(', ');
    } while (tabBis.length > 0);
    document.getElementById('btn-groupe').setAttribute("disabled", "disabled");
}

inputNumber.addEventListener('keypress', getGroupkeyboard);

function getGroupkeyboard(input) {
    if (input.keyCode == 13) {
        getGroup();
    }
}

document.getElementById('btn-aleatoire').addEventListener('click', getRandomName)
let listRandomName = document.getElementById('liste-aleatoire');

function getRandomName() {
    let randomTab = Object.values(tabBase);
    shuffleArray(tabBase);

    for (i = 0; i < tabBase.length; i++) {
        let randomName = document.createElement('li');
        randomName.classList.add('nom');
        listRandomName.appendChild(randomName);
        randomName.innerText = tabBase[i];
    }
    randomTab.splice(0, randomTab.length)
    document.getElementById('btn-aleatoire').setAttribute("disabled", "disabled");
}