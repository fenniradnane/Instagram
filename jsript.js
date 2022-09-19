let iconeun = document.getElementById("i1");
let icondeux = document.getElementById("i2");
let count1 = document.getElementById("countun");
let count2 = document.getElementById("countdeux");
let img = document.getElementById("img");


let like = localStorage.getItem("leslike")==null?0:localStorage.getItem("leslike");
count1.textContent =like;
// si la valeur est null donc il affiche 0 , sinon il prend la valeur de like , leslike c'est la clé , qu'on appelle dans le set
let dislike = localStorage.getItem("lesdislikes")==null?0:localStorage.getItem("lesdislikes");
count2.textContent =dislike;

function likes(){
  count1.textContent = ++like;
  console.log(like);
  localStorage.setItem("leslike", like.toString());
}

function dislikes(){
  count2.textContent = ++dislike;
  console.log(dislike);
  localStorage.setItem("lesdislikes", dislike.toString());
}

iconeun.addEventListener("click",likes);
icondeux.addEventListener("click",dislikes);
img.addEventListener('dblclick',likes);
//localStorage.clear(likes); localStorage.clear(dislikes);

/*

DARK LIGHT 
<i class="fa-regular fa-sun"></i>

*/


/*function darklight() {
  let container = document.body;
  container.classList.toggle("dark-mode");
  document.getElementById("dark").style.color = "#FFFFFF";
  }*/



  btn.addEventListener("click",function(){
    let btn = document.querySelector("button");
    let body = document.querySelector("body");
    let icone = document.querySelector("i");
    body.classList.toggle("dark");
    btn.classList.toggle("light");
    if(body.classList.contains("dark") && btn.classList.contains("light")){
        icone.classList.replace("fa-moon","fa-sun");
    }else{
        icone.classList.replace("fa-sun","fa-moon");
    }
})

