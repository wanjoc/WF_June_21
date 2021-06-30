var like = 3;
var likeElement = document.querySelector("#likes");
function addLikes(){
    like++;
    likeElement.innerText = like + " like(s)";
}