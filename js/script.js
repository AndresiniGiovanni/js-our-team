// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto
// BONUS 3:
// Aggiungere attraverso un form un membro al team

function team() {
  const persone = [
    {
      nome: "Wayne",
      cognome: "Barnett",
      role: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg",
    },

    {
      nome: "Angela",
      cognome: "Caroll",
      role: "Chief Editor",
      image: "angela-caroll-chief-editor.jpg",
    },

    {
      nome: "Walter",
      cognome: "Gordon",
      role: "Office Manager",
      image: "walter-gordon-office-manager.jpg",
    },

    {
      nome: "Angela",
      cognome: "Lopez",
      role: "Social Media Manager",
      image: "angela-lopez-social-media-manager.jpg",
    },

    {
      nome: "Scott",
      cognome: "Estrada",
      role: "Developer",
      image: "scott-estrada-developer.jpg",
    },

    {
      nome: "Barbara",
      cognome: "Ramos",
      role: "Graphic Designer",
      image: "barbara-ramos-graphic-designer.jpg",
    },
  ];

  function print() {
    for (const persona of persone) {
      const colPersona = document.createElement("div");
      colPersona.classList.add("col-4", "mycol");

      const cardPersona = document.createElement("div");
      cardPersona.classList.add("card", "mycard");

      const cardImagePersona = document.createElement("img");
      cardImagePersona.classList.add("card-img-top");
      cardImagePersona.src = `./img/${persona.image}`;

      const cardBodyPersona = document.createElement("div");
      cardBodyPersona.classList.add("card-body");

      cardPersona.append(cardImagePersona);
      cardPersona.append(cardBodyPersona);
      colPersona.append(cardPersona);
      document.getElementById("mycontainer").append(colPersona);

      for (const key in persona) {
        console.log(`${persona[key]}`);
        if (key !== "image") {
          const childElement = document.createElement("div");
          childElement.innerHTML = persona[key];
          cardBodyPersona.append(childElement);
        }
      }
      console.log("-----");
    }
  }
  print();
}
team();
