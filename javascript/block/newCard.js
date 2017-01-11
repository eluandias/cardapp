              var $newCard = document.querySelector('.newCard');
              var $newCardContent = document.querySelector('.newCard-content');
              var $newCardAction=document.querySelector('newCard-action');


              $newCardContent.addEventListener('input',function functionName() {
              var $error =document.querySelector('.error');
              if ( $error !== null ) {
               $error.remove();
             }


              });

              $newCard.addEventListener('submit', function(event){
                     event.preventDefault();

              if ($newCardContent.value === '') {
                if (document.querySelector('.error') === null) {  //verificd se clss ja exist
                var $error = document.createElement('span');
               $error.classList.add('error'); // criando class
                       $error.textContent =' Preencha o campo';
                       $newCard.insertBefore($error, $newCardAction);
                     }
                   } else {
                     $wrapCard =document.querySelector('.wrap-card');
                     $card = document.querySelector('.card')
                    $copyCard=  $card.cloneNode(true); // clono o card
                      $copyCard.querySelector('.card-content').textContent = $newCardContent.value; //mudar somente o conteudo do card (card-content) e nao todo card //formularios usa value

                      $wrapCard.insertBefore($copyCard, $card); // mostra na tela
                   }
              });
