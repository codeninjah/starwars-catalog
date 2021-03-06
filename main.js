// GLOBALA VARIABLER------------------------------------------------------------
let pageNum = 1 // Vi hämtar en character list från den första page som finns i API:n

//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT------------------
async function getStarWarsData(page) {//Gjorde om så att funktionerna tar emot ett page-number variabel som parameter
    const req = await fetch (`https://swapi.dev/api/people/?page= + ${page}`) // här blir våran fetch dynamiskt beroende på vilken sida man vill fetcha
    const res = await req.json()
    return res
};

//------------------------------------FUNKTION SOM PRINTAR ALLA CHARACTERS!!!---------
async function print() { //Skapar en funktion som printar en lista på characters 
    document.querySelector(".planet").classList.add("darker-color-btn")

    document.querySelector(".characters-list-wrapper").classList.remove("hidden")// visar preloader --> Här kan man ändra olika preloaders
    document.querySelector(".character").classList.add("hidden")
    let result = await getStarWarsData(pageNum) // Sparar listan på ett variabel "result"
    
    var a = document.getElementsByClassName("character")[0]
    a.innerHTML = "<ul>"
    
    for(var i = 0; i < result.results.length; i++){
        a.innerHTML += "<li>" + result.results[i].name + "</li>"
        if(i % 2 == 0) {
            document.getElementsByTagName("li")[i].classList.add("bg-color")
        }
    }
    
    // Vi lägger till en eventlistener här:
    let charInfo = document.querySelectorAll(".character li")
    for (let i = 0; i < charInfo.length; i++) {
        charInfo[i].addEventListener("click", function(){
            clickOnCharacter(charInfo[i].innerText)
        })
    }
    document.querySelector(".characters-list-wrapper").classList.add("hidden") //döljer preloader
    document.querySelector(".character").classList.remove("hidden")
}
print()

//---------------------HÄMTAR PLANETENS DATA-----------------------------------------
async function getStarWarsPlanets(currentP) {

    document.querySelector(".lsd-ring-planet-info").classList.remove("hidden")
    document.querySelector(".planet-spec").classList.add("hidden")

    const req = await fetch (`https://swapi.dev/api/planets/ + ${currentP}`)
    const planetJson = await req.json()
    
    document.querySelector(".lsd-ring-planet-info").classList.add("hidden")
    document.querySelector(".planet-spec").classList.remove("hidden")
    return planetJson
};

//---------------------TEST FÖR ATT HÄMTA ÖVRIG DATA---------------------------------
//---------------------HÄMTAR SPECIES DATA-----------------------------------------
async function getStarWarsSpecies(currentS) {

    document.querySelector(".lsd-ring-planet-info").classList.remove("hidden")
    document.querySelector(".planet-spec").classList.add("hidden")

    const req = await fetch (`https://swapi.dev/api/species/ + ${currentS}`)
    const specieJson = await req.json()
    
    document.querySelector(".lsd-ring-planet-info").classList.add("hidden")
    document.querySelector(".planet-spec").classList.remove("hidden")
    return specieJson
};

//-----------------HÄMTAR VEHICLES DATA -------------------------------------
async function getStarWarsVehicles(currentV) {

    document.querySelector(".lsd-ring-planet-info").classList.remove("hidden")
    document.querySelector(".planet-spec").classList.add("hidden")

    const req = await fetch (`https://swapi.dev/api/vehicles/ + ${currentV}`)
    const vehicleJson = await req.json()
    
    document.querySelector(".lsd-ring-planet-info").classList.add("hidden")
    document.querySelector(".planet-spec").classList.remove("hidden")
    return vehicleJson
};
//-----------------HÄMTAR VEHICLES DATA -------------------------------------
async function getStarWarsStarships(currentSS) {

    document.querySelector(".lsd-ring-planet-info").classList.remove("hidden")
    document.querySelector(".planet-spec").classList.add("hidden")

    const req = await fetch (`https://swapi.dev/api/starships/ + ${currentSS}`)
    const shipJson = await req.json()
    
    document.querySelector(".lsd-ring-planet-info").classList.add("hidden")
    document.querySelector(".planet-spec").classList.remove("hidden")
    return shipJson
};

//------------------SLUT PÅ FÖRSÖK ATT HÄMTA TESTDATA --------------------


// PRINTAR INFORMATION OM EN CHARACTER------------------------------------
async function clickOnCharacter(charName) {
    let currentPlanet = ""
    let planetId;

    //HÄR FÖLJER VARIABLER FÖR ATT FIXA TILL DE ÖVRIGA TABBARNA
    let currentSpecies = ""
    let speciesId;

    let currentVehicles = ""
    let currentId;

    let currentStarships = ""
    let starshipsId;
    //SLUT PÅ TEST VARIABLARNA

    document.querySelector(".lsd-ring-char-info").classList.remove("hidden")
    document.querySelector(".character-spec").classList.add("hidden")
    
    let charInfo = await getStarWarsData(pageNum)// väntar på info från API
    
    var b = document.getElementsByClassName("character-spec")[0]//Rensar rutan innan man printar nästa characters info
    b.innerHTML = ""
    
    for (let i = 0; i < charInfo.results.length; i++){//loopar igenom hela character listan 
        if (charName == charInfo.results[i].name) {// söker efter en match
            var b = document.getElementsByClassName("character-spec")[0]
            //När den hittar en match använder vi oss av dess index för att hämta resterande data
            b.innerHTML += "<p>" + charInfo.results[i].name + "</p>"
            b.innerHTML += "<p>" + "Height: " + charInfo.results[i].height + "</p>"
            b.innerHTML += "<p>" + "Mass: " + charInfo.results[i].mass + "</p>"
            b.innerHTML += "<p>" + "Hair color: " + charInfo.results[i].hair_color + "</p>"
            b.innerHTML += "<p>" + "Skin color: " + charInfo.results[i].skin_color + "</p>"
            b.innerHTML += "<p>" + "Eye color: " + charInfo.results[i].eye_color + "</p>"
            b.innerHTML += "<p>" + "Birth_year: " + charInfo.results[i].birth_year + "</p>"
            b.innerHTML += "<p>" + "Gender: " + charInfo.results[i].gender + "</p>"
            currentPlanet = charInfo.results[i].homeworld
        }
    }
        
    
    planetId = currentPlanet.split("/")
    planetId = planetId[planetId.length - 2]
        

    let planetInfo = await getStarWarsPlanets(planetId)
   
    var c = document.getElementsByClassName("planet-spec")[0]
    c.innerHTML = ""
    for (let i = 0; i < charInfo.results.length; i++){
        if (charName == charInfo.results[i].name) {
            var c = document.getElementsByClassName("planet-spec")[0]//När den hittar en match använder vi oss av dess index för att hämta resterande data
            
            c.innerHTML += "<p>" + planetInfo.name + "</p>"
            c.innerHTML += "<p>" + "Rotation period: " + planetInfo.rotation_period + "</p>"
            c.innerHTML += "<p>" + "Orbital period: " + planetInfo.orbital_period + "</p>"
            c.innerHTML += "<p>" + "Diameter: " + planetInfo.diameter + "</p>"
            c.innerHTML += "<p>" + "Climate: " + planetInfo.climate + "</p>"
            c.innerHTML += "<p>" + "Gravity: " + planetInfo.gravity + "</p>"
            c.innerHTML += "<p>" + "Terrain: " + planetInfo.terrain + "</p>"
        }
    }

    document.querySelector(".lsd-ring-char-info").classList.add("hidden")
    document.querySelector(".character-spec").classList.remove("hidden")
}

//--------------------- KNAPPAR PREVIOUS AND NEXT---------------------
const leftbtn = document.querySelectorAll("button")[1]
leftbtn.addEventListener('click', function(){
    if (pageNum < 9) {
        pageNum++
    }else{  // När man kommer till sista sidan kommer den att returnera dig till första
        pageNum = 1 
    }
    getStarWarsData(pageNum)
    print()
    document.querySelector("p .current-page").innerHTML = pageNum
})
      
const rightbtn = document.querySelectorAll("button")[0]
rightbtn.addEventListener('click', function(){
    if (pageNum > 1) {
        pageNum-- 
    }else{// När man inte kan backa mer kommer den att skicka dig till sista sidan
        pageNum = 9
    }
    getStarWarsData(pageNum)
    print()
    document.querySelector("p .current-page").innerHTML = pageNum
})
