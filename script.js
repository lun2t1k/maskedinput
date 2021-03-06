$(document).ready(function() {
  $('#phone').mask('+380 (99) 9999999');
});

$(document).ready(function(){   
  $('#email').inputmask('email');
});

$(document).ready(function() {
  $('#form').submit(function(e) {

    e.preventDefault();

    var phone = $('#phone').val();
    var email = $('#email').val();
 
    $('.error').remove();
 
    if (phone.length < 1) {
      $('#phone').after('<span class="error">This field is required</span>');
      $(':input[type="submit"]').prop('disabled', true);
      $(':input[type="submit"]').addClass('disabled-btn');
      $('input[type="tel"]').keyup(function() {
        if($(this).val() != '') {
          $(':input[type="submit"]').prop('disabled', false);
          $(':input[type="submit"]').removeClass('disabled-btn');
          $('.error').remove();
        }
      });
    }

    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
      $(':input[type="submit"]').prop('disabled', true);
      $(':input[type="submit"]').addClass('disabled-btn');
      $('input[type="email"]').keyup(function() {
        if($(this).val() != '') {
          $(':input[type="submit"]').prop('disabled', false);
          $(':input[type="submit"]').removeClass('disabled-btn');
          $('.error').remove();
        }
      });
    } 
    else {
      var regEx = /[a-za-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
      var validEmail = regEx.test(email);
      
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
        $(':input[type="submit"]').prop('disabled', true);
        $('input[type="email"]').keyup(function() {
          if($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
            $(':input[type="submit"]').removeClass('disabled-btn');
            $('.error').remove();
          }
        });
      }
    }
  });
});
