$(function() {

  //send a message to the console window to check 
  //if this page is beting read
  console.log("ready");

  //click events
  $('#li2').click(function() {
    
    $('#li2').css('backgroundColor', '#EDC684');


        
        
      $('#li3').css('backgroundColor', 'white');
      $('#li4').css('backgroundColor', 'white');
      $('#li5').css('backgroundColor', 'white');
    
       
      
          
  });

  $('#li3').click(function() {
   
       $('#li3').css('backgroundColor', '#EDC684');
      
       $('#li2').css('backgroundColor', 'white');
      $('#li4').css('backgroundColor', 'white');
      $('#li5').css('backgroundColor', 'white');
  });

  $('#li4').click(function() {
      
      $('#li4').css('backgroundColor', '#EDC684');
      
       $('#li3').css('backgroundColor', 'white');
      $('#li2').css('backgroundColor', 'white');
      $('#li5').css('backgroundColor', 'white');
  });
    
 $('#li5').click(function() {
    
     $('#li5').css('backgroundColor', '#EDC684');
     
      $('#li3').css('backgroundColor', 'white');
      $('#li4').css('backgroundColor', 'white');
      $('#li2').css('backgroundColor', 'white');
  });



    
  //close jQuery
});