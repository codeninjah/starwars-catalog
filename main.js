console.log("Test")

async function getStarWarsData() {
    const req = await fetch ('https://swapi.dev/api/')
    const res = await req.json()

    console.log(res)
}

getStarWarsData()