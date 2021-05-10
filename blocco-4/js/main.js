//1a:
//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

/* var palla = {
    nome : "palla",
    peso : 10
}

//1b
//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

palla.peso = Number(prompt('scrivi il peso della palla'));
console.log(palla);
 */
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.
//(ripassiamo il Teorema di Pitagora ;D )

var triangolo = {
    base: 20,
    altezza: 30
}
console.log(triangolo);

//calcolo area
triangolo.area = (triangolo.base * triangolo.altezza) / 2;
console.log("area " + triangolo.area);


// calcolo ipotenusa
triangolo.ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2)) 
console.log("ipotenusa " + triangolo.ipotenusa);

//calcolo perimetro
triangolo.perimetro = triangolo.base + triangolo.altezza + triangolo.ipotenusa;
console.log("perimetro " + triangolo.perimetro);


                                                                                                         