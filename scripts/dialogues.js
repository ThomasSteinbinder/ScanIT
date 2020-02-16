function introDialogue() {
    return "This is the intro. lel.";
}

function setUpDialogueWindow() {
    let dialogueBox = document.getElementById("dialogueDiv");
    let btn = document.createElement("input");

    btn.type = "button";
    btn.name = "okBtn";
    btn.value = "OK";
    btn.id = "okBtn";
    btn.style.position = "absolute";
    btn.style.right = "20px";
    btn.style.bottom = "20px";
    btn.style.padding = "10px 20px 10px";
    btn.setAttribute("onClick", "hideDialogueBox()")
    dialogueBox.appendChild(btn);
}

function showDialogue(dialogueText) {
    let dialogueBox = document.getElementById("dialogueDiv");
    let text = document.createElement("p");
    text.innerHTML = dialogueText;
    dialogueBox.appendChild(text);

    displayDialogueBox();
}

function displayDialogueBox() {
    let dialogueOuterDiv = document.getElementById("dialogueOuterDiv");
    dialogueOuterDiv.style.display = "block";
}

function hideDialogueBox() {
    let dialogueOuterDiv = document.getElementById("dialogueOuterDiv");
    dialogueOuterDiv.style.display = "none";

    let dialogueBox = document.getElementById("dialogueDiv");
    dialogueBox.innerHTML = "";
}