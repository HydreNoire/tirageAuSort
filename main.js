let tabBase = [];
let namee = document.getElementById('nom-input')
let listName = document.getElementById('liste-ajout');
let i = 0;

document.getElementById('ajout-liste').addEventListener('click', addName)

function addName() {

    if (namee.value === tabBase[i]) {
        return alert('Vous avez dejà rentré ce nom !')
    }

    if (!namee.value.trim()) {
        return alert('Veuillez rentrer un nom !')
    }

    tabBase.push(namee.value)
    let itemName = document.createElement('li');
    itemName.classList.add('nom');
    listName.appendChild(itemName);
    itemName.innerText = namee.value;

    itemName.addEventListener('click', function () {
        this.remove()
        for (const key in tabBase) {
            if (tabBase.hasOwnProperty(key)) {
                console.log(this.innerText)
                const value = tabBase[key];

                if (this.innerText == value) {
                    tabBase.splice(key, 1)
                    console.log(tabBase)
                }
            }
        }
    })

    return namee.value = ''
}

namee.addEventListener('keypress', addNameListWithKeyboard)

function addNameListWithKeyboard(input) {
    if (input.keyCode == 13) {
        addName()
    }
}

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// ======================= Ajout aléatoire de groupes =======================//
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
        itemName.classList.add('groupLi');
        listGroup.appendChild(itemName);
        itemName.innerHTML = tabBis.splice(tabBis.length - inputNumber.value).concat(tabBis.splice(-1)).join("<br />");
    }

    do {
        let itemName = document.createElement('li');
        itemName.classList.add('groupLi');
        listGroup.appendChild(itemName);
        itemName.innerHTML = tabBis.splice(0, inputNumber.value).join("<br />");
    } while (tabBis.length > 0);

    document.getElementById('btn-groupe').setAttribute('disabled', 'disabled');
}

inputNumber.addEventListener('keypress', getGroupkeyboard);

function getGroupkeyboard(input) {
    if (input.keyCode == 13) {
        getGroup()
    }
}

// ======================= Ajout liste aléatoire =======================//
document.getElementById('btn-aleatoire').addEventListener('click', getRandomName)
let listRandomName = document.getElementById('liste-aleatoire');

function getRandomName() {
    let randomTab = Object.values(tabBase);
    shuffleArray(tabBase);

    for (i = 0; i < tabBase.length; i++) {
        let randomName = document.createElement('li');
        randomName.classList.add('groupList')
        listRandomName.appendChild(randomName);
        randomName.innerText = tabBase[i];
    }
    randomTab.splice(0, randomTab.length)

    document.getElementById("btn-aleatoire").setAttribute('disabled', 'disabled');
}