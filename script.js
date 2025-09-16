const content = document.getElementById("content");

const btnAbout = document.getElementById("about");
const btnSkills = document.getElementById("skills");
const btnEducation = document.getElementById("education");
const btnProject = document.getElementById("project");
const btnContactInfo = document.getElementById("contact");

btnAbout.addEventListener("click", showAbout);
btnSkills.addEventListener("click", showSkills);
btnEducation.addEventListener("click", showEducation);
btnProject.addEventListener("click", showProjects);
btnContactInfo.addEventListener('click', showContactInfo);

const classTail = "mx-auto drop-shadow max-w-xl mx-4 text-justify bg-slate-300 p-4 rounded-lg my-4 mt-2 hover:bg-blue-200 py-4 px-4 font-mono content transition";

/***
  * @param {InnerHTML} paragraph 
  */
function appendSimplePara(paragraph) {
  const para = document.createElement('p');
  para.innerHTML = paragraph;
  para.className = classTail;
  content.appendChild(para)
}
/***
  * @param {InnerHTML} title
  * @param {InnerHTML} paragraph 
  */
function appendDoublePara(title, paragraph) {
  const para = document.createElement('p');
  const head = document.createElement('p');
  const cont = document.createElement('div');
  head.innerHTML = title;
  para.innerHTML = paragraph;
  head.className = "text-xl";
  cont.className = classTail;
  cont.appendChild(head);
  cont.appendChild(para);
  content.appendChild(cont);
}

function clearContent() {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  };
}

function showAbout() {
  clearContent();
  appendSimplePara("Hai! I’m a student who is passionate about <strong>Art</strong> and <strong>Programming</strong>. As an Artist I am able to create art using whatever materials available and can create creative out of the box concepts. And as a Programmer I enjoy problem solving, studying the root cause of problems and finding the best solutions for them.");
  appendSimplePara("As a <strong>Full Stack Developer</strong> I get to combine both of my Passion into one skill. My passion in creativity by creating beautiful websites and My <strong>passion</strong> in problem solving by creating powerful Backend and databases.");
  appendSimplePara("I love creating art. An as an <strong>artist</strong> I am able to be the most creative I can be. My most used medium for creativity is Digital Illustrations but, I can work with any sort of creative mediums.");
  appendSimplePara("Videogames has always been a big Inspiration to me. They are enjoyed by all kinds of people and is a great medium for creating art that touches the heart of everyone. By being a <strong>Game Dev</strong> I hope to give others the same inspiration that I feel.");
}

function showSkills() {
  clearContent();
  appendSimplePara("<strong>Language:</strong> Fluent in Indonesian and in English");
  appendSimplePara("<strong>Technical:</strong> Ruby, Javascript, HTML, CSS, GitHub, C.");
  appendSimplePara("<strong>Arts:</strong> Constructive Drawing, Anatomical Drawing, Graphic Design, Illustration");
  appendSimplePara("<strong>Other:</strong> Product Design, Planning, Time Management, Communication, Teamwork");
}
function showEducation() {
  clearContent();
  appendSimplePara("<strong>SMA Labschool Jakarta</strong> (2019-2021) - Science Major");
  appendSimplePara("<strong>Telkom University</strong> (2021-2025) - Bachelor of Creative Arts");
  appendSimplePara("<strong>harisenin.com</strong> (2024) - Full-Stack Web Developer Bootcamp");
  appendSimplePara("<strong>President University</strong> (2025-Present) - Bachelor of Informatics");
}

function showProjects() {
  clearContent();
  appendDoublePara(`<strong><a href="https://aufaizza.github.io/react-todo/" class="underline" >Tell O</a></strong>`, "A todo app inspired by trello created using React");
  appendDoublePara(`<strong><a href="https://aufaizza.github.io/BookIzGood/" class="underline" >BookIzGood</a></strong>`, "A simple book searching website created using JS, HTML, CSS");
  appendDoublePara(`<strong><a href="https://aufaizza.github.io/rps/" class="underline" >Rock Paper Scissors</a></strong>`, "A simple Rock Paper Scissors game made with using JS, HTML, CSS");
}

function showContactInfo() {
  clearContent();
  appendSimplePara(`<i class="fa fa-envelope"></i> aufashiqiizza@gmail.com`);
  appendSimplePara(`<i class="fa fa-github"></i> <a href="https://github.com/AufaIzza" class="underline">AufaIzza</a>`);
  appendSimplePara(`<i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/in/aufaizza/" class="underline">aufaizza</a>`);
  appendSimplePara(`<i class="fa fa-phone"></i> +62-812-8820-8275`);
}

