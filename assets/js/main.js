/* Traccia

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

:puntare_su:MILESTONE 1
Per prima cosa, creiamo il markup statico:
costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

:le_corna:MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

:gesto_ti_amo:MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

:regalo: BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

:regalo: BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

:urlo: Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.

:lampadina:Consigli del giorno:
Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
*/

// procedimento

// seleziono l' elemento dove mostrero le immagini
// Creo un'array di percorsi
// seleziono l' immagine attiva
// ciclo le immagini e aggiungo un' elemento al DOM
// seleziono le slide
// setto in ascolto il pulsante next
// seleziono la slide corrente
// rimuovo la classe active dall' immagine attiva
// pongo condizioni per incremento o decremento valore
// seleziono la prossima immagine
// aggiungo la clase active



// Strumenti

// array
// const/let
// querySelector
// eventListener
// increment/decrement
// cicle
// add/remove
// insertAdjacentHTML
// console.log
// function
// classList


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

// seleziono l' elemento dove mostrero le immagini
const imagesEl = document.querySelector(".images")

// seleziono l' immagine attiva
let activeImage = 0
let i = 0

// ciclo le immagini e aggiungo un' elemento al DOM
images.forEach(card => {
  const imgEl = `<div class="slide ${i === activeImage ? "active" : ""} position-relative">
                   <img src="./assets/${card.image}" class="card-img-top" alt="">
                   <span class="position-absolute w-100 h-25 start-0 bottom-0 text-white b_g p-2">
                      <h3>${card.title}</h3>
                      <p>${card.text}</p>
                   </span>
                 </div>`
  imagesEl.insertAdjacentHTML('beforeend', imgEl)
  i++
  console.log(imgEl)
  console.log(i)
})


// seleziono le slide
const cardEl = document.querySelectorAll(".slide")

// setto in ascolto il pulsante next
const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {

  // seleziono la slide corrente
  let currentSlide = cardEl[activeImage]

  // rimuovo la classe active dall' immagine attiva
  currentSlide.classList.remove("active")

  // pongo condizioni per incremento valore
  if (activeImage == 4) {
    activeImage = 0
  } else { activeImage++ }

  // seleziono la prossima immagine
  const nextImage = cardEl[activeImage]

  // aggiungo la clase active
  nextImage.classList.add('active')


})


// setto in ascolto il pulsante prev
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {

  // seleziono la slide corrente
  const currentSlide = cardEl[activeImage]

  // rimuovo la classe active dall' immagine attiva
  currentSlide.classList.remove('active')

  // pongo condizioni per decremento valore
  if (activeImage == 0) {
    activeImage = 4
  } else { activeImage-- }

  // seleziono la prossima immagine
  const nextImage = cardEl[activeImage]

  // aggiungo la clase active
  nextImage.classList.add('active')

})



