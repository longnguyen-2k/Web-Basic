const API_URL = "https://5f871d4b49ccbb0016176fe1.mockapi.io/ai";

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}

var id;
// Lưu thông tin 
function save() {
    var user = JSON.parse(localStorage.getItem("user_info")) || [];
    for (i = 0; i <= user.length; i++) {
        id = i;
    }
    var username = document.getElementById("username").value;
    var newEmail = document.getElementById("newEmail").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value | 0;
    var address = document.getElementById("address").value;
    var job = document.getElementById("job").value;
    if (name | detail | note | (price != "")) {
        var account = {
            id: id,
            username: username,
            newEmail: newEmail,
            password: password,
            name: name,
            age: age,
            address: address,
            job: job,
        };
        user.push(account);
        callAPI("user", "POST", account).then((response) => {
            show();
            alert("Thêm thông tin thành công!");
        });

    } else {
        reset();
    }
}
// Hiển thị thông tin
function show() {
    callAPI("user", "GET", null).then((res) => {
        hotels = res.data;
        let row = "";
        for (i in user) {
            row += "<tr >";
            row += "<td>" + user[i].id + "</td>";
            row += "<td>" + user[i].username + "</td>";
            row += "<td>" + user[i].password + "</td>";
            row += "<td>" + user[i].name + "</td>";
            row += "<td>" + user[i].age + "</td>";
            row += "<td>" + user[i].address + "</td>";
            row += "<td>" + user[i].job + "</td>";
            row += "<td>" +
                `<button type="button" onclick="editsp(${i})" class="btn btn-success">Edit</button>` + "</td>";
            row += "< td >" + `<button type="button" onclick="deletesp(${i})" class="btn btn-danger">Delete</button>` + "</td>";
            row += "</tr>";
        }
        document.getElementById("tab").innerHTML = row;
    });
}
// Cập nhật thông tin
function editok(id) {
    document.getElementById("huy").style.display = "none";
    document.getElementById("themmoi").style.display = "block";
    document.getElementById("divAddHotel").style.display = "none";
    var nameproduct = document.getElementById("nameproduct").value;
    var price = document.getElementById("priceproduct").value;
    var note = document.getElementById("noteproduct").value;
    var detail = document.getElementById("detailproduct").value;
    let img = document.getElementById("imgproduct").value;
    var image = img.split("\\")[2];

    var oneProduct = {
        id: id,
        name: nameproduct,
        price: price,
        note: note,
        detail: detail,
        img: "images/" + image
    }

    callAPI(`hotels/${id}`, "PUT", oneProduct).then((response) => {
        alert("Cập nhật thông tin thành công!");
        show();

    });
    if (document.getElementById("edit").style.display == "block") {
        document.getElementById("edit").style.display = "none";
        document.getElementById("ok").style.display = "block";
    } else {
        document.getElementById("edit").style.display = "block";
        document.getElementById("ok").style.display = "none";
    }


    reset();
}

function reset() {
    document.getElementById("username").value = "";
    document.getElementById("newEmail").value = "";
    document.getElementById("password").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("job").value = "";
}