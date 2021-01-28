const URL_API = "https://600ba4de38fd25001702ca61.mockapi.io/api/User";

function callAPI(endpoint, method, body) {
    return axios({
        method: method,
        url: `${URL_API}/${endpoint}`,
        data: body,
    }).
    catch((err) => {
        console.log(err);
    });
}

var users = [{
        newUsername: "Tuanhero",
        newPassword: "2632001",
        newEmail: "tuan.nguyenit263@gmail.com",
        name: "Nguyen Anh Tuan",
        age: "18",
        phones: "0829970447",
        job: "UX/UI designer",
    },
    {
        newUsername: "Phonglong",
        newPassword: "11111",
        newEmail: "long.phong@gmail.com",
        name: "Nguyen Dinh Long",
        age: "18",
        phones: "09740047",
        job: "Back-end Developer",
    },
];

function save() {
    localStorage.setItem('user_local', JSON.stringify(users));
}

function load() {
    users = JSON.parse(localStorage.getItem('user_local'));
}

if (localStorage.getItem("user_local") != null) {
    load();
}

var id;
for (i = 0; i <= users.length; i++) {
    id = i;
};
var input_data = function() {
    var account = {
        id: id,
        newUsername: document.getElementById("newUsername").value,
        newPassword: document.getElementById("newPassword").value,
        newEmail: document.getElementById("newEmail").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value | 0,
        phones: document.getElementById("phones").value,
        job: document.getElementById("job").value,
    }
    users.push(account);
    save();
    callAPI("User", "POST", account).then(respone => {
        alert("Tạo tài khoản thành công!");
        window.location.replace("../Home/home.html");
    });


}
var check = 0;
var checkLogin = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for (var i in users) {
        var data = JSON.parse(JSON.stringify(users[i]))
        if (username == data.newUsername && password == data.newPassword) {
            check++;
        } else {
            check = 0;
        }
        return check;
    }
}

var login = function() {
    if (checkLogin() != 0) {
        alert("Đăng nhập thành công!");
        window.location.replace("../Home/home.html");
    } else {
        document.getElementById('errorText').innerHTML = "Tên đăng nhập hoặc mật khẩu sai!";

    }
}


var checkSignUp;
var checkSignup = function() {
    var newUsername = document.getElementById('newUsername').value;
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    var rePass = document.getElementById('rePassword').value;
    for (var i in users) {
        var data = JSON.parse(JSON.stringify(users[i]))
        if (newUsername == data.newUsername) {
            checkSignUp = 1;
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






// var update = function(i) {
//     var k = product[i];
//     document.getElementById("idd").value = k.id;
//     document.getElementById("named").value = k.name;
//     document.getElementById("imged").value = k.img;
//     document.getElementById("priced").value = k.price;
//     document.getElementById("idd").setAttribute("disabled", "disabled");
//     document.getElementById("submit").innerHTML = '<button class= "btn btn-outline-danger mt-3" onclick = "submit (' + i + ')"> Agree</button>'
// }
// var submit = function(i) {
//     var k = product[i];
//     k.id = document.getElementById("idd").value;
//     k.name = document.getElementById("named").value;
//     k.img = document.getElementById("imged").value;
//     k.price = document.getElementById("priced").value;
//     localStorage.setItem('listProduct', JSON.stringify(product));
//     save();
//     window.location.reload();
// }