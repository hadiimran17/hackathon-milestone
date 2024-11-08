const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumedisplayeElement = document.getElementById(`resume-display`) as HTMLDivElement;
 
//handle form submission
form.addEventListener(`submit`, (event:Event) => {
    event.preventDefault();//prevent page reload

//collect input values
const name = (document.getElementById(`name`) as HTMLFormElement).value;
const email= (document.getElementById(`email`) as HTMLFormElement).value;
const number = (document.getElementById(`number`) as HTMLFormElement).value;
const education = (document.getElementById(`education`) as HTMLFormElement).value;
const experience = (document.getElementById(`experience`) as HTMLFormElement).value;
const skills = (document.getElementById(`skills`) as HTMLFormElement).value;

//generate resume content dynamically

const resumeHTML = `
<h2><b>Resume</b><h2>
<h3><b>Personal Information</b>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Number:</b>${number}</p>

<h3>Education:</h3>
<p>${education}</p>

<h3>Experience:</h3>
<p>${experience}</p>

<h3>Skills:</h3>
<p>${skills}</p>
`;

//display the generated resume
if(resumedisplayeElement){
    resumedisplayeElement.innerHTML = resumeHTML;
}else{
console.error(`The resume display eleement is missing.`)}
});
