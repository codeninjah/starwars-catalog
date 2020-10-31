
//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT
async function getStarWarsData() {
    const req = await fetch ('https://swapi.dev/api/people')
    const res = await req.json()

    return res 
};

var resultPromise = getStarWarsData();



resultPromise.then(function(result) {
    // KARAKTÄR KOLUMNEN
    var a = document.getElementsByClassName("character")[0]
    a.innerHTML = "<ul>"

    for(var i = 0; i < result.results.length; i++){
        console.log(result.results[i].name)
        a.innerHTML += "<li>" + result.results[i].name + "</li>"
        if(i % 2 == 0) {
            document.getElementsByTagName("li")[i].classList.add("bg-color")
        }
    }
    // PRINTAR INFORMATION OM EN HÅRDKODAD CHARACTER
    var b = document.getElementsByClassName("character-spec")[0]
    b.innerHTML += "<p>" + result.results[0].name + "</p>"
    b.innerHTML += "<p>" + "Height: " + result.results[0].height + "</p>"
    b.innerHTML += "<p>" + "Mass: " + result.results[0].mass + "</p>"
    b.innerHTML += "<p>" + "Hair color: " + result.results[0].hair_color + "</p>"
    b.innerHTML += "<p>" + "Skin color: " + result.results[0].skin_color + "</p>"
    b.innerHTML += "<p>" + "Eye color: " + result.results[0].eye_color + "</p>"
    b.innerHTML += "<p>" + "Birth_year: " + result.results[0].birth_year + "</p>"
    b.innerHTML += "<p>" + "Gender: " + result.results[0].gender + "</p>"
    

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


        console.log(info)
    // console.log('got result', result.results);

    //GRUNDEN FÖR BEARBETNINGEN KOD FÖR PLANETER- RUTAN
    console.log("Planet")
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
        console.log(result.results[i].name)
    }

});

getStarWarsData()
//resultPromise

getStarWarsPlanet() //
//homeworldPromise
