var status=false;

sessionStorage.setItem('status',JSON.stringify(false));


function getStatus(){
  return JSON.parse( sessionStorage.getItem('status'));
}


function setStatus(){
    
    if(JSON.parse(sessionStorage.getItem('status'))){
        sessionStorage.setItem('status','false');
    }
    else{
        sessionStorage.setItem('status','true');
    }
}

function login(){
    setTimeout(()=> {console.log(User.getUserID(5) )},5000);
setStatus();  
}


login();