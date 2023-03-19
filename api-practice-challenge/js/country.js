const loadCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayCountry(data)
    }
    catch (error) {
        console.log(error)
    }
}
const displayCountry = countries => {
    const countriesContainer = document.getElementById('countries-container')
    countriesContainer.innerHTML = '';
    countries.forEach(country => {
        console.log('country :', country.languages);
        const languageArray = Object.values(country.languages)
        let language = '';
        languageArray.map((value, index) => {
            if (languageArray.length === index + 1) {

                language += ` ${value}`
            } else {
                language += ` ${ value},`
            }
        })

        const countryDiv = document.createElement('div')
        countryDiv.classList.add('col')
        countryDiv.innerHTML = `
        <div class="card h-100">
            <img class="img-fluid p-3" src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${country.name.common}</h5>
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Capital City: ${country?.capital?.[0]}</p>
                <p class="card-text">LanguagesL: ${language}</p>
            </div>
        </div>
        `;
        countriesContainer.appendChild(countryDiv)
    });
}
const loadRegion = async (region) => {
    const url = `https://restcountries.com/v3.1/subregion/${region}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayCountry(data)
    }
    catch (error) {
        console.log(error)
    }
}

loadCountries()