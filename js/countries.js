function loadCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries();

function displayCountries(countries) {

    const sectionContainer = document.getElementById('container');
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountriesByName('${country.name}')">Details</button>
        `;

        sectionContainer.appendChild(div);
    });
}

function loadCountriesByName(name) {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetails(data[0]));
}
const displayCountryDetails = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h2>Name: ${country.name}</h2>
    <h3>Population : ${country.population}</h3>
    <img width=400px src="${country.flag}">
    `;
}