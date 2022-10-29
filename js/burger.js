
//Закрытие меню при нажатии на кнопку бургер

let button = document.querySelector('.burger__button');
let burger_status = false;
button.onclick = function open_menu_by_burger_button() {
  if (!burger_status) {
    document.body.className = "burger-open";
    burger_status = true;
  }
  else {
    document.body.classList.remove("burger-open");
    burger_status = false;
  }
}

// Закрытие меню при нажатии на пункт меню

let items = document.querySelector('.burger__items-container');

items.onclick = function close_menu_by_item() {
  document.body.classList.remove("burger-open");
  burger_status = false;
}
