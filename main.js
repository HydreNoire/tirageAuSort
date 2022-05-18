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




  ////////////////////////////////////////////////////////////////////////////////////////////////


  btnRandomList = document.getElementById('btn-aleatoire').addEventListener('click', getRandomName)

  function getRandomName() {
      let listRandomName = document.getElementById('liste-aleatoire');
      let randomTab = tabName;
      shuffle(tabName)
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


  function shuffle(array) {
      array.sort(() => Math.random() - 0.5)
  }

  //   let numbers = [1, 2, 3, 4, 5]
  //   shuffle(numbers)
  //   console.log(numbers)