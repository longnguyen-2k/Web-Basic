

const URL_API_User = "https://600ba4de38fd25001702ca61.mockapi.io/api/User";

const URL_API_News = "https://600ba4de38fd25001702ca61.mockapi.io/api/News";

class User {


  listUser = [];
  constructor( userName, passWord, name, phone, email, address, regDate) {
    this.id = this.listUser[this.listUser.length-1].id;
    this.userName = userName;
    this.passWord = passWord;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.regDate = regDate;

  }
  static getUserID(id) {

  }


  static getListUser(){
    return this.listUser;
  }
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
    }
    else return true;

  }

  setUser(NewUser) {
    if (NewUser instanceof User) { this.getUser() = NewUser }

    else { alert("Data is not type of user"); }

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

  static createUser(body){
  //  var id= this.listUser(this.listUser.length-1).id;
  //   body.id=id;
    User.callAPI('',"POST",body).then(respone=> {console.log(respone.data); alert ("Tao tai khoan thanh cong")});
    User.listUser.push(body);
  }
  static DeleteUserById(id) {
    User.callAPI(id, "DELETE", null).then(res => { alert("Xóa thành công") });
    this.listUser.splice(parseInt(id), 1);
  }

}



var listNews=[];
class News{

  constructor(title,	userName,	subject	,content,	like,	comments,	share){
    if(listNews>0){
    this.id=listNews[listNews.length-1].id;}
    else{
    this.id=1;}


    this.title=title;
    this.userName=userName;
    this.subject=subject;
    this.content=content;
    this.like=like;
    this.comments=comments;
    this.share=share;
  }


  static getNewByID(id) {


  listNews.filter((value) =>{
     return value.id===id
    })
    
  }



  getNew() {
    return this;
  }

 
  

  setNews(news) {
    if (news instanceof News) { this.getNew() = news }

    else { alert("Data is not type of post"); }

  }
  static callAPI(endpoint, method, body) {
    return axios({
      method: method,
      url: `${URL_API_News}/${endpoint}`,
      data: body,
    }).
      catch((err) => {
        console.log(err);
      });
  }

  static loadData() {
    News.callAPI('', "GET", null).then((res) => {  listNews= res.data; });
  }

  static editNewByID(id, body) {

    News.callAPI(id, "PUT", body).then((res) => { alert("Cập nhật thành công") });
    listNews.splice(parseInt(id), 1, News.callAPI(id, "GET", null));

  }

  static createNew(body){
 
    News.callAPI('',"POST",body).then(respone=> {console.log(respone.data); alert ("Dang thanh cong")});
    listNews.push(body);
  }
  static DeleteNewById(id) {
    if(confirm("This action to delete that new\n Do you want delete")){
    callAPI(id, "DELETE", null).then(res => { alert("Xóa thành công") });
    this.listNews.splice(parseInt(id), 1);
  }
  

  }



}