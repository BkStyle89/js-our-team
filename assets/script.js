const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];

const rowEl = document.querySelector(".row")
const formEl=document.getElementById("new-member")

for(let i=0; i<teamMembers.length;i++){
  const member = teamMembers[i]
  console.log(member)

  const {name,role,email,img} =member;
  console.log(name,role,email,img);
  const markup =`
  <div class="col-12 col-md-6 col-lg-4 mt-5 ">
    <div class="cards bg-black " >
      <div class="card-body d-flex" >
        <div class="card-picture ">
          <img style="width: 140px" src="${img}" alt="Photo">
        </div>
        <div class="p-3 mt-2 justify-content-center">
          <h3 class="card-title text-light">${name}</h3>
          <div class="card-role text-light ">${role}</div>
          <div class= "card-mail text-primary ">${email}
          </div>
        </div> 
      </div>
    </div>
  </div>
`
rowEl.innerHTML += markup
}


