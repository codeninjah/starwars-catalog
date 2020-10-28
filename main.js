console.log("Test")

//GRUNDEN TILL ATT FÅ FRAM DATA FRÅN ETT API PÅ ETT ASYNCRONT SÄTT
async function getStarWarsData() {
    const req = await fetch ('https://swapi.dev/api/films')
    const res = await req.json()

    return res
    
}

var resultPromise = getStarWarsData();

resultPromise.then(function(result) {
    console.log('got result', result);
});

//}

/*
var promise = new Promise(function(resolve, reject)
*/

/*
promise.then(function(result) {
    console.log("Success!", result); // "Stuff worked!"
  }, function(err) {
    console.log("Failed!", err); // Error: "It broke"
  });
  */

getStarWarsData()