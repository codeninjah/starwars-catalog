//CSS ANIMATIONS
if(document.getElementsByClassName("planet-spec")[0].innerText.length == 0){
    document.getElementsByClassName("planet-spec")[0].classList.add("lds-ring")
}
else if(document.getElementsByClassName("planet-spec")[0].innerText.length > 0){
    document.getElementsByClassName("planet-spec")[0].classList.remove("lds-ring")
}




//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT
let pageNum = 1
async function getStarWarsData(page) {
    const req = await fetch (`https://swapi.dev/api/people/?page= + ${page}`)
    const res = await req.json()
    return res
};
var resultPromise = getStarWarsData(pageNum);



//------------------------------------FUNKTION SOM PRINTAR ALLA CHARACTERS!!!---------
async function print() {
    let result = await getStarWarsData(pageNum)

    var a = document.getElementsByClassName("character")[0]
    a.innerHTML = "<ul>"

    for(var i = 0; i < result.results.length; i++){
        // console.log(result.results[i].name)
        a.innerHTML += "<li>" + result.results[i].name + "</li>"
        if(i % 2 == 0) {
            document.getElementsByTagName("li")[i].classList.add("bg-color")
        }
    }
}
print()

//----------------------------------
resultPromise.then(function(result) {
    // KARAKTÄR KOLUMNEN
    // var a = document.getElementsByClassName("character")[0]
    // a.innerHTML = "<ul>"

    // for(var i = 0; i < result.results.length; i++){
    //     // console.log(result.results[i].name)
    //     a.innerHTML += "<li>" + result.results[i].name + "</li>"
    //     if(i % 2 == 0) {
    //         document.getElementsByTagName("li")[i].classList.add("bg-color")
    //     }
    // }
 

   // PRINTAR INFORMATION OM EN HÅRDKODAD CHARACTER
let nombreTest = "Luke Skywalker"
async function clickOnCharacter(charName) {
    let charInfo = await getStarWarsData(pageNum)
    // console.log(charInfo.results)
    for (let i = 0; i < charInfo.results.length; i++) {
        console.log(charInfo.results[i].name)
        if (charName == charInfo.results[i].name) {
            var b = document.getElementsByClassName("character-spec")[0]
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
    // a.innerHTML += "</ul>"

    //SLUT PÅ KARAKTÄRS RUTAN

        // TEST FÖR DETAILS RUTAN
        var testvariable = result.results[8]

        var height = testvariable.height
        var mass = testvariable.mass
        var hair_color = testvariable.hair_color
        var skin_color = testvariable.skin_color
        var eye_color = testvariable.eye_color
        var birth_year = testvariable.birth_year
        var gender = testvariable.gender

        var info = height + " " + mass + " " + hair_color
        info += " " + skin_color + " " + eye_color + " "
        info += birth_year + " " + gender


        // console.log(info)
    // console.log('got result', result.results);

    //GRUNDEN FÖR BEARBETNINGEN KOD FÖR PLANETER- RUTAN
    // console.log("Planet")
    // console.log(testvariable.homeworld.results[testvariable].name)

});


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
        pageNum = 1
    }
    getStarWarsData(pageNum)
    print()
    console.log(pageNum)
 }
        

 function previousPage() {
    if (pageNum > 1) {
        pageNum--
    }else{
        pageNum = 9
    }
    getStarWarsData(pageNum)
    print()
    console.log(pageNum)
}
