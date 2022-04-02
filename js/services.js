var swiper = new Swiper(".search", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let serviceBtns = document.querySelectorAll(".breadcrumbs__block > button.breadcrumbs__btn")

function ChangeActive(){
  for(let index = 0; index < serviceBtns.length; index++){
    serviceBtns[index].onclick = function(){
      console.log(serviceBtns[index])
      let activeBtn = document.querySelector(".breadcrumbs__block > .breadcrumbs__btn.active");
      activeBtn.classList.remove("active")
      serviceBtns[index].classList.add("active")
    }
  }
}

ChangeActive()