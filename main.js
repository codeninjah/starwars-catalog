
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
    
    // console.log('got result', result.results);
});

getStarWarsData()
resultPromise
