
//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT
async function getStarWarsData() {
    const req = await fetch ('https://swapi.dev/api/films')
    const res = await req.json()

    return res
    
}

var resultPromise = getStarWarsData();

resultPromise.then(function(result) {
    for( var r of result.results){
        return r
    }
    // console.log('got result', result.results);
});

console.log(getStarWarsData());
