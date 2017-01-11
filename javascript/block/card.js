//
// var $cardColors = document.querySelectorAll(".card-options");
//
// for (var index = 0; index < $cardColors.length; index++) {
//
//   $cardColors[index].addEventListener('click',function () {
//     console.log("ola vc clicou!");
//
// //-- - - - - - - - - - - - - - - - - - - - - - - - - - - -navegar e chegar no pai
//   var $card =this.parentNode.parentNode.parentNode;
//
//       for (var position = 0; position < $cardColors.length; position++) {
//         $cardColors[position].classList.remove('isActive');
//       }
//
//            $card.dataset.color = this.dataset.color;
//             this.classList.add('isActive');
//   });
//
// };

var $wrapCard = document.querySelector('.wrap-card');
var $cardColors = document.querySelectorAll(".card-options");


     $wrapCard.addEventListener('click', function(event) {
      var $this = event.target;

      //if ($this.classList.contains('card-options')) { //verifica  o elemento clicado
              var $card =$this.parentNode.parentNode.parentNode;
              var $cardContent =  $card.querySelector('.card-content');

            if ($this.dataset.color) {

            $card.dataset.color = $this.dataset.color;

             for (var position = 0; position < $cardColors.length; position++) {
                $cardColors[position].classList.remove('isActive');
             }
            $this.classList.add('isActive');

        }
        if ($this.classList.contains('card_delete')) {
           $card.remove();

        };
          if ($this.classList.contains('card_edit')) {
           if ($cardContent.getAttribute('contenteditable') == 'false') {
               $cardContent.setAttribute('contenteditable','true'); //alterar o valor de um atributo
               $cardContent.focus();
               $this.classList.add('isActive');
             }
             else {
               $cardContent.setAttribute('contenteditable','false');
                $cardContent.blur();
                $this.classList.remove('isActive');
             }
          };

     });
