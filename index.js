const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function getGeneratePasswords(){
    let randomPassword1 = ""
    let randomPassword2 = ""
    for (let i=0; i<passwordLength; i++){
        randomPassword1 += characters[Math.floor(Math.random()*characters.length)]
        randomPassword2 += characters[Math.floor(Math.random()*characters.length)]
    }
    password1El.textContent = randomPassword1
    password2El.textContent = randomPassword2
}
//password1El.textContent = getGeneratePasswords()
//password2El.textContent = getGeneratePasswords()
password1El
password2El



