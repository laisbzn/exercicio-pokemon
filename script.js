async function executar(){

   const elementoInput = document.getElementById("idPokemon")
   const idPokemon = elementoInput.value

   const url = "https://pokeapi.co/api/v2/pokemon/" + idPokemon

   const retornpApi = await fetch(url)
   const pokemon = await retornpApi.json()

   const elementoNome = document.getElementById("nomePokemon")
   elementoNome.innerHTML = pokemon.name

   const elementoImage = document.getElementById("imgPokemon")
   elementoImage.src = pokemon.sprites.front_default
   
   
}