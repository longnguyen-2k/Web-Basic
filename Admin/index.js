window.onload = init();

function init() { // chuan bi du lieu
    User.loadData();
    console.log(User.getListUser())
    News.loadData();
    News.getAPI();
    // setTimeout(() => {
    //     console.log('Hello Timeout!')
    //  }, 3000);

}

var $ = function(id) {
    return document.getElementById(id);
}
var menu_scrolled = false;

function menu_scroll() {
    console.log(User.getListUser())

    if (menu_scrolled == true) {
        menu_scrolled = false;
        $('aside_bar').className = "sidebar border-left shadow col-1 ";
        $('admin_text').innerHTML = '';
        $('dashboard_text').innerHTML = '';
        $('tables_text').innerHTML = '';
        $('graphs_text').innerHTML = '';
        $('icon_chevron').className = '';
        $('icon_chevron2').className = '';
        $('icon_chevron3').className = '';


    } else {
        $('aside_bar').className = "sidebar border-left shadow col-3";
        $('admin_text').innerHTML = 'Admin';
        menu_scrolled = true;
        $('dashboard_text').innerHTML = 'Dashboards';
        $('tables_text').innerHTML = 'Tables';
        $('graphs_text').innerHTML = 'Graphs';
        $('icon_chevron').className = 'fa fa-chevron-left pull-right';
        $('icon_chevron2').className = 'fa fa-chevron-left pull-right';
        $('icon_chevron3').className = 'fa fa-chevron-left pull-right';

    }
}






function switch_table_user() {

    $('table_here').innerHTML = table_user();
    $('tbody_user').innerHTML = data_table_user();

}

function switch_table_news() {
    $('table_here').innerHTML = table_news();
    $('tbody_news').innerHTML = data_table_news();
}

function check_valid_input() {
    for (let index = 0; index < document.forms.namedItem("addUser").elements.length; index++) {
        var x = document.forms.namedItem("addUser").elements[index].value;
        if (x == null || x == '') {
            alert("Vui long nhap du thong tin");
            return false;
        }

    }

    var check = true;
    if (User.validateUserName($('input_userName').value) == false) {
        $('input_userName').className += "alert alert-danger";
        $('input_userName').value = '';
        $('input_userName').setAttribute('placeholder', 'User Name not valid ');
        check = false;
    }

    if (User.getListUser().findIndex(value => { return value.userName == $('input_userName').value; }) != -1) {

        $('input_userName').className += "alert alert-danger";
        $('input_userName').value = '';

        $('input_userName').setAttribute('placeholder', 'User Name is already exist ');
        check = false;
    }
    if (User.validateEmail($('input_email').value) == false) {
        $('input_email').className += "alert alert-danger";
        $('input_email').value = '';
        $('input_email').setAttribute('placeholder', 'Email not valid ');
        check = false;
    }
    if (User.validateName($('input_name').value) == false) {
        $('input_name').className += "alert alert-danger";
        $('input_name').value = '';
        $('input_name').setAttribute('placeholder', ' Name not valid ');
        check = false;
    }
    if (User.validatePhone($('input_phone').value) == false) {
        $('input_phone').className += "alert alert-danger";
        $('input_phone').value = '';
        $('input_phone').setAttribute('placeholder', ' Phone not valid ');
        check = false;
    }


    if ($('input_pass').value != $('input_cpass').value) {
        alert('Mat khau xac nhan khong trung khop ');
        $('input_pass').value = '';
        $('input_cpass').value = '';

    }




    if (check == true) {
        var user = new User($('input_userName').value, $('input_pass').value, $('input_email').value, $('input_name').value, '', $('input_phone').value, '');
        User.createUser(user);
        for (let index = 0; index < document.forms.namedItem("addUser").elements.length; index++) {
            document.forms.namedItem("addUser").elements[index].value = "";


        }

    }





}