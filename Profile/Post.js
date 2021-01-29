window.onload = init();

function init() {
    User.loadData();
    News.loadData();
    console.log(User.getListUser());
    console.log(News.getListUser());
}

function myPost() {
    alert('Bài eviết của bạn đã được đăng');
    var a = {
            textare1: document.getElementById("mytextare1").value,
            userName: "",
            topic: document.getElementById("topic").value,
            textare2: document.getElementById("mytextare2").value,
            img: document.getElementById("image").value,
            like: '',
            comments: '',
            share: '',
        }
        //  console.log(a);
    News.createNew(a);
}