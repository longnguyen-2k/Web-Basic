CORRECT_USER = 'anhtuan';
CORRECT_PASS = '12345';



var inputUser = document.getElementById("username");
var inputPass = document.getElementById("password");

var formLogin = document.getElementById("login-form");
if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit)
}


function onFormSubmit(e) {
    var username = inputUser.value;
    var password = inputPass.value;

    if (username == CORRECT_USER && password == CORRECT_PASS) {
        alert('Đăng nhập thành công');
    } else {
        alert('Đăng nhập không thành công');
    }
}