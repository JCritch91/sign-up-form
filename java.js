let pwd = document.getElementById("password")
let pwdConf = document.getElementById("confirm-password")
const confButton = document.getElementById("create")

confButton.addEventListener('click',validatePwd)

function validatePwd (){
    if (pwdConf.value !== pwd.value){
        alert("Passwords do not match")
        return
    } 
}
