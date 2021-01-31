// const URL_API_User = "https://600ba4de38fd25001702ca61.mockapi.io/api/User";

// class User {
//     listUser = [];

//     constructor(userName, passWord, email, name, age, phone, job) {
//         if (this.listUser.length == 0 || this.listUser == null) {
//             this.id = 1;
//         } else {
//             this.id = this.listUser[this.listUser.length - 1].id;
//         }
//         this.userName = userName;
//         this.passWord = passWord;
//         this.name = name;
//         this.phone = phone;
//         this.email = email;
//         this.age = age;
//         this.job = job;

//     }
//     static callAPI(endpoint, method, body) {
//         return axios({
//             method: method,
//             url: `${URL_API_User}/${endpoint}`,
//             data: body,
//         }).
//         catch((err) => {
//             console.log(err);
//         });
//     }

//     static loadData() {
//         User.callAPI('', "GET", null).then((res) => { this.listUser = res.data; });
//     }

//     static editUserByID(id, body) {

//         User.callAPI(id, "PUT", body).then((res) => { alert("Cập nhật thành công") });
//         this.listUser.splice(parseInt(id), 1, User.callAPI(id, "GET", null));

//     }

// }