const menuBox = document.getElementById('menuBox');
const menuIcon = document.getElementById('menuIcon');
const header = document.getElementById('myHeader');
const sticky = header.offsetTop;
const overlay = document.querySelector('#overlay');
const overlay1 = document.querySelector('#overlay-1');
const overlay2 = document.querySelector('#overlay-2');
const title = document.querySelector('.project-title');
const dis = document.querySelector('.discription');
const imge = document.querySelector('.project-pics-1');
const livelink = document.querySelector('#live');
const githublink = document.querySelector('#Source');
const cardDirection = ['container', 'container-1', 'container-2', 'container-1'];
const htr = document.getElementById('Project-details');
const email = document.querySelector('#email');

// Storing DATA IN ARRAY FOR CARDS
const arr = [
  {
    name: 'TONIC', dicsription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea", image: './images/1.png', technologies: ['html', 'css', 'Javascript'], client: ['CANOPY', 'Back End Dev', '2015'], live_version: 'https://ahadb802.github.io/My-Portfolio/', source: 'https://github.com/ahadb802/',
  },
  {
    name: 'Multi-Post Stories', dicsription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea", image: './images/2d.png', technologies: ['html', 'css', 'BOOTSTRAP'], client: ['CANOPY', 'Back End Dev', '2015'], live_version: 'https://ahadb802.github.io/My-Portfolio/', source: 'https://github.com/ahadb802/',
  },
  {
    name: 'TONIC', dicsription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea", image: './images/3d.png', technologies: ['html', 'css', 'Javascript'], client: ['CANOPY', 'Back End Dev', '2015'], live_version: 'https://ahadb802.github.io/My-Portfolio/', source: 'https://github.com/ahadb802/',
  },
  {
    name: 'Multi-Post Stories', dicsription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea", image: './images/4d.png', technologies: ['html', 'css', 'Javascript'], client: ['CANOPY', 'Back End Dev', '2015'], live_version: 'https://ahadb802.github.io/My-Portfolio/', source: 'https://github.com/ahadb802/',
  },
];

// added dynamic
arr.forEach((item, index) => {
  htr.innerHTML += `<article class="cards">
 <div class="${cardDirection[index]}">
     <a href="#" class="mobile-pic" ><img class="project-pics" src="${item.image}" alt="tonic Project image"></a>
     <a href="#" class="desktop-pic" ><img class="project-pics" src="${item.image}" alt="tonic Project image"></a>
    <div class="flow">
     <h3 class="project-title">${item.name}</h3>
     <ul class="info">
         <li class="conopy-li">
             <h3 class="canopy">${item.client[0]}</h3>
         </li>
         <li class="couter-image">
                 <img src="./images/Counter.png" alt=" ">
         </li>
         <li class="back-end-li">
             <h3 class="back-end">${item.client[1]}</h3>
         </li>
         <li class="couter-image">
                 <img src="./images/Counter.png" alt=" ">
         </li>
         <li>
             <h3 class="year">${item.client[2]}</h3>
         </li>
     </ul> 
 <p class="info-about">${item.dicsription}</p>
     <ul class="info-2">
         <li>
             <button type="submit" class="button-1">${item.technologies[0]}</button>
                 
         </li>
         <li>
             <button type="submit" class="button-2">${item.technologies[1]}</button>
                 
             
         </li>
         <li>
             <button type="submit" class="button-3">${item.technologies[2]}</button>
                 
             
         </li>
     </ul>
         <button type="submit" class="button-4">See Project</button>
   
 </div>
 
 </div>
 </article>`;
});

// SHOWING DATA OF ARRAY FOR Popupmenu dynamically
document.querySelectorAll('.button-4').forEach((n, index) => {
  n.addEventListener('click', () => {
    title.innerText = arr[index].name;
    dis.innerText = arr[index].dicsription;
    imge.src = arr[index].image;
    livelink.onclick = arr[index].live_version;
    githublink.onclick = arr[index].source;
    overlay.style.display = 'block';
  });
});

// closing popup menu
document.querySelector('#cancel').addEventListener('click', () => {
  overlay.style.display = 'none';
});
// checking validation for email
document.querySelector('.submit-b').onclick = function () {
  if (email.value !== email.value.toLowerCase()) {
    overlay1.style.display = 'block';
  } else {
    overlay2.style.display = 'block';
  }
};
// closing menu
document.querySelectorAll('#close-btn').forEach((n) => n.addEventListener('click', () => {
  overlay2.style.display = 'none';
  overlay1.style.display = 'none';
}));
menuIcon.onclick = function () {
  menuBox.classList.toggle('open-menu');
  if (menuBox.classList.contains('open-menu')) {
    menuIcon.src = 'images/Icon.png';
  } else {
    menuIcon.src = 'images/Icon-Menu.png';
  }
};

document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
  menuBox.classList.remove('open-menu');
  if (menuBox.classList.contains('open-menu')) {
    menuIcon.src = 'images/Icon.png';
  } else {
    menuIcon.src = 'images/Icon-Menu.png';
  }
}));

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
window.onscroll = function () { myFunction(); };
