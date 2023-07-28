function getUniqueTypes(pokedex) {
    const typesArray = []
    for (let i = 0; i < pokedex.length; i++) {
      for (let j = 0; j < pokedex[i].type.length; j++) {
        if (!typesArray.includes(pokedex[i].type[j])) {
          typesArray.push(pokedex[i].type[j])
        }
      }
    }
    return typesArray
  }
  
  const uniqueTypes = getUniqueTypes(pokedex)



  function createNavBar(types) {
    if (types && types.length > 0) {
      types.sort()
      const navBar = document.createElement('nav')
      const navList = document.createElement('ul')

    for (let i = 0; i < types.length; i++) {
        const listItem = document.createElement('li')
        const link = document.createElement('a')
  
        link.textContent = types[i]
        link.href = '#' + types[i].toLowerCase()
  
        listItem.appendChild(link)
        navList.appendChild(listItem)
      }
  
      navBar.appendChild(navList)
      document.body.insertBefore(navBar, document.body.firstChild)
      
    }
   
  }
  
  const navBar = createNavBar(uniqueTypes)
  
  



  function createPokemonCards(pokedex, uniqueTypes) {
    const pokemonContainer = document.getElementById("pokemon-container")
  
    for (let i = 0; i < uniqueTypes.length; i++) {
      const type = uniqueTypes[i]
      const pokemonOfType = []
      let totalHP = 0
      let totalAttack = 0
  
      for (let j = 0; j < pokedex.length; j++) {
        const pokemon = pokedex[j]
        if (pokemon.type.includes(type)) {
          pokemonOfType.push(pokemon)
          totalHP += pokemon.base.HP
          totalAttack += pokemon.base.Attack
        }
      }
  
      pokemonOfType.sort(function(a, b) {
        return a.name.localeCompare(b.name)
      })
  
      const typeSection = document.createElement("section")
      typeSection.id = type.toLowerCase()
      typeSection.innerHTML =
        "<h2>" +
        type +
        " (" +
        pokemonOfType.length +
        ")</h2>" +
        "<h3>Total HP:" +
        totalHP +
        "|" + 
        "Total Attrack:" +
        totalAttack +
        "</h3>"
        
      pokemonContainer.appendChild(typeSection)
  
      for (let j = 0; j < pokemonOfType.length; j++) {
        const pokemon = pokemonOfType[j];
        const pokemonCard = document.createElement("div")
        pokemonCard.classList.add("pokemon-card")
        pokemonCard.innerHTML =
          '<a href="https://www.pokemon.com/us/pokedex/' +
          pokemon.name.toLowerCase() +
          '" target="_blank"><img src="' +
          pokemon.sprite +
          '" alt="' +
          pokemon.name +
          '" /></a>' +
          "<h3>" +
          pokemon.name +
          "</h3>" +
          "<p>HP: " +
          pokemon.base.HP +
          "</p>" +
          "<p>Attack: " +
          pokemon.base.Attack +
          "</p>" +
          "<p>Defense: " +
          pokemon.base.Defense +
          "</p>" +
          "<p>Sp. Attack: " + 
          pokemon.base['Sp. Attack'] +
           "</p>" +
           "<p>Sp. Defense: " + 
          pokemon.base['Sp. Defense'] +
           "</p>" +
           "<p>Speed:" +
           pokemon.base.Speed
           "</p>"

    
        const section = document.getElementById(type.toLowerCase())
        section.appendChild(pokemonCard)
        
      }
    }
  }
  

  createPokemonCards(pokedex, uniqueTypes) 