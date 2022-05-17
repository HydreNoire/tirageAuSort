  let tabName = [];
  let namee = document.getElementById('nom-input')
  let listName = document.getElementById('liste-ajout');
  let i = 0;


  addName = document.getElementById('ajout-liste').addEventListener('click', addNameList)

  function addNameList() {
      tabName.push(namee.value)
      let itemName = document.createElement('li');
      listName.appendChild(itemName);
      itemName.innerText = namee.value
      console.log(tabName);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////


  btnRandomList = document.getElementById('btn-aleatoire').addEventListener('click', getRandomName)

  function getRandomName() {


      for (i = 0; i < tabName.length; i++) {
          let listRandomName = document.getElementById('liste-aleatoire');
          let randomName = document.createElement('li');
          listRandomName.appendChild(randomName);
          let randomElement = Math.floor(Math.random() * tabName.length)
          randomName.innerText = tabName[randomElement]
      }
  }






  //   let getRandomList = document.getElementById('btn-aleatoire')
  //   let randomList = document.getElementById('liste-aleatoire')