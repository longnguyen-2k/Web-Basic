function myPost(){
    alert('Bài viết của bạn đã được đăng');
    var a = {
        textare1:  document.getElementById("mytextare1").value,
        topic: document.getElementById("topic").value,
        textare2:document.getElementById("mytextare2").value,
        field:document.getElementById("image").value
    }
    Post.push(a);
    console.log(a);
    Save();
}
var Post = [];
function Save() {
    localStorage.setItem('listNewsPost', JSON.stringify(Post))
    }

    function load() {
        product = JSON.parse(localStorage.getItem('listNewsPost'));
    
        }
        if (localStorage.getItem("listNewsPost") != null) {
        load();
        }