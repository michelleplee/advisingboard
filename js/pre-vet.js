$(function() {

  //send a message to the console window to check 
  //if this page is beting read
  console.log("ready");

<<<<<<< HEAD
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



    
=======
    
    
    
    

           $(window).load(function() {
               
               
 $("#column1Image, #column2Image, #column3Image").stop().animate({
            marginTop: '0px',
            opacity: 1,
        },
                                  1000,
                                  'linear');
      // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 
           
           });
    
    
           $(window).load(function() {
               
               
 $("#generalButton").stop().animate({
            bottom: '100px',
            opacity: 1,
        },
                                  1000,
                                  'linear');
      // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 
           
           });
    
       
    
    
           $(window).load(function() {
               
               
 $("#sectiontitle").stop().animate({
            bottom: '180px',
            opacity: 1,
        },
                                  1000,
                                  'linear');
      // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 
           
           });
    
       
    
               $(window).load(function() {
               
               
 $("#column2 #secondaryHeader").stop().animate({
            bottom: '310px',
            opacity: 1,
        },
                                  1000,
                                  'linear');
      // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 
           
           });
    
            
               $(window).load(function() {
               
               
 $("#column2 ul").stop().animate({
          
            opacity: 1,
        },
                                  3000,
                                  'linear');
      // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 
           
           });
    
        
    
    
    
    
    
  //click events
  $('#li2').click(function() {
      
      
    resetColors();
    $('#li2').css('backgroundColor', '#EDC684');
      
      resetImage();
    $('.swfObject2').css('visibility', 'visible');
      
  });

    
    
    
  $('#li3').click(function() {
      
           resetImage();
        $('.swfObject3').css('visibility', 'visible');  
      
          resetColors();
       $('#li3').css('backgroundColor', '#EDC684');

  });
    
    

  $('#li4').click(function() {
       
           resetImage();
       $('.swfObject4').css('visibility', 'visible'); 
      
         resetColors();
      $('#li4').css('backgroundColor', '#EDC684');

  });
    
    
 $('#li5').click(function() {
     
        resetImage();
     $('.swfObject5').css('visibility', 'visible'); 

     
               resetColors();
     $('#li5').css('backgroundColor', '#EDC684');
   
    
  });

    
      $('#li6').click(function() {
          
           resetImage();
           $('.swfObject6').css('visibility', 'visible'); 
    
          
                    resetColors();
    $('#li6').css('backgroundColor', '#EDC684');
               
  });
    
    
    
      $('#li7').click(function() {
          
             resetImage();
     $('.swfObject7').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li7').css('backgroundColor', '#EDC684');
      
          
  });


    function resetColors(){
        console.log("resetting colors");
        $('#column2 li').css('backgroundColor', 'white');
        
    }
    
    function resetImage(){
     console.log("resetting image");
        $('#column4 embed').css('visibility', 'hidden');
    }
>>>>>>> 8aa55da5f99328db3f83d259fcae1d7f3f8908c6
  //close jQuery
});