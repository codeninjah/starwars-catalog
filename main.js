//CSS ANIMATIONS------------------------------------------------------------------
if(document.getElementsByClassName("planet-spec")[0].innerText.length == 0){
    document.getElementsByClassName("planet-spec")[0].classList.add("lds-ring")
}
else if(document.getElementsByClassName("planet-spec")[0].innerText.length > 0){
    document.getElementsByClassName("planet-spec")[0].classList.remove("lds-ring")
}
// -------------------------------------------------------------------------------------

// GLOBALA VARIABLER------------------------------------------------------------
let pageNum = 1 // Vi hämtar en character list från den första page som finns i API
let nombreTest = "Luke Skywalker" //Global funktion som vi använder för att hitta char Index



//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT------------------
async function getStarWarsData(page) {//Gjorde om så att funktionene tar emot ett page number variabel som parameter
    const req = await fetch (`https://swapi.dev/api/people/?page= + ${page}`) // här blir våran fetch dynamiskt beroende på vilken sida man vill fetcha
    const res = await req.json()
    return res
};
var resultPromise = getStarWarsData(pageNum);
// -----------------------------------------------------------------------------------



//------------------------------------FUNKTION SOM PRINTAR ALLA CHARACTERS!!!---------
async function print() { //Skapar en funktion som enbart printar en lista på characters
    let result = await getStarWarsData(pageNum) // Sparar listan på ett variabel "result"

    var a = document.getElementsByClassName("character")[0]
    a.innerHTML = "<ul>"

    for(var i = 0; i < result.results.length; i++){
        a.innerHTML += "<li>" + result.results[i].name + "</li>"
        if(i % 2 == 0) {
            document.getElementsByTagName("li")[i].classList.add("bg-color")
        }
    }
}
print()
//------------------------------------------------------------------------------------


// PRINTAR INFORMATION OM EN HÅRDKODAD CHARACTER------------------------------------
async function clickOnCharacter(charName) {
    let charInfo = await getStarWarsData(pageNum)// väntar på info från API

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
        }
    }
}
clickOnCharacter(nombreTest)
// ----------------------------------------------------------------------------------


        // console.log(info)
    // console.log('got result', result.results);

    //GRUNDEN FÖR BEARBETNINGEN KOD FÖR PLANETER- RUTAN
    // console.log("Planet")
    // console.log(testvariable.homeworld.results[testvariable].name)


//RESULTATEN ANGÅENDE PLANET
//FETCHAR IFRÅN PLANET API'ET
//BEHÖVS OM VI SKA HA KARAKTÄRERS HOMEWORLD
async function getStarWarsPlanet() {
    const reqplanet = await fetch ('https://swapi.dev/api/planets')
    const resplanet = await reqplanet.json()

    return resplanet
};

var homeworldPromise = getStarWarsPlanet();

homeworldPromise.then(function(result) {

    //LOOPAR IGENOM
    for(var i = 0; i < result.results.length; i++) {
        // console.log(result.results[i].name)
    }

});

getStarWarsData()
//resultPromise

getStarWarsPlanet() //
//homeworldPromise

//--------------------- KNAPPAR PREVIOUS AND NEXT---------------------
function nextPage() {
    if (pageNum < 9) {
        pageNum++
    }else{
        pageNum = 1 // När man kommer till sista sidan kommer den att returnera dig till första
    }
    getStarWarsData(pageNum)
    print()
    console.log(pageNum)
 }
        

 function previousPage() {
    if (pageNum > 1) {
        pageNum-- // När man inte kan backa mer kommer den att skicka dig till sista sidan
    }else{
        pageNum = 9
    }
    getStarWarsData(pageNum)
    print()
    console.log(pageNum)
}
