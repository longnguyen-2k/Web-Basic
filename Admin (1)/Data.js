

const URL_API_User = "https://600ba4de38fd25001702ca61.mockapi.io/api/User";

const URL_API_News = "https://600ba4de38fd25001702ca61.mockapi.io/api/News";

//location.assign('url) : load  html

class User {


  listUser = [];
  constructor( userName, passWord, name, phone, email, address, regDate) {
    if(this.listUser.length==0 ||this.listUser==null){
    this.id=1;
  }
    else{
    this.id = this.listUser[this.listUser.length-1].id;
    }
    this.userName = userName;
    this.passWord = passWord;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.regDate = regDate;
    
  }

  addNew(id){
    this.idNews.push(id);
  }


  static getUserID(id) {

    return  this.listUser.filter((value) =>{
      return value.id===id
     })
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
    User.callAPI('', "GET", null).then((res) => { this.listUser = res.data;  });
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
    listUserLike=[];
    listUserShare=[];

    like=0;
    share=0;
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


  countLike(idUser){

      if(this.listUserLike.findIndex(value=> {return value==idUser})==-1)
          this.like--;
      else 
          this.like++;

  }

  addComment(body,idUser){
    if(this.listUserShare==null){
      this.listUserShare=[];
    }

   var comment ={
      idUser:idUser,
      content:body,
    };
    this.listUserShare.push(comment);
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


function randomNumber(from,to){ //radom 1 so trong 1 khoang cho truoc
  
  

  return Math.floor( Math.random()*(to-from))+from+1;
}


function randomNews(from,to){

 return listNews[randomNumber(from,to)];//tra ve mot bai dang ngau nhien

}

function  CreateBaiDang(n) { // Truyen vao so luong can lay,(n) Ham nay tra ve mang ngau nhien cua cac bai dang// No khong lap lai cac bai trung nhau
  
  if(typeof n !==Number){
    n=parent(n);
  }
   var arr=[];
   if(n> listNews.length){ // n truyen vao  khong duoc nhieu hon so bai new dang co
     n=listNews.length;
   }
  for (let index = 0; index <n; index++) {
     
     if(arr==[]){
      arr.push( CreateBaiDang(0,n));
     }
     else{
          var ys= CreateBaiDang(0,n);
        if(  arr.findIndex(value=> ys.id===value.id )==-1) //neu ton tai thi random tiep
          {
            i--;
          }
        else{
         arr.push(ys); 
        }
     }
     
  }




}