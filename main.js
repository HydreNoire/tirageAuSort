let tabName = [];
let namee = document.getElementById('nom-input')
let listName = document.getElementById('liste-ajout');
let i = 0;


function addNameList() {
    tabName.push(namee.value);
    // console.log(namee.value);
    let itemName = document.createElement('li');
    listName.appendChild(itemName);
    itemName.innerText = namee.value;
    // console.log(tabName)

    return namee.value = "";
}

// ======================= Ajout aléatoire de groupes =======================//
let inputNumber = document.getElementById('nb-groupe');
let listGroup = document.getElementById('liste-groupe');

document.getElementById('btn-groupe').addEventListener('click', getGroup)

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
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



}
