

 window.onload =init;
function init() {// chuan bi du lieu
    User.loadData();
   // News.loadData();
    News.loadDataByJson();
    // setTimeout(() => {
    //     console.log('Hello Timeout!')
    //  }, 3000);
    
}

 function _ (id) {
    return document.getElementById(id);
}
var menu_scrolled = false;

function menu_scroll() {
    console.log(User.getListUser())

    if (menu_scrolled == true) {
        menu_scrolled = false;
        _('aside_bar').className = "sidebar border-left shadow col-1 ";
        _('admin_text').innerHTML = '';
        _('dashboard_text').innerHTML = '';
        _('tables_text').innerHTML = '';
        _('graphs_text').innerHTML = '';
        _('cycle_bin').innerHTML = '';
        _('icon_chevron').className = '';
        _('icon_chevron2').className = '';
        _('icon_chevron3').className = '';
        _('icon_chevron4').className = '';



    }
    else {
        _('aside_bar').className = "sidebar border-left shadow col-3";
        _('admin_text').innerHTML = 'Admin';
        menu_scrolled = true;
        _('dashboard_text').innerHTML = 'Dashboards';
        _('tables_text').innerHTML = 'Tables';
        _('graphs_text').innerHTML = 'Graphs';
        _('cycle_bin').innerHTML = 'Cycle Bin';

        _('icon_chevron').className = 'fa fa-chevron-left pull-right';
        _('icon_chevron2').className = 'fa fa-chevron-left pull-right';
        _('icon_chevron3').className = 'fa fa-chevron-left pull-right';
        _('icon_chevron4').className = 'fa fa-chevron-left pull-right';


    }
}






function check_valid_input(){
    for (let index = 0; index <  document.forms.namedItem("addUser").elements.length; index++) {
        var   x=document.forms.namedItem("addUser").elements[index].value;
           if(x==null||x==''){
               alert("Vui long nhap du thong tin");
               return false;
           }
           
       }
   
       var check=true;
       if( User.validateUserName(_('input_userName').value)==false){
           _('input_userName').className+="alert alert-danger";
           _('input_userName').value='';
           _('input_userName').setAttribute('placeholder','User Name not valid ');
           check=false;
       }
   
       if(  User.getListUser().findIndex(value =>{ return value.userName==_('input_userName').value; })!=-1 )
        {

            _('input_userName').className+="alert alert-danger";
            _('input_userName').value='';

            _('input_userName').setAttribute('placeholder','User Name is already exist ');
            check=false;
        }
       if( User.validateEmail(_('input_email').value)==false){
        _('input_email').className+="alert alert-danger";
        _('input_email').value='';
        _('input_email').setAttribute('placeholder','Email not valid ');
        check=false;
        }
        if( User.validateName(_('input_name').value)==false){
            _('input_name').className+="alert alert-danger";
            _('input_name').value='';
            _('input_name').setAttribute('placeholder',' Name not valid ');
            check=false;
        }
        if( User.validatePhone(_('input_phone').value)==false){
            _('input_phone').className+="alert alert-danger";
            _('input_phone').value='';
            _('input_phone').setAttribute('placeholder',' Phone not valid ');
            check=false;
        }


        if(_('input_pass').value!=_('input_cpass').value){ 
            alert('Mat khau xac nhan khong trung khop ');
            _('input_pass').value='';
            _('input_cpass').value='';

        }
        



        if(check==true){
            var user= new User(_('input_userName').value,_('input_pass').value,_('input_email').value,_('input_name').value,'',_('input_phone').value,'');
            User.createUser(user);
            for (let index = 0; index <  document.forms.namedItem("addUser").elements.length; index++) {
                document.forms.namedItem("addUser").elements[index].value="";
                   
                   
               }
           
        }


      
        
      
}

function  check_valid_input2(){
    check=true;
    for (let index = 0; index <  document.forms.namedItem("addNew").elements.length; index++) {
        var   x=document.forms.namedItem("addNew").elements[index].value;
           if(x==null||x==''){
               alert("Vui long nhap du thong tin");
               
               return false;
           }
           
       }
       if(check){
        
           var news= new News(_('input_title').value,

           _('input_userName').value,
           _('input_subject').value,
           _('input_content').value,
           _('input_like').value,
           _('input_comment').value,
           _('input_share').value);
           News.createNew(news);
       }

  }