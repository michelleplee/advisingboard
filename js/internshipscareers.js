$(function() {

  //send a message to the console window to check 
  //if this page is beting read
  console.log("ready");
  //careers  
    
  $('#li1').click(function() {
      
      
    resetColors();
    $('#li1').css('backgroundColor', '#9CAF88');
      
      resetImage();
    $('.swfObject1').css('visibility', 'visible');
      
  });

    
    
    
  $('#li2').click(function() {
      
           resetImage();
        $('.swfObject2').css('visibility', 'visible');  
      
          resetColors();
       $('#li2').css('backgroundColor', '#9CAF88');

  });
    
    

  $('#li3').click(function() {
       
           resetImage();
       $('.swfObject3').css('visibility', 'visible'); 
      
         resetColors();
      $('#li3').css('backgroundColor', '#9CAF88');

  });
    
 //internships
    
 $('#li1-2').click(function() {
     
        resetImage();
     $('.swfObject2-1').css('visibility', 'visible'); 

     
               resetColors();
     $('#li1-2').css('backgroundColor', '#9CAF88');
   
    
  });

    
      $('#li2-2').click(function() {
          
           resetImage();
           $('.swfObject2-2').css('visibility', 'visible'); 
    
          
                    resetColors();
    $('#li2-2').css('backgroundColor', '#9CAF88');
               
  });
    
    
    
      $('#li3-2').click(function() {
          
             resetImage();
     $('.swfObject2-3').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li3-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li4-2').click(function() {
          
             resetImage();
     $('.swfObject2-4').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li4-2').css('backgroundColor', '#9CAF88');
      
          
  });
 
    
         $('#li5-2').click(function() {
          
             resetImage();
     $('.swfObject2-5').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li5-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li6-2').click(function() {
          
             resetImage();
     $('.swfObject2-6').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li6-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li7-2').click(function() {
          
             resetImage();
     $('.swfObject2-7').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li7-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li8-2').click(function() {
          
             resetImage();
     $('.swfObject2-8').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li8-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li9-2').click(function() {
          
             resetImage();
     $('.swfObject2-9').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li9-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li10-2').click(function() {
          
             resetImage();
     $('.swfObject2-10').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li10-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li11-2').click(function() {
          
             resetImage();
     $('.swfObject2-11').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li11-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li12-2').click(function() {
          
             resetImage();
     $('.swfObject2-12').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li12-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li13-2').click(function() {
          
             resetImage();
     $('.swfObject2-13').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li13-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li14-2').click(function() {
          
             resetImage();
     $('.swfObject2-14').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li14-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
         $('#li15-2').click(function() {
          
             resetImage();
     $('.swfObject2-15').css('visibility', 'visible'); 
          
        
                    resetColors();
    $('#li15-2').css('backgroundColor', '#9CAF88');
      
          
  });
    
    $('#internshipsButton').click(function() {
                resetImage();
     $('#internshipsButton').css('backgroundColor', '#9CAF88'); 
          $('#careersButton').css('backgroundColor',
                               'grey');        
                    resetColors();
$('#careersUl').css('visibility','hidden');
                    $('#internshipsUl').css('visibility','visible');
         
  });
    
    $('#careersButton').click(function() {
                resetImage();
     $('#careersButton').css('backgroundColor', '#9CAF88'); 
          $('#internshipsButton').css('backgroundColor',
                               'grey');        
                    resetColors();
$('#internshipsUl').css('visibility','hidden');
                    $('#careersUl').css('visibility','visible');
         
  });

    function resetColors(){
        console.log("resetting colors");
        $('#column2 li').css('backgroundColor', 'white');
        
    }
    
    function resetImage(){
     console.log("resetting image");
        $('#column4 embed').css('visibility', 'hidden');
    }
  //close jQuery
});