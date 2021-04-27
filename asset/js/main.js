/* var parola_1 = prompt ("scrivi una parola");
var parola_2 = prompt ("scrivi un'altra parola");
var grande;
var piccola;

if(parola_1.length > parola_2.length){
    grande = parola_1;
    console.log(grande);
}else{
    grande = parola_2;
    console.log(grande);
}

if (parola_1.length < parola_2.length){
    piccola = parola_1;
    console.log(piccola);
}else{
    piccola = parola_2
    console.log(piccola);
}
 */

/* var numero_1 = Number (prompt("scrivi un numero"));
var numero_2 = Number (prompt("scrivi un numero"));
var numero_3 = Number (prompt("scrivi un numero"));
var numero_4 = Number (prompt("scrivi un numero"));
var numero_5 = Number (prompt("scrivi un numero"));
var numero_6 = Number (prompt("scrivi un numero"));
var numero_7 = Number (prompt("scrivi un numero"));
var numero_8 = Number (prompt("scrivi un numero"));
var numero_9 = Number (prompt("scrivi un numero"));
var numero_10 = Number (prompt("scrivi un numero"));
 
var somma = numero_1 + numero_2 + numero_3 + numero_4 + numero_5 + numero_6 + numero_7 + numero_8 + numero_9 + numero_10;
console.log(somma);
 */

var invitato = prompt('Chi sei?');
var lista = ['vale','filippo','marco','ale'];
var entra = false;

for (var i = 0; i < lista.length; i++){
    if (invitato == lista[i]){
        entra = true;
    }
}

if (entra == true){
    document.getElementById("ingresso").innerHTML = "puoi entrare";
}else{
    document.getElementById("ingresso").innerHTML = "Non puoi entrare";
}
