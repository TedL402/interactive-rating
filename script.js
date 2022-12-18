var subBtn = document.getElementById("submit"),
    sec = document.querySelectorAll('section');
var act = document.getElementsByClassName("active");
var resp = document.getElementById("resp");

subBtn.addEventListener('click',() =>{
    sec[0].classList.add('hidden');
    sec[1].classList.remove('hidden');
})


var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    for(let i = 0 ; i < btns.length; i++){
        btns[i].classList.remove("active")
    }

  this.className += " active";
  resp.innerHTML = " "+ this.innerHTML + " ";
  });
}

