var i = 1;
   $("textarea").keyup(function(e) {
    if (e.keyCode == 13) {
     var html = $(this).val();
     var newHTML = "<div style='display: flex; margin-top:30px;'><div><i class='fas fa-user-circle' style='font-size:30px;color:black'></i></div><div style=' margin-left: 10px; border: 1px solid #f2f2f2; width: auto '>"+html+"</div></div>";
     $("#list").append(newHTML);
     $(this).val("");
    
        News.addComment(html,'1')
        console.log(News.getListComment());
     i++;
    }
   
})

// Like 
var clicks = 0;
document.getElementById("clickss").innerHTML = clicks;
$('.likeCount').click(function() {
   clicks += 1;
  document.getElementById("clickss").innerHTML = clicks;
  $('.likeCount').addClass("liked",);

});





