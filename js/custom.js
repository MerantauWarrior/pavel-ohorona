// $(document).keydown(function (event) {
//   if (event.keyCode == 123) {
//     return false;
//   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//     return false;
//   }
// });
// $(document).on("contextmenu", function (e) {
//   e.preventDefault();
// });

$( document ).ready(function() {

  $('.js-modal').click(function (e) {
    e.preventDefault();
    var modal = $(this).attr('href');
    $('body').toggleClass('ovh');
    $('.modal').show();
    $('.modal-window'+modal).show();
  });
  $('.js-modal-close').click(function () {
    $('body').removeClass('ovh');
    $('.modal-window').hide();
    $('.modal').hide();
  });
  //Close modal
  function closeModal(event) {
    if (event.target === document.querySelectorAll('.modal')[0] || event.which === 27 || event.keyCode === 27) {
      document.querySelectorAll('.modal')[0].style.display = 'none';
      document.getElementsByTagName('body')[0].classList.remove('ovh');
    }
  }
  document.addEventListener('click', function (event) {
    closeModal(event);
  });
  document.addEventListener('touchstart', function (event) {
    closeModal(event);
  });
  document.addEventListener("keydown", function (event) {
    closeModal(event);
  });

  $('.js-course-request').click(function (e) {
    e.preventDefault();
    $(this).hide();
    $('.course-detail-page-request').show();
  });

  $('.test-item__radio').click(function () {
    $(this).closest('.test-item').find('label.test-item__radio').removeClass('test-item__radio_checked');
    $(this).addClass('test-item__radio_checked');
  });

  /*modal form submit
  $("form").submit(function (event) {
    event.preventDefault();
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var submit = $form.find("button");
    var serializedData = $form.serialize();
    console.log(serializedData);
    console.log($inputs);
    $inputs.prop("disabled", true);
    request = $.ajax({
      url: "send.php",
      type: "post",
      data: serializedData
    });
    request.done(function (response, textStatus, jqXHR) {
      $inputs.prop("disabled", false);
      $form.find("input, textarea").val('');
      $('body').addClass('body-ovh');
      $('.modal').show();
      $('.modal-window*').hide();
      $('.modal-window#mThanks').show();
    });
    request.fail(function (jqXHR, textStatus, errorThrown) {
      $inputs.prop("disabled", false);
      alert('Ошибка отправки! Попробуйте отправить запрос еще раз!');
    });
  });*/

});