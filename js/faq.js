
let faqItem = document.querySelectorAll(".faq__item");

function addOnClick() {
  for (let index = 0; index < faqItem.length; index++) {
    let currentItem = faqItem[index]
    currentItem.onclick = function () {
      switch (currentItem) {
        default:
          currentItem.classList.toggle("active");
      }
    }
  }
}

addOnClick()