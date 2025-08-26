let bevanda;
do {
    bevanda = Number(prompt(`Ciao, quale bevanda desideri? Inserisci il numero corrispondente alla bevanda:\n1=Acqua\n2=Coca cola\n3=Birra`));
    switch (bevanda) {
        case 1:
            console.log(`E’ stata selezionata l’Acqua`);
            break;
        case 2:
            console.log(`E’ stata selezionata la Coca cola`);
            break;
        case 3:
            console.log(`E’ stata selezionata la Birra`);
            break;
        case typeof bevanda !== `number`:
            console.log(`Scelta non valida, per favore riprova. Ciao, quale bevanda desideri?`);
            break;
        default:
            console.log(`Scelta non valida, per favore riprova. Ciao, quale bevanda desideri?`);
    }
} while (bevanda !== 1 && bevanda !== 2 && bevanda !== 3);