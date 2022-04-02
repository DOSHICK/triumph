let burgerBtn = document.getElementById("burger-btn");
burgerBtn.onclick = function(){
  changeBurgerImg();
  changeBurgerVisibility();
  changeBodyScrolling();
}

function changeBurgerImg(){
    burgerBtn.classList.toggle("header__burger_active");
}

function changeBurgerVisibility(){
  // Добавление класса кнопке бургера
  let burger = document.getElementById("header-burger");
  burger.classList.toggle("active");
  // Добавление класса header'у (для залития фоном)
  let header = document.querySelector("header.header");
  header.classList.toggle("burger-visible");
}

function changeBodyScrolling(){
  let body = document.querySelector("body")
  body.classList.toggle("none-scroll")
}



let langBlockActive = document.querySelector(".header__lang-select__block.active");
langBlockActive.onclick =function(){
  openLangList();
  langChange();
}
function openLangList(){
  let langBlock = document.querySelector(".header__lang-select");
  langBlock.classList.toggle('list-active');
}
function langChange(){
  let langBloks = document.querySelectorAll(".header__lang-select__block");
  for(let index = 0; index < langBloks.length; index++){
    langBloks[index].onclick = function(){
      langBlockActive.classList.remove("active");
      langBlockActive = langBloks[index];
      langBloks[index].classList.add("active");
      openLangList()
    }
  }
}
