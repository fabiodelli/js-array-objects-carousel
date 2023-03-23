/* Consegna:

Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. */


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// seleziono elemento ospitante
let imagesEl = document.querySelector(".images")
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const totalImages = images.length;
let currentImageIndex = 0;

// Funzione per visualizzare l'immagine corrente e la sua descrizione
function showCurrentImage() {
    const currentImage = images[currentImageIndex];
    const cardEl = `<div class="card" style="width: 18rem;">
                <img src="./assets/${currentImage.image}" class="card-img-top" alt="">
                <div class="card-body">
                <h3>${currentImage.title}</h3>
                <p class="card-text">${currentImage.text}</p>
                </div>
                </div>`
    imagesEl.insertAdjacentHTML('beforeend', cardEl)
}

// Aggiunta dei listener per i pulsanti
prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);

// Funzione per passare all'immagine successiva
function nextImage() {
    currentImageIndex = (currentImageIndex + 1)
    showCurrentImage()
}

// Funzione per passare all'immagine precedente
function prevImage() {
    currentImageIndex = (currentImageIndex - 1)
    showCurrentImage();
}


// Visualizzazione dell'immagine corrente all'avvio dello script
showCurrentImage();