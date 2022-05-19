let tabBase = [];
let namee = document.getElementById('nom-input')
let listName = document.getElementById('liste-ajout');
let i = 0;


addName = document.getElementById('ajout-liste').addEventListener('click', addNameListWithClick)
    //   namee.addEventListener('keypress', addNameList)

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
    //   console.log(tabBase);

    return namee.value = ''


}

namee.addEventListener('keypress', addNameListWithKeyboard)

function addNameListWithKeyboard(input) {

    if (input.keyCode == 13) {
        if (namee.value === tabBase[i]) {

            return alert('Vous avez dejà rentré ce nom !')
        }

        if (!namee.value.trim()) {
            return alert('Veuillez rentrer un nom !')
        }
        tabBase.push(namee.value)
        let itemName = document.createElement('li');
        listName.appendChild(itemName);
        itemName.innerText = namee.value
        itemName.addEventListener('click', function() {
            this.remove()
                // console.log(this.innerText);
                // console.log(valueTab)
            for (const key in tabBase) {
                if (tabBase.hasOwnProperty(key)) {
                    console.log(this.innerText)
                    const value = tabBase[key];

                    if (this.innerText == value) {
                        tabBase.splice(key, 1)
                        console.log(tabBase)
                    }
                    // console.log(value)

                }
            }
            // if (valueTab.id === this.innerText) {
            //     tabBase.splice(this, 1)
            //     console.log(tabBase)
            // }
        })

        return namee.value = ''
    }

}

function deleteLi() {

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
        listGroup.appendChild(itemName);
        itemName.innerText = tabBis.splice(tabBis.length - inputNumber.value).concat(tabBis.splice(-1));
    }

    do {
        let itemName = document.createElement('li');
        listGroup.appendChild(itemName);
        itemName.innerText = tabBis.splice(0, inputNumber.value).join(', ');
    } while (tabBis.length > 0);

    // console.log(tabBase);
    // console.log(tabBis[1]);
}

inputNumber.addEventListener('keypress', getGroupkeyboard);

function getGroupkeyboard(input) {
    if (input.keyCode == 13) {
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
        randomName.classList.add('nom');
        listRandomName.appendChild(randomName);
        randomName.innerText = tabBase[i];
    }
    randomTab.splice(0, randomTab.length)


    // console.log(randomTab)
    // console.log(tabBase)
}

// document.querySelectorAll('nom').innerText = tabBase[i]