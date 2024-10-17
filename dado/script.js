//# TITOLO
//*Gioco dei dadi

//# TRACCIA
//* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//* Stabilire il vincitore, in base a chi fa il punteggio più alto.

//# RACCOLTA DATI
//* chiediamo il nome del giocatore
const nickname = prompt("Inserisci il tuo nickname: ");
//* il computer tira il dado
const numeroCPU = parseInt(Math.random() * 5) + 1;
alert("Il numero del dado tirato dalla CPU è: " + numeroCPU);
//* il giocatore tira il dado
const numeroGiocatore = parseInt(Math.random() * 5) + 1;
alert("Il numero del dado tirato da " + nickname + " è: " + numeroGiocatore);

//# ELABORAZIONE
//* SE il numero del computer è più alto
if (numeroCPU > numeroGiocatore) {
  //# OUTPUT
  //* stampiamo "Ha vinto il computer"
  alert("Ha vinto la CPU con il numero " + numeroCPU);
}
//* ALTRIMENTI SE il numero del giocatore è più alto
else if (numeroGiocatore > numeroCPU) {
  //# OUTPUT
  //*  stampiamo "Ha vinto il giocatore"
  alert("Ha vinto " + nickname + " con il numero " + numeroGiocatore);
}
//* ALTRIMENTI
else {
  //# OUTPUT
  //* stampiamo "Situazione di stallo"
  alert(
    "Situazione di stallo. Entrambi hanno lanciato il numero: " +
      numeroGiocatore
  );
}
