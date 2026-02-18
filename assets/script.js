const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const rowEl = document.querySelector(".row")

for(let i=0; i<teamMembers.length;i++){
  const member = teamMembers[i]
  console.log(member)

  const {name,role,email,img} =member;
  console.log(name,role,email,img);
  const markup =`
  <div class="col-12 col-md-4">
    <div class="cards">
      <div class="card-body">
        <div class="card-picture fload-left">
          <img src="" alt="Photo">
        </div>
        <h3 class="card-title"></h3>
        <p class="card-job"></p>
        <p class="card-mail"></p>
      </div>
    </div>
  </div>
`
}

