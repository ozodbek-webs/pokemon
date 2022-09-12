"use strict"
const group = document.querySelector(".groupPokemon"),
    mask = document.querySelector(".btnbutton"),
    main = document.querySelector("main"),
    mane = document.querySelector(".mane"),
    close = document.querySelector(".close"),
    sevimli = document.querySelector(".pokemonMask"),
    sevimlik = document.querySelector(".maSK"),
    body = document.querySelector("body")
console.log(sevimli);

pokemons.forEach((e) => {
    const poke = document.createElement('div')
    poke.innerHTML = `<div class="pokemon">
    <img src="${e.img}" alt="Pokemons" class="pokemons">
    <div class="chiziq"></div>
    <h2>${e.name}</h2>
    <h5>${e.type[0]}, ${e.type[1]}</h5>
    <img src="./images/Mask.png" alt="Mask" class="maSK sevimli">
    <div class="flex"><h2>${e.weight}</h2><h2>${e.height}</h2></div>
</div>`
    group.appendChild(poke)
})

{/* <div class="drop">
        <button class="close"><img src="./images/Mask1.png" alt=""></button>
        <div class="pokemonMask pokemon">
            <img src="https://picsum.photos/id/25/157/157" alt="Pokemons" class="pokemons">
            <div class="chiziq"></div>
            <h2>Pokemons</h2>
            <h5>Grass, Poison</h5>
            <img src="./images/Mask2.png" alt="Mask" class="maSK">
            <div class="flex"><h2>6.9 kg</h2><h2>99 age</h2></div>
            </div>
    </div> */}

mask.addEventListener("click", () => {
    main.style.opacity = "0.1";
    mane.style.display = "flex";
})

close.addEventListener("click", () => {
    main.style.opacity = "1";
    mane.style.display="none";
})

sevimlik.addEventListener("click",(e)=>{
    sevimli.style.display="none";
})