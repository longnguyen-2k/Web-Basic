

const URL_API_User = "http://localhost:3000/users";

//const URL_API_News_Mock = "https://600ba4de38fd25001702ca61.mockapi.io/api/News";
const URL_ARI_News_Json="http://localhost:3000/news";




//location.assign('url) : load  html
var listUser = [];


class User {


  constructor( userName, passWord, email, name, age, phone, job) {
    if(listUser.length==0 ||listUser==null){
    this.id=1;
  }
    else{
    this.id = listUser[listUser.length-1].id+1;
    }
    this.userName = userName;
    this.passWord = passWord;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.age = age;
    this.job = job;
    this.status=true;
  }



  static getUserID(id) {
  var user=  listUser.filter((value) =>{
      return value.id==id
     });
    return  user[0];
  }


  static getListUser(){
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
    User.callAPI("", "GET", null).then((res) => { listUser = res.data;  });
  }

  static editUserByID(id, body) {

    User.callAPI(id, "PUT", body).then((res) => { alert("Cập nhật thành công") });
     User.callAPI('', "GET", null);

  }



  

  static restoreAll(){
    if(confirm("Ban muon khoi phuc tat ca khong")){
      listUser.forEach(element => {
        if(element.status==false){
          element.status=true;  } });
       
  
    }
    alert("Tat ca da duoc khoi phuc");
    _('tbody_user').innerHTML=data_table_user(false);
  }

  static createUser(body){
  //  var id= this.listUser(this.listUser.length-1).id;
  //   body.id=id;
    User.callAPI('',"POST",body).then(respone=> {console.log(respone.data); alert ("Tao tai khoan thanh cong")});
    User.listUser.push(body);
  }
  static DeleteUserById(id) {
    if(confirm("Ban co chac la muon xoa khong")){
      var deleteUser= this.getUserID(id);
      deleteUser.deletedDate=new Date();
      deleteUser.status=false;
      
      // console.log(this.getUserID(id))
      User.callAPI(id, "DELETE", null);
      setTimeout(()=>{ _('tbody_user').innerHTML=data_table_user(true);},100);
   
    }
  }
  static deleteBin(id){
    var user= User.getUserID(id);
    listUser= listUser.filter(value=> {
      return value.id!=user.id;
    });
    User.callAPI(id, "DELETE", null);
    _('tbody_user').innerHTML=data_table_user(false);
  }
  static Restore(id){
    var user= User.getUserID(id);
      user.status=true;
      User.callAPI(id,"PUT",user);
      _('tbody_user').innerHTML=data_table_user(false);


  }



}



var listNews=[];
class News{
    listUserLike=[];
    listUserShare=[];

    like=0;
    share=0;
  constructor(title,	userName,	subject	,content,	like,	comments,	share){
    if(listNews.length==0 ||listNews==null){
      this.id=1;
    }
      else{
      this.id =listNews[listNews.length-1].id+1;
      }
    this.title=title;
    this.userName=userName;
    this.subject=subject;
    this.content=content;
    this.like=like;
    this.comments=comments;
    this.share=share;
    this.status=true;
  }


  static getNewByID(id) {
   var new1= listNews.filter((value) =>{
     return value.id==id
    });
    console.log(new1[0])
    return new1[0];
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
      url: `${URL_ARI_News_Json}/${endpoint}`,
      data: body,
    }).
      catch((err) => {
        console.log(err);
      });
  }


  static   loadDataByJson() {
    axios.get(URL_ARI_News_Json)
    .then(resp => {
        listNews=resp.data;
    })
    .catch(error => {
        console.log(error);
    }); 

  }
  
  static loadData() {
    News.callAPI('', "GET", null).then((res) => {  listNews= res.data; });
  }

  static editNewByID(id, body) {
    News.callAPI(id, "PUT", body).then((res) => { alert("Cập nhật thành công") });
    News.callAPI('', "GET", null).then((respone)=>{
      listNews=respone.data;
    });


  }

  static createNew(body){
 
    News.callAPI(body.id,"POST",body).then(respone=> { alert ("Dang thanh cong")});
    News.callAPI('',"GET",null);
  }
  static DeleteNewById(id) {
    if(confirm("This action to delete that new\n Do you want delete")){
    News.callAPI(id, "DELETE", null);
    var deletaNew=News.getNewByID(id);
    listNews= listNews.filter(value=> {
      return value.id !=deletaNew.id;
    });

    setTimeout(()=>{ _('tbody_news').innerHTML=data_table_news(true);},100);
  }

  }
  static DeleteNewByIdJson(id){
    if(confirm("This action to delete that new\n Do you want delete")){   
      var deletaNew=News.getNewByID(id);
      deletaNew.deletedDate=new Date();
      deletaNew.status=false;
      var url=URL_ARI_News_Json+"/"+id+"/";
      //axios.delete(url).then(resp => {console.log(resp.data);}).catch(error => {
    //console.log(error);
    //  });   
     
   setTimeout(()=>{ _('tbody_news').innerHTML=data_table_news(true);},100);
    }
  
  }

  static deleteBin(id){
    var news= News.getNewByID(id);
    listNews= listNews.filter(value=> {
      return value.id!=news.id;
    });
    News.callAPI(id, "DELETE", null);
    _('tbody_news').innerHTML=data_table_news(false);
  }

  static Restore(id){
    var news=this.getNewByID(id);
      news.status=true;
      _('tbody_news').innerHTML=data_table_news(false);
     // News.callAPI(id,"PUT",news);
  }
  static restoreAll(){
    if(confirm("Ban muon khoi phuc tat ca khong")){
    listNews.forEach(element => {
      if(element.status==false){
        element.status=true;  } });
     

  }
  alert("Tat ca da duoc khoi phuc");
  _('tbody_news').innerHTML=data_table_news(false);
}
}

// addNew(id){
//   this.idNews.push(id);
// }

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
      arr.push( randomNews(0,n));
     }
     else{
          var rd= randomNews(0,n);
        if(  arr.findIndex(value=> {return ys.id==value.id })==-1) //neu ton tai thi random tiep
          {
            index--;
          }
        else{
         arr.push(rd); 
        }
     }
     
  }

}

