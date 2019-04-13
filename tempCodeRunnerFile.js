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
                 } );
          