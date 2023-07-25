console.log('Hej! to jest tekst ze skryptu js w main.js');

const headerToChange = document.querySelector('.section__title--js');

console.log(headerToChange.innerHTML);

headerToChange.innerHTML = 'Treść wstawiona skryptem JS do elementu HTML';