const API_URL = "https://600d5237f979dd001745ca76.mockapi.io/user";

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}

var users = [{
        NewUsername: "Tuanhero",
        newEmail: "tuan.nguyenit263@gmail.com",
        newPassword: "2632001",
        name: "Nguyen Anh Tuan",
        age: "18",
        phones: "0829970447",
        job: "UX/UI designer",
    },

];

function save() {
    localStorage.setItem('user', JSON.stringify(users));
}

function load() {
    users = JSON.parse(localStorage.getItem('user'));
}

if (localStorage.getItem("user") != null) {
    load();
}

var id;
for (i = 0; i <= users.length; i++) {
    id = i;
};
var input_data = function() {

    var account = {
        id: id,
        NewUsername: document.getElementById("NewUsername").value,
        newEmail: document.getElementById("newEmail").value,
        newPassword: document.getElementById("newPassword").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value | 0,
        phones: document.getElementById("phones").value,
        job: document.getElementById("job").value,
    }
    users.push(account);
    localStorage.setItem('user', JSON.stringify(users));
    save();
    window.location.reload();
    callAPI("user", "POST", account).then((response) => {

    });

}


//     // Hiển thị thông tin
// function show() {
//     callAPI("user", "GET", null).then((res) => {
//         hotels = res.data;
//         let row = "";
//         for (i in user) {
//             row += "<tr >";
//             row += "<td>" + user[i].id + "</td>";
//             row += "<td>" + user[i].username + "</td>";
//             row += "<td>" + user[i].newEmail + "</td>";
//             row += "<td>" + user[i].password + "</td>";
//             row += "<td>" + user[i].name + "</td>";
//             row += "<td>" + user[i].age + "</td>";
//             row += "<td>" + user[i].address + "</td>";
//             row += "<td>" + user[i].job + "</td>";
//             row += "<td>" +
//                 `<button type="button" onclick="editsp(${i})" class="btn btn-success">Edit</button>` + "</td>";
//             row += "< td >" + `<button type="button" onclick="deletesp(${i})" class="btn btn-danger">Delete</button>` + "</td>";
//             row += "</tr>";
//         }
//         document.getElementById("tab").innerHTML = row;
//     });
//     save();
// }
// show();






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