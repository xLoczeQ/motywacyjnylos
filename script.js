const listaElementow = document.getElementById('listaElementow');
const wylosowanyElementDiv = document.getElementById('wylosowanyElement');
const losujButton = document.getElementById('losujButton');

losujButton.addEventListener('click', function() {
    const elementyListy = listaElementow.getElementsByTagName('li');

    if (elementyListy.length > 0) {
        const losowyIndeks = Math.floor(Math.random() * elementyListy.length);

        const wylosowanyElement = elementyListy[losowyIndeks].textContent;

        wylosowanyElementDiv.textContent = wylosowanyElement;
    } else {
        wylosowanyElementDiv.textContent = 'Brak elementów do wylosowania.';
    }
});