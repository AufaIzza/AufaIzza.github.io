const content = document.getElementById("content")

const btnAbout = document.getElementById("about")
const btnSkills = document.getElementById("skills")
const btnEducation = document.getElementById("education")
const btnProject = document.getElementById("project")

btnAbout.addEventListener("click", showAbout)
btnSkills.addEventListener("click", showSkills)
btnEducation.addEventListener("click", showEducation)

function showAbout() {
    clearContent()
    const paraAbout = document.createElement('p')
    const paraAbout2 = document.createElement('p')
    const paraAbout3 = document.createElement('p')
    const paraAbout4 = document.createElement('p')
    paraAbout.innerHTML = "Hai! I’m a student who is passionate about <strong>Art</strong> and <strong>Programming</strong>. As an Artist I am able to create art using whatever materials available and can create creative out of the box concepts. And as a Programmer I enjoy problem solving, studying the root cause of problems and finding the best solutions for them."
    paraAbout2.innerHTML = "As a <strong>Full Stack Developer</strong> I get to combine both of my Passion into one skill. My passion in creativity by creating beautiful websites and My <strong>passion</strong> in problem solving by creating powerful Backend and databases."
    paraAbout2.className = "mt-2"
    paraAbout3.innerHTML = "I love creating art. An as an <strong>artist</strong> I am able to be the most creative I can be. My most used medium for creativity is Digital Illustrations but, I can work with any sort of creative mediums."
    paraAbout3.className = "mt-2"
    paraAbout4.innerHTML = "Videogames has always been a big Inspiration to me. They are enjoyed by all kinds of people and is a great medium for creating art that touches the heart of everyone. By being a <strong>Game Dev</strong> I hope to give others the same inspiration that I feel."
    paraAbout4.className = "mt-2"

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
    para2.innerHTML = "<strong>Technical:</strong> Ruby, Javascript, HTML, CSS, GitHub, GO. "
    para3.innerHTML = "<strong>Arts:</strong> Constructive Drawing, Anatomical Drawing, Graphic Design, Illustration"
    para4.innerHTML = "<strong>Other:</strong> Product Design, Planning, Time Management, Communication, Teamwork"
    para2.className = "mt-2"
    para3.className = "mt-2"
    para4.className = "mt-2"

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
    para2.className = "mt-2"
    para3.className = "mt-2"
    content.appendChild(para)
    content.appendChild(para2)
    content.appendChild(para3)
}

function clearContent() {
    while (content.lastChild) {
        content.removeChild(content.lastChild)
    }
}