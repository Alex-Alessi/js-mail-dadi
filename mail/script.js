//# TITOLO
//* Mail

//# TRACCIA
//* Chiedi all'utente la sua email,
//* controlla che sia nella lista di chi può accedere,
//* stampa un messaggio appropriato sull'esito del controllo.

//# RACCOLTA DATI
//* creare una lista di email che possono accedere
const emails = [
  "Marco@gmail.com",
  "Francesco@gmail.com",
  "Simone@gmail.com",
  "Luca@gmail.com",
  "Giovanni@gmail.com",
];
//* chiediamo all'utente di scrivere la sua email
let emailUtente = prompt("Scrivi la tua email: ");

//!VERSIONE SEMPLIFICATA
//# ELABORAZIONE
//* prendiamo in esame l'email ricevuta e controlliamo se è nella lista
//? if (emails.includes(emailUtente)) {
//   //# OUTPUT
//?   alert("Puoi accedere");
//? } else {
//   //# OUTPUT
//?   alert("Ci dispiace, non può accedere");
//? }

//!VERSIONE COMPLESSA
//# ELABORAZIONE
//*controlliamo con un ciclo che emailUtente sia nella lista
let i = 0;
let trovato = false;
while (!trovato && i < emails.length) {
  //* SE abbiamo un riscontro positivo, allora trasformiamo la variabile in true
  if (emails[i] == emailUtente) {
    trovato = true;
  }
  i++;
}

if (trovato) {
  //# OUTPUT
  alert("Puoi accedere");
} else {
  //# OUTPUT
  alert("Ci dispiace, non può accedere");
}
