const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');


function sparaDataTillJSONFil(filnamn, data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('questions.json', jsonData);
    console.log('Data sparad i', filnamn);
  } catch (error) {
    console.error('Ett fel inträffade vid sparande av data:', error.message);
  }
}

function läsDataFrånJSONFil(filnamn) {
  try {
    const data = fs.readFileSync('questions.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Fel vid läsning av filen:', error.message);
    return null;
  }
}

function läggTillResultatTextFil(filnamn, resultatText) {
  try {
    fs.appendFileSync(filnamn, resultatText);
  } catch (error) {
    console.error('Ett fel inträffade vid sparande av resultat i textfil:', error.message);
  }
}

function utförFrågeformulär() {
  console.log("HUSDJURSFORMULÄR\n");

  const resultat = {};
  const namn = prompt("Ange ditt namn: ");
  const nu = new Date();

  const frågeformulär = [
    {
      fråga: "Föredrar du ett tyst husdjur?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 2, Hund: 1, Kanin: 2, Fisk: 2 } },
        { svar: "Nej", poäng: { Kat: 1, Hund: 2, Kanin: 1, Fisk: 1 } }
      ]
    },
    {
      fråga: "Vill du motionera mycket med ditt husdjur?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 0, Hund: 2, Kanin: 1, Fisk: 0 } },
        { svar: "Nej", poäng: { Kat: 1, Hund: 0, Kanin: 0, Fisk: 2 } }
      ]
    },
    {
      fråga: "Har du någon allergi mot pälsdjur?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 0, Hund: 0, Kanin: 1, Fisk: 1 } },
        { svar: "Nej", poäng: { Kat: 2, Hund: 2, Kanin: 1, Fisk: 2 } }
      ]
    },
    {
      fråga: "Föredrar du ett husdjur som är enkelt att ta hand om?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 1, Hund: 1, Kanin: 2, Fisk: 2 } },
        { svar: "Nej", poäng: { Kat: 2, Hund: 2, Kanin: 1, Fisk: 1 } }
      ]
    },
    {
      fråga: "Gillar du att ha sällskap av ditt husdjur?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 2, Hund: 2, Kanin: 1, Fisk: 1 } },
        { svar: "Nej", poäng: { Kat: 0, Hund: 0, Kanin: 1, Fisk: 2 } }
      ]
    },
    {
      fråga: "Kan du tänka dig att ta med ditt husdjur utomhus?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 1, Hund: 2, Kanin: 1, Fisk: 0 } },
        { svar: "Nej", poäng: { Kat: 0, Hund: 0, Kanin: 1, Fisk: 2 } }
      ]
    },
    {
      fråga: "Föredrar du ett husdjur som är självständigt?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 2, Hund: 1, Kanin: 2, Fisk: 2 } },
        { svar: "Nej", poäng: { Kat: 0, Hund: 1, Kanin: 0, Fisk: 0 } }
      ]
    },
    {
      fråga: "Är du intresserad av att träna ditt husdjur?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 0, Hund: 2, Kanin: 1, Fisk: 0 } },
        { svar: "Nej", poäng: { Kat: 1, Hund: 0, Kanin: 0, Fisk: 2 } }
      ]
    },
    {
      fråga: "Föredrar du ett husdjur som är litet i storlek?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 2, Hund: 1, Kanin: 2, Fisk: 0 } },
        { svar: "Nej", poäng: { Kat: 0, Hund: 2, Kanin: 0, Fisk: 2 } }
      ]
    },
    {
      fråga: "Gillar du att interagera och leka med ditt husdjur?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 2, Hund: 2, Kanin: 1, Fisk: 0 } },
        { svar: "Nej", poäng: { Kat: 0, Hund: 0, Kanin: 1, Fisk: 2 } }
      ]
    },
    {
      fråga: "Kan du ta hand om ett husdjur med speciella behov?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 1, Hund: 2, Kanin: 1, Fisk: 2 } },
        { svar: "Nej", poäng: { Kat: 2, Hund: 1, Kanin: 2, Fisk: 0 } }
      ]
    },
    {
      fråga: "Föredrar du ett husdjur som är lätt att träna?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 0, Hund: 2, Kanin: 1, Fisk: 0 } },
        { svar: "Nej", poäng: { Kat: 1, Hund: 0, Kanin: 0, Fisk: 2 } }
      ]
    },
    {
      fråga: "Gillar du att ha många olika sorters husdjur?",
      svarsalternativ: [
        { svar: "Ja", poäng: { Kat: 2, Hund: 2, Kanin: 2, Fisk: 2 } },
        { svar: "Nej", poäng: { Kat: 0, Hund: 0, Kanin: 0, Fisk: 0 } }
      ]
    }
  ];

  for (const frågaObj of frågeformulär) {
    console.log(frågaObj.fråga);
    for (let i = 0; i < frågaObj.svarsalternativ.length; i++) {
      console.log(`${i + 1}. ${frågaObj.svarsalternativ[i].svar}`);
    }
    let svarIndex = -1;

    while (svarIndex === -1) {
      const svarInput = prompt("Välj ett svarsnummer: ").trim();
      if (/^\d+$/.test(svarInput)) {
        svarIndex = Number(svarInput) - 1;
        if (svarIndex < 0 || svarIndex >= frågaObj.svarsalternativ.length) {
          console.log("Ogiltigt svarsnummer. Försök igen.");
          svarIndex = -1;
        }
      } else {
        console.log("Ogiltigt svarsnummer. Försök igen.");
      }
    }

    const valtSvar = frågaObj.svarsalternativ[svarIndex].poäng;

   
    for (const husdjur in valtSvar) {
      if (!resultat[husdjur]) {
        resultat[husdjur] = 0;
      }
      resultat[husdjur] += valtSvar[husdjur];
    }
  }

  console.log("\nDitt resultat:");

  const totalPoäng = Object.values(resultat).reduce((acc, val) => acc + val, 0);

  const procentResultat = {};
  for (const husdjur in resultat) {
    const poäng = resultat[husdjur];
    const procent = (poäng / totalPoäng) * 100;
    procentResultat[husdjur] = procent;
  }

  const sorteradeHusdjur = Object.keys(procentResultat).sort(
    (a, b) => procentResultat[b] - procentResultat[a]
  );

  const resultatText = `${namn} - ${nu.toISOString()}\n\n${JSON.stringify(
    resultat,
    null,
    2
  )}\n\n`;

  sparaDataTillJSONFil('results.json', resultat); 
  läggTillResultatTextFil('resultat.txt', resultatText); 

  for (const husdjur of sorteradeHusdjur) {
    console.log(`${husdjur}: ${procentResultat[husdjur].toFixed(2)}% likhet`);
  }
}

while (true) {
  const val = prompt("Vill du utföra frågeformuläret? (ja/nej): ").trim().toLowerCase();
  if (val === "ja") {
    utförFrågeformulär();
  } else if (val === "nej") {
    console.log("Avslutar programmet.");
    break;
  } else {
    console.log("Ogiltigt kommando. Försök igen.");
  }
}