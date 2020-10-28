
//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT
async function getStarWarsData() {
    const req = await fetch ('https://swapi.dev/api/people')
    const res = await req.json()

    return res 
}

var resultPromise = getStarWarsData();

resultPromise.then(function(result) {
    /*
    for( var r of result.results){
        return r.name
    }
    */

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

    a.innerHTML += "</ul>"
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
    console.log(testvariable.homeworld.results[testvariable].name)

});

getStarWarsData()
resultPromise
