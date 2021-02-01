window.onload = init();

function init() {
    User.loadData();
    News.loadData();
    console.log(User.getListUser());
    console.log(News.getListNews());
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

function show() {
    var newsPost = News.getListNews();
    let listnewsPost = "";
    for (i in newsPost) {
        listnewsPost += "<div>";
        listnewsPost += "<div>" + newsPost[i].mytextare1 + "</div>";
        listnewsPost += "<div>" + newsPost[i].topic + "</div>";
        listNewsPost += '<div>' + newsPost[i].mytextare2 + '</div>';
        listnewsPost += "<div>" + 'img src="' + newsPost[i].img + '" alt="" style="width: 50px;"></td>';
        listnewsPost += "<div>" + `<button type="button" onclick="editPost (${ listnewsPost.id})" class="btn btn-danger">Sửa bài viết</button>` + '</div>'
        listnewsPost += "<div>" + `<button type="button" onclick="deletePost(${ listnewsPost.id})" class="btn btn-danger">Xóa bài viết</button>` + '</div>'
        listnewsPost += "</div>";
    }
    document.getElementById("print_newsPost").innerHTML = listnewsPost;
}

function editPost(id) {
    var object = News.getNewByID(id);

    document.getElementById("mytextare1").value = object.title;
    document.getElementById("topic").value = object.userName;
    document.getElementById("mytextare2").value = object.subject;
    document.getElementById("image").value = object.content;
}

function submitEdit(id) {
    var object = News.getNewByID(id);
    object.title = document.getElementById("image").value;
    object.userName = document.getElementById("topic").value;
    object.subject = document.getElementById("mytextare2");
    object.content = document.getElementById("image").value;

    News.editNewByID(id, a);
}

function deletePost(id) {
    News.DeleteNewById(id)
}