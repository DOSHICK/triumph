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


function playDomPocker(){
  if(window.innerWidth < 1200){
    let header = document.querySelector(".our-services__header")
    let body = document.querySelector(".our-services__body")
    let text = document.querySelector(".our-services__text")
    let btnsBlock = document.querySelector(".our-services__btns")
    let btn =  document.querySelector(".our-services__btn")

    header.appendChild(text)
    header.appendChild(btnsBlock)

    body.appendChild(btn)
  }
}
playDomPocker()
window.addEventListener("resize", function(){
  playDomPocker()
}, true);


