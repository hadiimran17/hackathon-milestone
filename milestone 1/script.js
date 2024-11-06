var Togglebutton = document.getElementById("toggle-skills");
var Skill = document.getElementById("Skill");
Togglebutton.addEventListener("click", function () {
    if (Skill.style.display === "none") {
        Skill.style.display = "block";
    }
    else {
        Skill.style.display = "none";
    }
});
