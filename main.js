let tabName = [];
let namee = document.getElementById('nom-input')
let listName = document.getElementById('liste-ajout');
let i = 0;


addName = document.getElementById('ajout-liste').addEventListener('click', addNameListWithClick)
    //   namee.addEventListener('keypress', addNameList)

function addNameListWithClick() {

    if (namee.value === tabName[i]) {

        return alert('Vous avez dejà rentré ce nom !')
    }

    if (!namee.value.trim()) {
        return alert('Veuillez rentrer un nom !')
    }
    tabName.push(namee.value)
    let itemName = document.createElement('li');
    listName.appendChild(itemName);
    itemName.innerText = namee.value;
    //   console.log(tabName);

    return namee.value = ''
}

namee.addEventListener('keypress', addNameListWithKeyboard)

function addNameListWithKeyboard(input) {

    if (input.keyCode == 13) {
        if (namee.value === tabName[i]) {

            return alert('Vous avez dejà rentré ce nom !')
        }

        if (!namee.value.trim()) {
            return alert('Veuillez rentrer un nom !')
        }
        tabName.push(namee.value)
        let itemName = document.createElement('li');
        listName.appendChild(itemName);
        itemName.innerText = namee.value
        namee.value == '';
        //   console.log(tabName);
        //   console.log(itemName.innerText)
        return namee.value = ''


    }


}

// ======================= Ajout aléatoire de groupes =======================//
let inputNumber = document.getElementById('nb-groupe');
let listGroup = document.getElementById('liste-groupe');

document.getElementById('btn-groupe').addEventListener('click', getGroup)
document.getElementById('btn-aleatoire').addEventListener('click', getRandomName)

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}



function getRandomName() {
    let listRandomName = document.getElementById('liste-aleatoire');
    let randomTab = tabName;
    shuffleArray(tabName)
    for (i = 0; i < tabName.length; i++) {

        let randomName = document.createElement('li');
        listRandomName.appendChild(randomName);
        randomName.innerText = tabName[i]
    }
    randomTab.splice(0, tabName.length)

    console.log(randomTab + "Duplicata")
    console.log(tabName + 'TabName')


    //   console.log(shuffle(tabName[i]))
}

function getGroup() {
    const tabBis = tabName;
    shuffleArray(tabBis);
    // console.log(tabBis);
    // console.log(tabName);

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


    // function shuffleArray(array) {
    //     array.sort(() => Math.random() - 0.5)
    // }

}