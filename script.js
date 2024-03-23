const content = document.getElementById("content")

const btnAbout = document.getElementById("about")
const btnSkills = document.getElementById("skills")
const btnEducation = document.getElementById("education")
const btnProject = document.getElementById("project")
const btnContactInfo = document.getElementById("contact")

btnAbout.addEventListener("click", showAbout)
btnSkills.addEventListener("click", showSkills)
btnEducation.addEventListener("click", showEducation)
btnProject.addEventListener("click", showProjects)
btnContactInfo.addEventListener('click', showContactInfo)

const classTail = "mx-4 text-justify bg-slate-200 p-4 rounded my-4 mt-2 hover:bg-blue-200 font-mono"

function showAbout() {
    clearContent()
    const paraAbout = document.createElement('p')
    const paraAbout2 = document.createElement('p')
    const paraAbout3 = document.createElement('p')
    const paraAbout4 = document.createElement('p')
    paraAbout.innerHTML = "Hai! I’m a student who is passionate about <strong>Art</strong> and <strong>Programming</strong>. As an Artist I am able to create art using whatever materials available and can create creative out of the box concepts. And as a Programmer I enjoy problem solving, studying the root cause of problems and finding the best solutions for them."
    paraAbout.className = classTail
    paraAbout2.innerHTML = "As a <strong>Full Stack Developer</strong> I get to combine both of my Passion into one skill. My passion in creativity by creating beautiful websites and My <strong>passion</strong> in problem solving by creating powerful Backend and databases."
    paraAbout2.className = classTail
    paraAbout3.innerHTML = "I love creating art. An as an <strong>artist</strong> I am able to be the most creative I can be. My most used medium for creativity is Digital Illustrations but, I can work with any sort of creative mediums."
    paraAbout3.className = classTail
    paraAbout4.innerHTML = "Videogames has always been a big Inspiration to me. They are enjoyed by all kinds of people and is a great medium for creating art that touches the heart of everyone. By being a <strong>Game Dev</strong> I hope to give others the same inspiration that I feel."
    paraAbout4.className = classTail

    content.appendChild(paraAbout)
    content.appendChild(paraAbout3)
    content.appendChild(paraAbout4)
    content.appendChild(paraAbout2)
}

function showSkills() {
    clearContent()
    const para = document.createElement('p')
    const para2 = document.createElement('p')
    const para3 = document.createElement('p')
    const para4 = document.createElement('p')
    para.innerHTML = "<strong>Language:</strong> Fluent in Indonesian and in English"
    para2.innerHTML = "<strong>Technical:</strong> Ruby, Javascript, Go, HTML, CSS, GitHub. "
    para3.innerHTML = "<strong>Arts:</strong> Constructive Drawing, Anatomical Drawing, Graphic Design, Illustration"
    para4.innerHTML = "<strong>Other:</strong> Product Design, Planning, Time Management, Communication, Teamwork"
    para.className = classTail
    para2.className = classTail
    para3.className = classTail
    para4.className = classTail

    content.appendChild(para)
    content.appendChild(para2)
    content.appendChild(para3)
    content.appendChild(para4)
}
function showEducation() {
    clearContent()
    const para = document.createElement('p')
    const para2 = document.createElement('p')
    const para3 = document.createElement('p')
    para.innerHTML = "<strong>SMA Labschool Jakarta</strong> (2019-2021) - Science Major"
    para2.innerHTML = "<strong>Telkom University</strong> (2021-Present) - Bachelor of Creative Arts"
    para3.innerHTML = "<strong>harisenin.com</strong> (Present) - Full-Stack Web Developer Bootcamp"
    para.className = classTail
    para2.className = classTail
    para3.className = classTail
    content.appendChild(para)
    content.appendChild(para2)
    content.appendChild(para3)
}

function showProjects() {
    clearContent()
    const para = document.createElement('p')
    const para2 = document.createElement('p')
    const div = document.createElement('div')
    para.innerHTML = `<strong><a href="https://aufaizza.github.io/rps/" >Rock Paper Scissors</a></strong>`
    para2.innerHTML = "A simple Rock Paper Scissors game made with using JS, HTML, CSS"
    para.className = "text-xl"
    div.className = classTail
    div.appendChild(para)
    div.appendChild(para2)
    content.appendChild(div)
}

function showContactInfo() {
    clearContent()
    const paraEmail = document.createElement('p')
    const paraGithub = document.createElement('p')
    const paraLinkedIn = document.createElement('p')

    paraEmail.innerHTML = `<i class="fa fa-envelope"></i> aufashiqiizza@gmail.com`
    paraEmail.className = classTail
    paraGithub.innerHTML = `<i class="fa fa-github"></i> <a href="https://github.com/AufaIzza">AufaIzza</a>`
    paraGithub.className = classTail
    paraLinkedIn.innerHTML = `<i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/in/aufaizza/">aufaizza</a>`
    paraLinkedIn.className = classTail
    content.appendChild(paraEmail)
    content.appendChild(paraGithub)
    content.appendChild(paraLinkedIn)
}

function clearContent() {
    while (content.lastChild) {
        content.removeChild(content.lastChild)
    }
}