
 function table_user(){
    var html=`
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


  function table_news(){
    var html=`
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


function data_table_news(){
  
  var html_body='';

  listNews.forEach(element => {
    html_body+=  
    `<tr>    
    <td> ${element.id} </td>
    <td> ${element.title} </td>
    <td >  ${element.userName}  </td>
    <td>  ${element.subject}  </td>
    <td>  ${element.content}  </td>
    <td>  ${element.like}  </td>
    <td>  ${element.comments}  </td>
    <td> ${element.share}  </td>
    <td><button type="button" class="btn btn-warning" onclick='showEditNews( ${element.id})'>Edit</button>
    <button type="button" class="btn btn-danger" onclick='News.DeleteNewById( ${element.id})'>Delete</button> </td>


     </tr>
     `
    
  });

  return html_body;


}



function data_table_user(){
  var html_body='';

  User.getListUser().forEach(element => {
    html_body+=  
    `<tr>    
    <td> ${element.id} </td>
    <td> ${element.userName} </td>
    <td >  ${element.passWord}  </td>
    <td>  ${element.email}  </td>
    <td>  ${element.name}  </td>
    <td>  ${element.age}  </td>
    <td>  ${element.phone}  </td>
    <td> ${element.job}  </td>
    <td><button type="button" class="btn btn-warning" onclick='showEditUser( ${element.id})'>Edit</button>
    <button type="button" class="btn btn-danger" onclick='User.DeleteUserById( ${element.id})'>Delete</button> </td>

     </tr>
     `
    
  });
  
  return html_body;

  }
  
  function modalUser(){
    var html=`<div class="modal" id="myModal_User">
    <div class="modal-dialog">
      <div class="modal-content">
       
        <div class="modal-header">
          <h4 class="modal-title">Thêm user</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
          <form class="form-group" id="addUser">
            <input type="text" class="form-control col-12 mt-3 " placeholder="User name" id="input_userName"  onclick="check_valid_input"> 
            <input type="text" class="form-control col-12 mt-3" placeholder="Name" id="input_name" required> 

            <input type="password" class="form-control col-12 mt-3" placeholder="Password" id="input_pass" required>
            <input type="password" class="form-control col-12 mt-3" placeholder="Confirm password" id="input_cpass" required>
            <input type="text" class="form-control col-12 mt-3" placeholder="Phone"  id="input_phone" required> 
            <input type="text" class="form-control  col-12 mt-3" placeholder="Email" id="input_email"required> 
         
        </form>
        <button href="" class="btn btn-primary m-2 ml-2 mr-2  "  onclick="check_valid_input()"> Đồng ý</button>

        </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
        
  `;
    $('modal_here').innerHTML=html;
  }


  function modalNews(){
   var html=`
    <div class="modal" id="myModal_News">
    <div class="modal-dialog">
      <div class="modal-content">
       
        <div class="modal-header">
          <h4 class="modal-title">Them bai dang</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
          <form class="form-group" id="addUser">
            <input type="text" class="form-control col-12 mt-3 " placeholder="User name" id="input_userName"  onclick="check_valid_input"> 
            <input type="text" class="form-control col-12 mt-3" placeholder="Name" id="input_name" required> 

            <input type="password" class="form-control col-12 mt-3" placeholder="Password" id="input_pass" required>
            <input type="password" class="form-control col-12 mt-3" placeholder="Confirm password" id="input_cpass" required>
            <input type="text" class="form-control col-12 mt-3" placeholder="Phone"  id="input_phone" required> 
            <input type="text" class="form-control  col-12 mt-3" placeholder="Email" id="input_email"required> 
         
        </form>
        <button href="" class="btn btn-primary m-2 ml-2 mr-2  "  onclick="check_valid_input()"> Đồng ý</button>

        </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
        
  `;
  $('modal_here').innerHTML=html;
  }

 


  
