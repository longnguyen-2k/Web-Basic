User.loadData();
var navigate = false;
var input_data = function() {
        var input = {
            newUsername: document.getElementById("newUsername").value,
            newPassword: document.getElementById("newPassword").value,
            newEmail: document.getElementById("newEmail").value,
            name: document.getElementById("name").value,
            age: document.getElementById("age").value | 0,
            phones: document.getElementById("phones").value,
            job: document.getElementById("job").value,
        }
        console.log(account)
        navigate = true;
        if (navigate == true) {
            var account = new User(input.newUsername, input.newPassword, input.newPassword, input.name, input.age, input.phones, input.job);
            User.createUser(account);
            setTimeout(() => { window.location.replace("../Home/home.html") }, 5000);

        } else {
            alert("Không thể thêm thông tin !")
        }
    }
    // Kiem tra dang nhap
var check;
var checkLogin = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    User.listUser;
    for (var i in User.listUser) {
        var data = User.listUser[i];
        if (username == data.userName && password == data.passWord) {
            check = 1;
            break
        } else {
            check = 0;
        }
    }
    return check;
}
console.log(check)
var login = function() {
        if (checkLogin() == 1) {
            alert("Đăng nhập thành công!");
            window.location.replace("../Home/home.html");
        } else {
            alert("Tên đăng nhập hoặc mật khẩu sai!");

        }
    }
    // Kiem tra dang ky
var checkSignUp;
var checkSignup = function() {
    var newUsername = document.getElementById('newUsername').value;
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    var rePass = document.getElementById('rePassword').value;
    User.listUser
    for (var i in User.listUser) {
        var data = User.listUser[i];
        if (newUsername == data.userName) {
            checkSignUp = 1;
            break;
        } else if (rePass != newPassword) {
            checkSignUp = 2;
        } else if (newUsername == "" || newPassword == "" || rePass == "" || newEmail == "") {
            checkSignUp = 3;
        } else {
            checkSignUp = 4;
        }
    }
    return checkSignUp;
}

var signUP = function() {
    if (checkSignup() == 1) {
        alert("Tên đăng nhập tồn tại !");
    } else if (checkSignup() == 2) {
        alert("Nhập mật khẩu sai !");
    } else if (checkSignup() == 3) {
        alert("Thông tin không được để trống!");
    } else {
        alert("Đăng ký tài khoản thành công !");
        console.log(checkSignup())
        $('#exModal').modal('show');

    }
}