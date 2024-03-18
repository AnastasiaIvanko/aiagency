


document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('gallery'), {
        plugins: [lgThumbnail, lgFullscreen],
        speed: 500
    });
});



document.addEventListener('DOMContentLoaded', function () {
    lightGallery(document.getElementById('horizontal-images'), {
        selector: 'a',
        mode: 'lg-fade',
        download: false,
        counter: false,
        mousewheel: false,
        swipeThreshold: 50
    });
});


const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active'); // Добавляем/удаляем класс "active"
});


document.querySelectorAll('.service h3').forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});








 
  

  window.onscroll = function() {
    var modal = document.getElementById('yourModalId'); // Замените 'yourModalId' на ID вашего модального окна
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    modal.style.top = scrollY + 50 + 'px'; // 50px - начальное смещение от верха, можно изменить по вашему усмотрению
  };
  

  // Функция для открытия модального окна
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    modal.style.display = "block";
    modal.style.top = scrollY + "px"; // Устанавливаем top в текущее положение прокрутки
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
