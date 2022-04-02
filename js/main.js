let serviceBtns = document.querySelectorAll(".our-services__btns > button")

function ChangeActive(){
  for(let index = 0; index < serviceBtns.length; index++){
    serviceBtns[index].onclick = function(){
      let activeBtn = document.querySelector(".our-services__btns > button.active");
      activeBtn.classList.remove("active")
      serviceBtns[index].classList.add("active")
    }
  }
}
ChangeActive()


