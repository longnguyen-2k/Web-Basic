const URL_API_User = "https://600ba4de38fd25001702ca61.mockapi.io/api/User";
listUser = [];
class User {

    constructor(userName, passWord, email, name, age, phone, job) {
        if (this.listUser.length == 0 || this.listUser == null) {
            this.id = 1;
        } else {
            this.id = this.listUser[this.listUser.length - 1].id;
        }
        this.userName = userName;
        this.passWord = passWord;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.age = age;
        this.job = job;

    }


    static getUserID(id) {
        var user = listUser.filter((value) => {
            return value.id == id
        });
        return user[0];
    }


    static getListUser() {
        return listUser;
    }
    getUser() {
        return this;
    }

    static validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    static validateName(name) {
        const re = /^[a-zA-Z]+$/;
        return re.test(name);
    }



    static validateUserName(userName) {
        const re = /^[a-zA-Z0-9]+$/;
        return re.test(userName);
    }

    static validatePhone(phone) {
        const re = /^\(?([0-9]{3})\)??([0-9]{3})?([0-9]{4})$/;
        return re.test(phone);

    }

    static checkValidInfo(name, userName, phone, email) {

        if (validateEmail(email) | validateName(name) | validatePhone(phone) | validateUserName(userName) == false) {
            alert("Date input not valid");
            return false;
        } else return true;

    }

    setUser(NewUser) {
        if (NewUser instanceof User) { this.getUser() = NewUser } else { alert("Data is not type of user"); }

    }
    static callAPI(endpoint, method, body) {
        return axios({
            method: method,
            url: `${URL_API_User}/${endpoint}`,
            data: body,
        }).
        catch((err) => {
            console.log(err);
        });
    }

    static loadData() {
        User.callAPI('', "GET", null).then((res) => { listUser = res.data; });
    }

    static createUser(body) {

        User.callAPI('', "POST", body).then(respone => {
            console.log(respone.data);
            alert("Thêm thông tin thành công")
        });
        listUser.push(body);
    }


    static editUserByID(id, body) {

        User.callAPI(id, "PUT", body).then((res) => { alert("Cập nhật thành công") });
        User.callAPI('', "GET", null);

    }


}