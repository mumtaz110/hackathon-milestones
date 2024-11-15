const form = document.getElementById("resume-form") as HTMLFormElement
const yourResume= document.getElementById("your-resume") as HTMLDivElement

form.addEventListener("submit",(event: Event) =>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value

    const resumeHTMl = `
    <h2><b>Resume</b></h2>
    <h3>Personal information</h3>
    <p><b>Name:</b>${name}</P>
    <p><b>Email:</b>${email}</P>
    <p><b>Phone:</b>${phone}</P>

    <h3>Education</h3>
    <p>${education}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    `;

    if (yourResume){
        yourResume.innerHTML = resumeHTMl;
    }else{
        console.error("Resume display element is missing")
    }
})