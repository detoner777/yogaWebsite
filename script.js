window.addEventListener("DOMContentLoaded", function() {
    'user strict';
    //3 tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
         function hideTabContent (a) {
             for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove( 'show' );
                tabContent[i].classList.add( 'hide' );
             }
         }
    
         hideTabContent (1);
    
         function showTabContent (b) {
             if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove( 'hide' );
                tabContent[b].classList.add( 'show' );
             }
         }
    
         info.addEventListener('click', function (event) {
             let target = event.target;
             if (target && target.classList.contains('info-header-tab')) {
                 for (let i = 0; i < tab.length; i++) {
                     if (target  === tab[i]) {
                         hideTabContent(0);
                         showTabContent(i);
                         break;
                     }
                 }
             }
         });
      


        //timer
        let deadline = "2019-10-13";
        function getTimeRemaining(endtime) {
                let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));

            return {
                'total' : t,   
                'hours'  : hours,
                'minutes' : minutes, 
                'seconds' : seconds
                };
        }

        function pad(n) {
            if (n < 10)
                return "0" + n;
                                
             return n;
        }
          
        function setClock (id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds');
                timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.textContent = pad(t.hours);
                minutes.textContent =pad(t.minutes);
                seconds.textContent = pad(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = "00";
                    minutes.textContent = "00";
                    seconds.textContent = "00";
                  }
             }
        }
        setClock('timer', deadline);


// Modal weandow

    let more = document.querySelector('.more'),
     overlay = document.querySelector('.overlay'),
       close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
      
    close.addEventListener ('click', function () {
        overlay.style.display = 'none';
        more.classList.add('more-splash');
        document.body.style.overflow = '';
    });

// Modal for tabs

let btn = document.querySelector(".description-btn");
   

btn.addEventListener('click', function () {
   overlay.style.display = 'block';
   this.classList.add('more-splash');
   document.body.style.overflow = 'hidden';
});
 
close.addEventListener ('click', function () {
   overlay.style.display = 'none';
   btn.classList.add('more-splash');
   document.body.style.overflow = '';
});

});




