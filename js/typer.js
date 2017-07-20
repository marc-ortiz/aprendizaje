
var typer = document.getElementById("typer");
var characterIndex = 0;

function fillText() {
    if(characterIndex < text.length) {
        var currentCharacter = text[characterIndex];
        characterIndex = characterIndex + 1;

        typer.innerHTML = typer.innerHTML + currentCharacter;  
    }     
}

function clearText() {
    characterIndex = 0;
    typer.innerHTML = "";   
}

function insertCharacter(e) {
    var character = String.fromCharCode(e.charCode);

    typer.innerHTML = typer.innerHTML + character;
}

document.body.addEventListener("keypress", insertCharacter);
document.body.addEventListener("click", clearText);
document.body.addEventListener("mousemove", fillText);