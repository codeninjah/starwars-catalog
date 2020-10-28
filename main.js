
//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT
async function getStarWarsData() {
    const req = await fetch ('https://swapi.dev/api/films')
    const res = await req.json()
    // console.log(res.results);

    return res
    
}

var resultPromise = getStarWarsData();

let abc = resultPromise.then(function(result) {
    for( var i = 0; i< result.results.length; i++){
        console.log(result.results[i].name);
    }
    // console.log('got result', result.results);
});

console.log(resultPromise);
