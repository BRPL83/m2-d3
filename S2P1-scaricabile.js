//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 42;
let numero2 = 73;
let numeroPiùGrande;

if (numero1 > numero2) {
  numeroPiùGrande = numero1;
} else {
  numeroPiùGrande = numero2;
}

console.log("Il numero più grande è: " + numeroPiùGrande);

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 12;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

console.log("");

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let numero = 0; numero <= 10; numero++) {
  if (numero === 3 || numero === 8) {
    continue;
  }
  console.log(numero);
}

/* ESERCIZIO 3
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 === 0) {
    console.log(numero + " è un numero pari");
  } else {
    console.log(numero + " è un numero dispari");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 5;
let number2 = 3;

if (number1 === 8 || number2 === 8 || number1 + number2 === 8 || number1 - number2 === 8) {
  console.log("Una delle condizioni è verificata: uno dei numeri è 8 oppure la loro somma/sottrazione è 8.");
} else {
  console.log("Nessuna delle condizioni è verificata.");
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 75;
let shippingCost = 10;
let totalAmount;

if (totalShoppingCart > 50) {
  totalAmount = totalShoppingCart;
  console.log("Totale carrello: " + totalAmount + " - Spedizione gratuita!");
} else {
  totalAmount = totalShoppingCart + shippingCost;
  console.log("Totale carrello: " + totalAmount + " - Costo di spedizione: " + shippingCost);
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let TotalShoppingCart = 75;
let ShippingCost = 10;
let TotalAmount;

// Applicato lo sconto del 20% per il Black Friday

TotalShoppingCart = TotalShoppingCart * 0.8; /*Ovvero meno il 20% di 75 che sarebbe meno 15 per arrivare come risultato 60*/

if (TotalShoppingCart > 50) {
  TotalAmount = TotalShoppingCart;
  console.log("totale carrello: " + TotalAmount + " - spedizione gratuita!");
} else {
  TotalAmount = TotalShoppingCart + ShippingCost;
  console.log("totale carrello: " + TotalAmount + " - costo di spedizione: " + ShippingCost);
}


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let isMale = true;
let gender = isMale ? "male" : "female";

console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
