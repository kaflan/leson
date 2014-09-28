$(document).ready(function () {

  var defaultText = $('#toggleSecret').text();

  $('#toggleSecret').click(function () {

    $('.secret').slideToggle('slow');
      if ($(this).text() == defaultText) {
        $(this).text('hide');
      } else { 
        $(this).text(defaultText);
      }
        //$(this).text= ('Learn more') ;
       //$(this).text($(this).text() == 'Learn more ' ? 'Hide' : "Learn more");  
  });
  
 });