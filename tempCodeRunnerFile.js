let btn = document.querySelectorAll('.description-btn');
   

btn.addEventListener('click', function () {
   overlay.style.display = 'block';
   this.classList.add('more-splash');
   document.body.style.overflow = 'hidden';
});