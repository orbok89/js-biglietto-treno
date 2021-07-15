// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

var km = parseInt(prompt('kilometri'));
console.log(km)
var eta = parseInt(prompt('età'));
if (eta < 18){
    console.log(Number(km * 0.21 * 0.8).toFixed(2)  );
}
else if (eta > 64){
    console.log(Number(km * 0.21 * 0.6).toFixed(2)  );
}
else{
    console.log(Number(km * 0.21).toFixed(2)  );
}