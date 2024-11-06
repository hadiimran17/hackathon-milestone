const Togglebutton = document.getElementById(`toggle-skills`) as HTMLButtonElement
const Skill = document.getElementById(`Skill`) as HTMLElement
Togglebutton.addEventListener(`click`, ()=>{
    if (Skill.style.display === `none`){
        Skill.style.display = `block`}
        else{
            Skill.style.display = `none`
        }
})