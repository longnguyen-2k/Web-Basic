
 window.onload =init();
function init() {// chuan bi du lieu
    User.loadData();
    News.loadData();

}

var $ = function (id) {
    return document.getElementById(id);
}
var menu_scrolled = false;

function menu_scroll() {
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


    }
    else {
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


function switch_table_user(){
   
    $('table_here').innerHTML= table_user();
    $('tbody_user').innerHTML=data_table_user();
    width_table=$('table_here').clientWidth;


}

function switch_table_news(){
    $('table_here').innerHTML=table_news();
    $('tbody_news').innerHTML=data_table_news();
  



}