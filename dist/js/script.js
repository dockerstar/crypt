$(document).ready(function(){
   

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            if (this.classList.contains('price_hover')){
                $('.price__btn').eq(i).fadeIn();
                $('.price__btn-active').eq(i).fadeOut();
                $('.price__item').eq(i).removeClass('price_hover');
            } else {
            $('.price__item').eq(i).toggleClass('price_hover');
            $('.price__btn').eq(i).fadeOut();
            $('.price__btn-active').eq(i).fadeIn();
            }
          });
        });
      };

      toggleSlide('.price__item');

      function chpok(id){
        elem = document.getElementById(id); 
        state = elem.style.display; 
        if (state =='') elem.style.display='none'; 
        else elem.style.display=''; 
    }

});