$('.first #removeCard').click(function(){
  toggleReveal($('.first .action'), $('.first .confirm'));
});

$('.first #cancelDelete').click(function(){
  toggleReveal($('.first .confirm'), $('.first .action'));
});

function toggleReveal($hideElement, $showElement){
  $hideElement.removeClass('reveal');
  
  setTimeout(function(){
    $hideElement.hide();
    $showElement.show().addClass('reveal');
  }, 200);
}$(document).ready(function(){
        $('button').click(function(){
          $('button').parent().addClass('active');
          setTimeout(function(){
            $('button').addClass('failed');
          }, 3400);
          setTimeout(function(){
            alert("Your payment has been confirmed and your account has been credited succesfully!");
            $('button').parent().removeClass('active');
            $('button').removeClass('failed');
          }, 4200);
        });
      });
