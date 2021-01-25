
 function table_user(){
    var html=`
    <h2 class="text-center" style="color: black; "> Quản lý người dùng  </h2>
    <button class="btn btn-primary"> <i class="fa fa-plus"></i> &ThickSpace; Thêm user </button>
<table class="table  table-striped table-hover table-dark" id="table_user"  >
<thead class="text-center" id="thead_user">
<tr>
  <th> ID </th>
  <th> User Name </th>
  <th > Password </th>
 
  <th> name </th>
  <th> sdt </th>
  <th> email </th>
  <th> address </th>
  <th>Registration Date </th>
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
    <td>  ${element.name}  </td>
    <td>  ${element.phone}  </td>
    <td>  ${element.email}  </td>
    <td>  ${element.address}  </td>
    <td> ${element.regDate}  </td>

     </tr>
     `
    
  });
  
  return html_body;

  }

 


  
