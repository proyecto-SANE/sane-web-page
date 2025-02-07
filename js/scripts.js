
function showDescription(service, description) {
    const modal = document.getElementById('service-modal');
    modal.querySelector('h3').textContent = service;
    modal.querySelector('p').textContent = description;
    modal.style.display = 'flex';
}



function closeModal() {
    document.getElementById('service-modal').style.display = 'none';
}
window.addEventListener('scroll', function() {
  const topBar = document.querySelector('.top-bar');
  // Si la página se ha desplazado (scrollY > 0), agrega la clase 'scrolled'
  if (window.scrollY > 0) {
    topBar.classList.add('scrolled');
  } else {
    topBar.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");
  });
});