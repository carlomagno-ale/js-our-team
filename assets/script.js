const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

console.log(teamMembers)

const cardsEl = document.getElementById('cards')

//ciclare l'array
for (i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i]
  console.log(thisMember)
  console.log(getObjHtml(thisMember))

  //aggiungere la scheda html alla pagina index
  cardsEl.innerHTML += getObjHtml(thisMember);

}

//trasformare l'oggetto in html
function getObjHtml(object) {

  const { name, role, email, img } = object

  const markup = `
  <div class="d-flex gap-2">
   <div class="card">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${img}" class="img-fluid rounded-start" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 id="card-name">${name}</h5>
                  <p id="card-role">${role}</p>
                  <p id="card-mail">${email}</p>
                </div>
              </div>
            </div>
     </div>
  </div>
  `
  return markup

}
