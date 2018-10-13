



//User Logic
$(document).ready(function() {
  $('.poster').click(function() {
    let mainDiv = $(this).parent();
    mainDiv.find('.info').toggle();
  });
});
