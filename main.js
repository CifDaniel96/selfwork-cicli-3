let bevanda = Number(prompt(`Ciao, quale bevanda desideri? Inserisci il numero corrispondente alla bevanda:\n1=Acqua\n2=Coca cola\n3=Birra`));


while (bevanda < 1 || bevanda > 3) {
    bevanda = Number(prompt(`Scelta non valida.\nCiao, quale bevanda desideri? Inserisci il numero corrispondente alla bevanda:\n1=Acqua\n2=Coca cola\n3=Birra`));
}
if (bevanda == 1) {
    console.log(`Ecco qui la tua Acqua`);
} else if (bevanda == 2) {
    console.log(`Ecco la tua Coca cola`);
} else if (bevanda == 3) {
    console.log(`Ecco la tua Birra`);
}

// Extra

let bevandaExtra = prompt(`Ciao, quale bevanda desideri? Inserisci il numero corrispondente alla bevanda:\n1=Acqua\n2=Coca cola\n3=Birra`);

while (bevandaExtra !== `1` && bevandaExtra !== `2` && bevandaExtra !== `3` && bevandaExtra !== `Acqua` && bevandaExtra !== `Coca cola` && bevandaExtra !== `Birra`) {
    bevandaExtra = prompt(`Scelta non valida.\nCiao, quale bevanda desideri? Inserisci il numero corrispondente alla bevanda:\n1=Acqua\n2=Coca cola\n3=Birra`);
}
if (bevandaExtra == `1` || bevandaExtra == `Acqua`) {
    console.log(`Ecco qui la tua Acqua`);
} else if (bevandaExtra == `2` || bevandaExtra == `Coca cola`) {
    console.log(`Ecco la tua Coca cola`);
} else if (bevandaExtra == `3` || bevandaExtra == `Birra`) {
    console.log(`Ecco la tua Birra`);
}