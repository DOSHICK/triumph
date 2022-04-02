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