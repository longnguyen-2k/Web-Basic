var menu_scrolled =false;

function menu_scroll(){
    if(menu_scrolled==true){
        menu_scrolled=false;
        document.getElementById('aside_bar').className="sidebar border-left shadow col-1 ";

        document.getElementById('admin_text').innerHTML='';
        document.getElementById('dashboard_text').innerHTML='';
        document.getElementById('tables_text').innerHTML='';
        document.getElementById('graphs_text').innerHTML='';
        document.getElementById('icon_chevron').className='';
        document.getElementById('icon_chevron2').className='';

        document.getElementById('icon_chevron3').className='';


    }
    else{
        document.getElementById('aside_bar').className="sidebar border-left shadow col-3";
        document.getElementById('admin_text').innerHTML='Admin';
        menu_scrolled=true;
        document.getElementById('dashboard_text').innerHTML='Dashboards';
        document.getElementById('tables_text').innerHTML='Tables';
        document.getElementById('graphs_text').innerHTML='Graphs';
        document.getElementById('icon_chevron').className='fa fa-chevron-left pull-right';
        document.getElementById('icon_chevron2').className='fa fa-chevron-left pull-right';

        document.getElementById('icon_chevron3').className='fa fa-chevron-left pull-right';

    }   


   

  


}