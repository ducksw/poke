async function poke() {
  let input = document.getElementById('input').value.toLowerCase().trim()
  let res = document.getElementById('res')
  let res2 = document.getElementById('res2')

  const NAME = "snorlax"
  const URL = `https://pokeapi.co/api/v2/pokemon/${input}`
  const pet = await fetch(URL)
  const data = await pet.json()

  const info = data.forms
  const info2 = data.sprites

  if (Array.isArray(info)) {
    info.forEach((aea) => {
      let name = aea.name.toUpperCase()
      res.innerHTML = `
      <h1>${name}</h1>
      `
    })
  }

  if (info2) {
    let sprite = info2.front_default
    res2.innerHTML = `
      <img src="${sprite}">
    `
  } else {
    alert("COLOCA NOMBRES DE POKEMONES")
    console.error("error")
  }

  //console.log(data)
  //console.log(info)

  document.getElementById('input').value = ""
}

document.getElementById('input').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    poke();
  }
});

