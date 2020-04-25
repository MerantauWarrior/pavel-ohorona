$(document).keydown(function (event) {
  if (event.keyCode == 123) { // Prevent F12
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
    return false;
  }
});
$(document).on("contextmenu", function (e) {
  e.preventDefault();
});

$( document ).ready(function() {

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