User.loadData();
var update = function() {
    var userCur = JSON.parse(localStorage.getItem('user'));
    var dataUser = User.getUserID(userCur.id);
    listUser = User.getListUser();
    for (var i in listUser) {
        if (userCur.userName == listUser[i].userName) {
            document.getElementById("fullname").value = dataUser.name;
            document.getElementById("age").value = dataUser.age;
            document.getElementById("phone").value = dataUser.phone;
            document.getElementById("job").value = dataUser.job;
            document.getElementById("submit").innerHTML = `<button class= "btn btn-outline-danger mt-3" onclick = "submit(${dataUser.id})"> Cập nhật</button>`
        }
    }
}

function submit(id) {
    console.log(id);
    var data = User.getUserID(id);
    data.name = document.getElementById("fullname").value;
    data.age = document.getElementById("age").value;
    data.phone = document.getElementById("phone").value;
    User.editUserByID(id, data);
    $("#dialog1").modal('hide');
}


// Password
var newPass;
var confirmPass;
var upPassWord = function() {
    var userCur = JSON.parse(localStorage.getItem('user'));
    var dataUser = User.getUserID(userCur.id);
    listUser = User.getListUser();
    for (var i in listUser) {
        if (userCur.userName == listUser[i].userName) {
            document.getElementById("password").value = dataUser.passWord;
            newPass = document.getElementById("newPassword").value;
            confirmPass = document.getElementById("confirmPassword").value;
            document.getElementById("chinhSua").innerHTML = `<button class= "btn btn-outline-danger mt-3" onclick = "submitPass(${dataUser.id})"> Cập nhật</button>`
        }
    }
}

function submitPass(id) {
    console.log(id);
    var data = User.getUserID(id);
    if (newPass == confirmPass) {
        data.passWord = newPass;
        User.editUserByID(id, data);
        $("#changePass").modal('hide');
    } else {
        alert("Nhập mật khẩu sai");

    }

}