class Country 
{
    constructor(name, lang, greeting, colors)
    {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    ChangeColors()
    {
        document.querySelector("#Color1").style.backgroundColor = this.colors[0];
        document.querySelector("#Color2").style.backgroundColor = this.colors[1];
        document.querySelector("#Color3").style.backgroundColor = this.colors[2];
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let ukraine = new Country("Ukraine", "Ukrainian", "Pryvit!", ["blue", "yellow", "blue"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let canada = new Country("Canada", "English", "Hey bud!", ["white", "white", "red"]);

function SwitchCountry() 
{
    let input = document.querySelector("#CountryList");
    let country;

    if (input.value === "USA") 
    {
        country = usa;
    }
    else if (input.value === "Mexico") 
    {
        country = mexico;
    }
    else if (input.value === "Ukraine") 
    {
        country = ukraine;
    }
    else if (input.value === "Algeria") 
    {
        country = algeria;
    }
    else if (input.value === "Canada") 
    {
        country = canada;
    }

    country.ChangeColors();
    document.querySelector("#CountryName").innerText = country.name;
    document.querySelector("#OfficialLanguage").innerText = (`Language: ${country.lang}`);
    document.querySelector("#HelloWorld").innerText = country.greeting;
}
