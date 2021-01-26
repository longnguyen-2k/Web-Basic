const URL_API_User = "https://600ba4de38fd25001702ca61.mockapi.io/api/User";

const URL_API_News = "https://600ba4de38fd25001702ca61.mockapi.io/api/News";

class User {
    listUser = [];
    constructor(userName, passWord, name, phone, email, age, address, job) {
        this.id = this.listUser[this.listUser.length - 1].id;
        this.userName = userName;
        this.passWord = passWord;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.age = age;
        this.address = address;
        this.job = job;

    }
    static getUserID(id) {}



    getUser() {
        return this;
    }

    static validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    static validateName(name) {
        const re = /^[a-zA-Z\-]+$/;
        return re.test(name);
    }



    static validateUserName(userName) {
        const re = /^[a-zA-Z0-9]+$/;
        return re.test(userName);
    }

    static validatePhone(phone) {
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return re.test(phone);

    }

    static checkValidInfo(name, userName, phone, email) {

        if (validateEmail(email) | validateName(name) | validatePhone(phone) | validateUserName(userName) == false) {
            alert("Date input not valid");
            return false;
        } else return true;

    }

    setUser(updateUser) {
        if (updateUser instanceof User) { this.getUser() = updateUser } else { alert("Data is not type of user"); }

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
        User.callAPI('', "GET", null).then((res) => { this.listUser = res.data; });
    }

    static editUserByID(id, body) {

            User.callAPI(id, "PUT", body).then((res) => { alert("Cập nhật thành công") });
            this.listUser.splice(parseInt(id), 1, User.callAPI(id, "GET", null));

        }
        // Create info
    static createUser(body) {
        User.callAPI('', "POST", body).then(respone => {
            console.log(respone.data);
            alert("Tao tai khoan thanh cong")
        });
        User.listUser.push(body);
    }
}