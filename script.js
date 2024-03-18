


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
 
  




document.addEventListener('click', function(event) {
  // Check if the clicked element is supposed to trigger a modal
  if (event.target.matches('[data-modal-trigger]')) {
    const modalId = event.target.getAttribute('data-modal-trigger');
    const modal = document.getElementById(modalId);

    if (modal) {
      const modalRect = modal.getBoundingClientRect();
      const top = event.clientY;
      const left = event.clientX;
      
      // Adjust the modal's position to ensure it stays within the viewport
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
      // Set the modal's position dynamically
      modal.style.position = 'absolute';
      modal.style.top = `${top + scrollTop - modalRect.height / 2}px`; // Adjust as needed
      modal.style.left = `${left + scrollLeft - modalRect.width / 2}px`; // Adjust as needed
      
      // Finally, show the modal
      modal.style.display = 'block';
    }
  }
});
