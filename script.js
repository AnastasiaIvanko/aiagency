


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







// Функция для открытия модального окна
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  // Функция для закрытия модального окна
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
 
  

 

  

