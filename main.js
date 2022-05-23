let tabBase = [];
// let namee = document.getElementById('nom-input')
// let listName = document.getElementById('liste-ajout');
let i = 0;
let mainContent = document.getElementById('main-content')


// AddName //
window.addEventListener("DOMContentLoaded", () => {
    fetch('addName.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            let mainContent = document.getElementById('main-content')
            mainContent.innerHTML = html.toString();
            let addToList = document.getElementById('ajout-liste')
            let namee = document.getElementById('nom-input')
            var listRandomName = document.getElementById('liste-aleatoire');
            addToList.addEventListener('click', function() {
                addName()
            })
            namee.addEventListener('keypress', addNameListWithKeyboard)
                // let btnRandomList = document.getElementById('btn-aleatoire');

        })
        .catch(function(err) {
            console.log('Failed to fetch page: ', err);
        });
})



mainContent.addEventListener('click', (e) => {
    if (e.target.id == "btn-aleatoire") {

        fetch('randomList.html')
            .then(function(response) {
                // 
                return response.text();
            })
            .then(function(html) {
                // console.log(html)
                let mainContent = document.getElementById('main-content')
           

                // console.log(mainContent.contains(ol))
                
                e.target.addEventListener('click', function() {
                    console.log('Hello')
                let randomTab = Object.values(tabBase);
                shuffleArray(tabBase);
                mainContent.innerHTML = html.toString();

                for (i = 0; i < tabBase.length; i++) {
                    
                    let listRandomName = document.getElementById('liste-aleatoire');
                    let randomName = document.createElement('li');
                    randomName.classList.add('groupList')
                    listRandomName.appendChild(randomName);
                    randomName.innerText = tabBase[i];
                }
                randomTab.splice(0, randomTab.length)

                // document.getElementById("btn-aleatoire").setAttribute('disabled', 'disabled');
                            })


            })
            .catch(function(err) {
                console.log('Failed to fetch page: ', err);
            });
    }

    if(e.target == "btn-display-lightbox") {
        document.getElementById('btn-display-lightbox').addEventListener('click', function() {
            
        });
        
    }
})



// mainContent.addEventListener('click', (e) => {
   
//     if (e.target.id == "btn-aleatoire") {
//          fetch('randomGroup.html')
//         .then(function(response) {
//             return response.text();
//         })
//         .then(function(html) {
//             let mainContent = document.getElementById('main-content')
//             let addToList = document.getElementById('ajout-liste')
//             mainContent.innerHTML = html.toString();
//             addToList.addEventListener('click', addName)


//         })
//         .catch(function(err) {
//             console.log('Failed to fetch page: ', err);
//         });
// })

// window.addEventListener("DOMContentLoaded", () => {
//     fetch('lightbox.html')
//         .then(function(response) {
//             return response.text();
//         })
//         .then(function(html) {
//             let mainContent = document.getElementById('main-content')
//             let addToList = document.getElementById('ajout-liste')
//             mainContent.innerHTML = html.toString();
//             addToList.addEventListener('click', addName)


//         })
//         .catch(function(err) {
//             console.log('Failed to fetch page: ', err);
//         });
// })


// namee.addEventListener('keypress', addNameListWithKeyboard)

// function addNameListWithKeyboard(input) {
//     if (input.keyCode == 13) {
//         addName()
//     }
// }

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// // ======================= Ajout aléatoire de groupes =======================//
// let inputNumber = document.getElementById('nb-groupe');
// let listGroup = document.getElementById('liste-groupe');


// document.getElementById('btn-groupe').addEventListener('click', getGroup);

function addName(namee) {

    // console.log(namee)


    if (namee.value === tabBase[i]) {
        return alert('Vous avez dejà rentré ce nom !')
    }

    if (!namee.value.trim()) {
        return alert('Veuillez rentrer un nom !')
    }
    let listName = document.getElementById('liste-ajout');
    tabBase.push(namee.value)
    let itemName = document.createElement('li');
    // console.log(itemName)
    itemName.classList.add('nom');
    listName.appendChild(itemName);
    itemName.innerText = namee.value;

    itemName.addEventListener('click', function() {
        this.remove()
        for (const key in tabBase) {
            if (tabBase.hasOwnProperty(key)) {
                // console.log(this.innerText)
                const value = tabBase[key];

                if (this.innerText == value) {
                    tabBase.splice(key, 1)
                        // console.log(tabBase)
                }
            }
        }
    })

    return namee.value = ''
}

function addNameListWithKeyboard(input) {
    if (input.keyCode == 13) {
        addName(this)
    }
}

function getRandomName() {
    console.log('Hello')
    let randomTab = Object.values(tabBase);
    shuffleArray(tabBase);

    for (i = 0; i < tabBase.length; i++) {
        let listRandomName = document.getElementById('liste-aleatoire');
        let randomName = document.createElement('li');
        randomName.classList.add('groupList')
        listRandomName.appendChild(randomName);
        randomName.innerText = tabBase[i];
    }
    randomTab.splice(0, randomTab.length)

    document.getElementById("btn-aleatoire").setAttribute('disabled', 'disabled');
}


function displayLightbox() {
    document.getElementById('lightbox').style.display = "block";
}



// function getGroup() {
//     console.log(inputNumber.value)
//     document.getElementById('lightbox').style.display = "none";
//     let tabBis = Object.values(tabBase);
//     shuffleArray(tabBis);

//     if (!inputNumber.value) {
//         return alert('Combien de personnes par groupe veux-tu ?')
//     }

//     if (!tabBis.length) {
//         return alert('Les groupes sont faits')
//     }

//     if (tabBis.length % 2 != 0) {
//         let itemName = document.createElement('li');
//         listGroup.appendChild(itemName);
//         itemName.innerText = tabBis.splice(tabBis.length - inputNumber.value).concat(tabBis.splice(-1));
//     }

//     do {
//         let itemName = document.createElement('li');
//         listGroup.appendChild(itemName);
//         itemName.innerText = tabBis.splice(0, inputNumber.value).join(', ');
//     } while (tabBis.length > 0);
// }

// inputNumber.addEventListener('keypress', getGroupkeyboard);

// function getGroupkeyboard(input) {
//     if (input.keyCode == 13) {
//         getGroup()
//     }
// }

// // ======================= Ajout liste aléatoire =======================//
// document.getElementById('btn-aleatoire').addEventListener('click', getRandomName)
// let listRandomName = document.getElementById('liste-aleatoire');

