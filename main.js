console.log('Hej! to jest tekst ze skryptu js w main.js');
/*
const myName = 'Tomek';
const mySurname = 'Miśkiewicz';
let favouriteColour = 'niebieski';
*/
// console.log (`Hej! Tu ${myName} ${mySurname}, mój ulubiony kolor dziś to: ${favouriteColour}`);

function welcomeReader(myName, mySurname, favouriteColour) {
    return console.log(`Hej! Tu ${myName} ${mySurname}, mój ulubiony kolor to: ${favouriteColour}`)
}

welcomeReader("Jan", "Kowalski", "czerwony");
welcomeReader("Bolek", "Nowakowski", "czarny");