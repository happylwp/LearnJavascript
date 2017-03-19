// var testList = document.getElementById('test-list');
// Array.from(testList.children).sort(function (a, b) {
//     return a.innerText - b.innerText;
// });

function checkRegisterForm(){
    var nameId=document.getElementById("username");
    var passwordId=document.getElementById("password");
    var password2Id=document.getElementById("password-2");
    var regname=/^[0-9a-zA-Z]{3,10}$/;
    var regpassword=/^.{6,20}$/;
    if(nameId.value.match(regname)){
        return true;
    }else if(passwordId.value.match(regpassword)){
        return true;
    }else if(passwordId.value===password2Id.value){
        return true;
    }else {
        return false;
    }
}