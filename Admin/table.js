
function switch_table_user(status) {
 
  if (status) {
    _('table_here').innerHTML = table_user();

  }
  else {
    _('table_here').innerHTML = table_user_deleted();  
 
  }
  _('tbody_user').innerHTML = data_table_user(status);


}

function switch_table_news(status) {
  if (status) {
    _('table_here').innerHTML = table_news();

  }
  else {
    _('table_here').innerHTML = table_new_deleted();
  }
  _('tbody_news').innerHTML = data_table_news(status);
}

function table_user() {
  var html = `
    <h2 class="text-center" style="color: black; "> Quản lý người dùng  </h2>
    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal_User" onclick='modalUser()'> <i class="fa fa-plus"></i> &ThickSpace; Thêm user </button>


<table class="table  table-striped table-hover table-dark" id="table_user"  >
<thead class="text-center" id="thead_user">
<tr>
  <th> ID </th>
  <th> User Name </th>
  <th > Password </th>
 
  <th> email </th>
  <th> name</th>
  <th> age </th>
  <th> phone </th>
  <th>Job title </th>
  <th> Action </th>
  
</tr>           
</thead>
<tbody id="tbody_user">

</tbody> 
</table> `;
  return html;


}


function table_news() {
  var html = `
    <h2 class="text-center" style="color: black; padding-top: 20px;"> Quản Lý Bài Đăng  </h2>
    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal_News" onclick='modalNews()' > <i class="fa fa-plus"></i> &ThickSpace; Thêm bài viết </button>

      <table class="table  table-striped table-hover table-dark" id="table_news"  >
    <thead class="text-center" id="thead_news">
      <tr>
        <th> ID </th>
        <th> Title</th>
        <th > UserName</th>     
        <th> Subject </th>
        <th> content </th>
        <th> Like </th>
        <th> Commnents </th>
        <th> Share </th>   
        <th> Action </th>
  
      </tr>           
    </thead>
    <tbody id="tbody_news">

    </tbody>  
    </table>
    `;


  return html;


}


function data_table_news(status) {

  var html_body = '';

  listNews.forEach(element => {
    if (status == true) {
      if (element.status == true) {
        html_body +=
          `<tr>    
      <td> ${element.id} </td>
      <td> ${element.title} </td>
      <td >  ${element.userName}  </td>
      <td>  ${element.subject}  </td>
      <td>  ${element.content}  </td>
      <td>  ${element.like}  </td>
      <td>  ${element.comments}  </td>
      <td> ${element.share}  </td>
      <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal_News" onclick='showEditNew( ${element.id})'>Edit</button>
      <button type="button" class="btn btn-danger" onclick='News.DeleteNewByIdJson( ${element.id})'>Delete</button> </td>
     </tr>
     `}
    }
    else {
      if (element.status == false) {
        html_body +=
          `<tr>    
      <td> ${element.id} </td>
      <td> ${element.title} </td>
      <td >  ${element.userName}  </td>
      <td>  ${element.subject}  </td>
      <td>  ${element.content}  </td>
      <td> ${element.deletedDate}  </td>
      <td><button type="button" class="btn btn-primary" onclick='News.Restore( ${element.id})'>Restore</button> </td>
     </tr>
     `}
    }

  });

  return html_body;
}



function data_table_user(status) {
  var html_body = '';

  User.getListUser().forEach(element => {
    
    if (status == true) {
      if(  element.status == true){
      html_body +=
        `<tr>    
    <td> ${element.id} </td>
    <td> ${element.userName} </td>
    <td >  ${element.passWord}  </td>
    <td>  ${element.email}  </td>
    <td>  ${element.name}  </td>
    <td>  ${element.age}  </td>
    <td>  ${element.phone}  </td>
    <td> ${element.job}  </td>
    
    <td><button type="button" class="btn btn-warning"  data-toggle="modal" data-target="#myModal_User" onclick='showEditUser( ${element.id})'>Edit</button>
    <button type="button" class="btn btn-danger" onclick='User.DeleteUserById( ${element.id})'>Delete</button> </td>
     </tr>`
    }}
    
    
    

    



    ///Lay id cho nay ne








    


    else {
      if(element.status == false ){
      html_body +=
        `<tr>    
    <td> ${element.id} </td>
    <td> ${element.userName} </td>
    <td>  ${element.email}  </td>
    <td>  ${element.name}  </td>
    <td>  ${element.age}  </td>
    <td>  ${element.phone}  </td>
    <td> ${element.job}  </td>
    <td> ${element.deletedDate}</td>
    <td><button type="button" class="btn btn-primary" onclick='User.Restore( ${element.id})'>Restore</button> </td>
     </tr> `
    }}
  });

  return html_body;

}

function showEditUser(id) {

  var user = User.getUserID(id);
  modalUser();
  for (let index = 0; index < document.forms.namedItem("addUser").elements.length; index++) {
    var x = document.forms.namedItem("addUser").elements[index];
    if (x.id == "input_cpass") {
      document.forms.namedItem('addUser').removeChild(x);
    }

  }
  _('input_pass').setAttribute('type', 'text');
  _('modal-title').innerHTML = "Chỉnh sửa user";
  _('input_userName').value = user.userName;
  _('input_name').value = user.name;
  _('input_pass').value = user.passWord;
  _('input_phone').value = user.phone;
  _('input_email').value = user.email;
  _('dongy').innerHTML = "Save";
  _('dongy').setAttribute('onclick', 'submitUser(' + id + ')');
}

function submitUser(id) {
  var user = User.getUserID(id);
  user.userName = _('input_userName').value;
  user.name = _('input_name').value;
  user.passWord = _('input_pass').value;
  user.phone = _('input_phone').value;
  user.email = _('input_email').value;
  User.editUserByID(id, user);
  $('#myModal_User').modal('hide');
  _('tbody_user').innerHTML = data_table_user(true);
}


function showEditNew(id) {

  var news = News.getNewByID(id);
  modalNews();

  _('modal-title').innerHTML = "Chỉnh sửa user";
  _('input_title').value = news.title;

  _('input_userName').value = news.userName;
  _('input_subject').value = news.subject;
  _('input_content').value = news.content;
  _('input_like').value = news.like;
  _('input_comment').value = news.comments;
  _('input_share').value = news.share;
  _('dongy').setAttribute('onclick', 'submitNew(' + id + ')');


}

function submitNew(id) {
  var news = News.getNewByID(id);
  news.title = _('input_title').value;

  news.userName = _('input_userName').value;
  news.subject = _('input_subject').value;
  news.content = _('input_content').value;
  news.like = _('input_like').value;
  news.comments = _('input_comment').value;
  news.share = _('input_share').value;

  News.editNewByID(id, news);
  $('#myModal_News').modal('hide');
  _('tbody_news').innerHTML = data_table_news(true);
}

function modalUser() {
  var html = `<div class="modal" id="myModal_User">
    <div class="modal-dialog">
      <div class="modal-content">
       
        <div class="modal-header">
          <h4 class="modal-title" id="modal-title">Thêm user</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
          <form class="form-group" id="addUser">
            <input type="text" class="form-control col-12 mt-3 " placeholder="User name" id="input_userName"  "> 
            <input type="text" class="form-control col-12 mt-3" placeholder="Name" id="input_name" required> 

            <input type="password" class="form-control col-12 mt-3" placeholder="Password" id="input_pass" required>
            <input type="password" class="form-control col-12 mt-3" placeholder="Confirm password" id="input_cpass" required>
            <input type="text" class="form-control col-12 mt-3" placeholder="Phone"  id="input_phone" required> 
            <input type="text" class="form-control  col-12 mt-3" placeholder="Email" id="input_email"required> 
         
        </form>
        <button id="dongy" class="btn btn-primary m-2 ml-2 mr-2  "  onclick="check_valid_input()"> Đồng ý</button>

        </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
        
  `;
  _('modal_here').innerHTML = html;
}


function modalNews() {
  var html = `
    <div class="modal" id="myModal_News">
    <div class="modal-dialog">
      <div class="modal-content">
       
        <div class="modal-header">
          <h4 class="modal-title" id='modal-title'>Them bai dang</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
          <form class="form-group" id="addNew">
            <input type="text" class="form-control col-12 mt-3 " placeholder="Title" id="input_title"  > 
            <input type="text" class="form-control col-12 mt-3" placeholder="User Name" id="input_userName" required> 

            <input type="text" class="form-control col-12 mt-3" placeholder="Subject" id="input_subject" required>
            <input type="text" class="form-control col-12 mt-3" placeholder="content" id="input_content" required>
            <input type="text" class="form-control col-12 mt-3" placeholder="like"  id="input_like" required> 
            <input type="text" class="form-control  col-12 mt-3" placeholder="comment" id="input_comment"required> 
            <input type="text" class="form-control  col-12 mt-3" placeholder="share" id="input_share"required> 

         
        </form>
        <button id='dongy'  class="btn btn-primary m-2 ml-2 mr-2  "  onclick="check_valid_input2()"> Đồng ý</button>

        </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
        
  `;
  _('modal_here').innerHTML = html;
}






function table_user_deleted() {
  var html = `
  <h2 class="text-center" style="color: black; "> Khôi Phục Dữ liệu  </h2>
  <button class="btn btn-primary" onclick='User.restoreAll()' > <i class="fa fa-plus"></i> &ThickSpace; KHôi phục tất cả </button>


<table class="table  table-striped table-hover table-dark" id="table_user"  >
<thead class="text-center" id="thead_user">
<tr>
<th> ID </th>
<th> User Name </th>
<th > Password </th>
<th> email </th>
<th> age </th>
<th> phone </th>
<th>Job title </th>
<th> Deleted Date</th>
<th> Action </th>

</tr>           
</thead>
<tbody id="tbody_user">

</tbody> 
</table> `;
  return html;



}
function table_new_deleted() {

  var html = `
  <h2 class="text-center" style="color: black; padding-top: 20px;"> Quản Lý Bài Đăng  </h2>
  <button class="btn btn-primary"  onclick='News.restoreAll()'> <i class="fa fa-plus"></i> &ThickSpace;   KHôi phục tất cả </button>

    <table class="table  table-striped table-hover table-dark" id="table_news"  >
  <thead class="text-center" id="thead_news">
    <tr>
      <th> ID </th>
      <th> Title</th>
      <th > UserName</th>     
      <th> Subject </th>
      <th> Content </th>
      <th> Deleted Date </th>
      <th> Action </th>

    </tr>           
  </thead>
  <tbody id="tbody_news">

  </tbody>  
  </table>
  `;


  return html;
}

