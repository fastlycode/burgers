document.getElementsByClassName("main-title")[0].style.color = "red";
document.getElementById("main-action-button").onclick = function()  {
document.getElementById("products").scrollIntoView( {behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i= 0; i < links.length; i++){
    links[i].onclick=function() {// не понимаю в чем тут ошибка
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
}
let buttons = document.querySelectorAll(".products-button");
for (let i= 0; i < buttons.length; i++){
    buttons[i].onclick=function() {// не понимаю в чем тут ошибка
        document.getElementById("order").scrollIntoView( {behavior: "smooth"});
    }
}

// let burger = document.getElementById("burger");
// let name = document.getElementById("name_1");
// let phone = document.getElementById("phone");

// document.getElementById("order-action").onclick = function() {

//     let hasError = false;
//     let MyItems =[burger, name_1, phone];
//     MyItems.forEach(item => {
// if (item.value===""){
    
//     item.parentElement.style.background = "red";
//     document.getElementById("order-action").style.background = "gray";
//     console.log("Не все поля заполены");
//     hasError=true;

// }else if (!hasError) {
    
//  console.log("Форма прошла валидацию");
//     document.getElementById("order-action").style.background = "";
//     item.parentElement.style.background = "";

   

// }

//     });


//     }
const form = document.querySelector('.order-form-inputs');
const fields = form.querySelectorAll('.field');

fields.forEach((element) => {
  element.addEventListener('input', () => {
    if (element.parentElement.classList.contains('error')) {
      element.parentElement.classList.remove('error');
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let hasError = false;

  fields.forEach((element) => {
    if (!element.value) {
      element.parentElement.classList.add('error');
      hasError = true;
    } else {
      element.parentElement.classList.remove('error');
    }
  });

  if (!hasError) {
    fields.forEach((element) => {
      element.value = '';
    });
    alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
  }
});
const mobileMenuBtn = document.getElementById("header-burger");
const mobileMenu = document.querySelector('.mobile-menu');
console.log(mobileMenu);
mobileMenuBtn.addEventListener('click', ()=>{
    mobileMenuBtn.classList.toggle('open-menu');
    mobileMenu.classList.toggle('active');
});
const toggler = document.querySelector('.header-burger')
const menuMob = document.querySelector('.mobile-menu')
menuMob.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggler.classList.remove('open-menu');
        menuMob.classList.remove('active');
    }
});

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function(e){
    let currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$"){
        newCurrency = "₽";
        coefficient = 80;
    }
   else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;

    for (let i=0; i<prices.length; i++){
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1)+ ""+ newCurrency;
    }
}
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


