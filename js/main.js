function addContent(){
    content = document.getElementById("content");
    // Creating the field object to be appended
    let newSkillsCell = document.createElement("div");
    newSkillsCell.classList.add("skill-cells");

    let textLabel = document.createElement("label");
    textLabel.classList.add("label-class");
    textLabel.innerHTML = document.getElementsByTagName('input')[0].value;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButtons");
    deleteButton.innerHTML = "×";
    deleteButton.addEventListener("click",deleteSkill);
    content.appendChild(newSkillsCell);
    newSkillsCell.appendChild(deleteButton);
    newSkillsCell.appendChild(textLabel);
    console.log("Added");
    content.scrollTop = content.scrollHeight;


}

function deleteSkill(){
    this.parentElement.remove();
}