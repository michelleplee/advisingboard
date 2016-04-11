$(function () {

    //send a message to the console window to check 
    //if this page is beting read
    console.log("ready");






    $(window).load(function () {


        $("#column1Image, #column2Image").stop().animate({
                marginTop: '0px'
                , opacity: 1
            , }
            , 1000
            , 'linear');
        // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 

    });

    $(window).load(function () {


        $("#sectiontitle").animate({
                opacity: 1
            , }
            , 1000
            , 'linear');
        // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 

    });


    $('#li2').click(function () {
        resetColors();
        resetImage();

        $('#li2').css('backgroundColor', '#002855');
        $('#li2').css('color', 'white');

        $('.swfObject1').css('visibility', 'visible');


    });



    $('#li3').click(function () {
        resetColors();
        resetImage();

        $('#li3').css('backgroundColor', '#002855');
        $('#li3').css('color', 'white');

        $('.swfObject2').css('visibility', 'visible');


    });


    $('#li4').click(function () {
        resetColors();
        resetImage();

        $('#li4').css('backgroundColor', '#002855');
        $('#li4').css('color', 'white');

        $('.swfObject3').css('visibility', 'visible');


    });


    $('#li5').click(function () {
        resetColors();
        resetImage();

        $('#li5').css('backgroundColor', '#002855');
        $('#li5').css('color', 'white');

        $('.swfObject4').css('visibility', 'visible');


    });


    $('#li6').click(function () {
        resetColors();
        resetImage();

        $('#li6').css('backgroundColor', '#002855');
        $('#li6').css('color', 'white');

        $('.swfObject5').css('visibility', 'visible');


    });

    $('#li8').click(function () {
        resetColors();
        resetImage();

        $('#li8').css('backgroundColor', '#002855');
        $('#li8').css('color', 'white');

        $('.swfObject6').css('visibility', 'visible');


    });


    $('#li10').click(function () {
        resetColors();
        resetImage();

        $('#li2').css('backgroundColor', '#002855');
        $('#li2').css('color', 'white');

        $('#swfObject7').css('visibility', 'visible');


    });



    $('#li11').click(function () {
        resetColors();
        resetImage();

        $('#li11').css('backgroundColor', '#002855');
        $('#li11').css('color', 'white');

        $('.swfObject8').css('visibility', 'visible');


    });


    $('#li13').click(function () {
        resetColors();
        resetImage();

        $('#li13').css('backgroundColor', '#002855');
        $('#li13').css('color', 'white');

        $('.swfObject9').css('visibility', 'visible');


    });


    $('#generalButton').click(function () {

        $('#facilities').css('visibility', 'hidden');


        $('#mapHeader').css('visibility', 'hidden');
        $('#facilityMap').css('visibility', 'hidden');
        $('#buildingImage').css('visibility', 'hidden');
        $('.mapMarkersGold').css('visibility', 'hidden');
        $('.mapMarkersBlue').css('visibility', 'hidden');
        $('#markerBlue1').css('visibility', 'hidden');
        $('#markerGold1').css('visibility', 'hidden');
        $('#buildingDescription').css('visibility', 'hidden');
        $('#buildingHeader').css('visibility', 'hidden');
        $('#column2 #facultyB').css('visibility', 'hidden');
        $('#column2 #facultyA').css('visibility', 'hidden');

        resetImage();
        $('#generalButton').css('backgroundColor', '#002855');

        $('#advisingButton').css('backgroundColor', 'grey');
        $('#facultyButton').css('backgroundColor', 'grey');
        $('#facilitiesButton').css('backgroundColor', 'grey');

        $('#secondaryHeader').css('visibility', 'hidden');
        $('#advising').css('visibility', 'hidden');
        $('#faculty1').css('visibility', 'hidden');
        $('#faculty2').css('visibility', 'hidden');
        $('#facilities').css('visibility', 'hidden');
    });



    $('#advisingButton').click(function () {
        $('#facilities').css('visibility', 'hidden');


        $('#mapHeader').css('visibility', 'hidden');
        $('#facilityMap').css('visibility', 'hidden');
        $('#buildingImage').css('visibility', 'hidden');
        $('.mapMarkersGold').css('visibility', 'hidden');
        $('.mapMarkersBlue').css('visibility', 'hidden');
        $('#markerBlue1').css('visibility', 'hidden');
        $('#markerGold1').css('visibility', 'hidden');
        $('#buildingDescription').css('visibility', 'hidden');
        $('#buildingHeader').css('visibility', 'hidden');


        resetImage();
        $('#column2 #facultyB').css('visibility', 'hidden');
        $('#column2 #facultyA').css('visibility', 'hidden');

        $('#column2Image').css('height', '560px');

        $('#generalButton').css('backgroundColor', 'grey');

        $('#advisingButton').css('backgroundColor', '#002855');
        $('#facultyButton').css('backgroundColor', 'grey');
        $('#facilitiesButton').css('backgroundColor', 'grey');

        $('#faculty1').css('visibility', 'hidden');
        $('#faculty2').css('visibility', 'hidden');
        $('#facilities').css('visibility', 'hidden');

        $('#secondaryHeader').css('visibility', 'visible');
        $('#advising').css('visibility', 'visible')

        $('#secondaryHeader h3').html('ADVISING');
    });



    $('#facultyButton').click(function () {


        $('#facilities').css('visibility', 'hidden');


        $('#mapHeader').css('visibility', 'hidden');
        $('#facilityMap').css('visibility', 'hidden');
        $('#buildingImage').css('visibility', 'hidden');
        $('.mapMarkersGold').css('visibility', 'hidden');
        $('.mapMarkersBlue').css('visibility', 'hidden');
        $('#markerBlue1').css('visibility', 'hidden');
        $('#markerGold1').css('visibility', 'hidden');
        $('#buildingDescription').css('visibility', 'hidden');
        $('#buildingHeader').css('visibility', 'hidden');



        resetImage();
        $('#column2 #facultyB').css('visibility', 'hidden');
        $('#column2 #facultyA').css('visibility', 'visible');
        $('#column2Image').css('height', '110px');

        $('#generalButton').css('backgroundColor', 'grey');

        $('#advisingButton').css('backgroundColor', 'grey');
        $('#facultyButton').css('backgroundColor', '#002855');
        $('#facilitiesButton').css('backgroundColor', 'grey');


        $('#faculty1').css('visibility', 'visible');
        $('#faculty2').css('visibility', 'hidden');
        $('#advising').css('visibility', 'hidden');
        $('#facilities').css('visibility', 'hidden');

        $('#secondaryHeader').css('visibility', 'visible');
        $('#secondaryHeader h3').text('FACULTY');
    });


    $('#column2 #facultyA').click(function () {

        console.log("message here");
        $('#column2 #facultyB').css('visibility', 'visible');
        $('#column2 #facultyA').css('visibility', 'hidden');
        $('#faculty1').css('visibility', 'hidden');
        $('#faculty2').css('visibility', 'visible');
    });




    $('#column2 #facultyB').click(function () {

        console.log("message here");
        $('#column2 #facultyA').css('visibility', 'visible');
        $('#column2 #facultyB').css('visibility', 'hidden');
        $('#faculty1').css('visibility', 'visible');
        $('#faculty2').css('visibility', 'hidden');
    });



    $('#facilitiesButton').click(function () {
        resetImage();


        $('#facilities').css('visibility', 'visible');


        $('#mapHeader').css('visibility', 'visible');
        $('#facilityMap').css('visibility', 'visible');
        $('#buildingImage').css('visibility', 'visible');
        $('.mapMarkersGold').css('visibility', 'hidden');
        $('.mapMarkersBlue').css('visibility', 'visible');
        $('#markerBlue1').css('visibility', 'hidden');
        $('#markerGold1').css('visibility', 'visible');
        $('#buildingDescription').css('visibility', 'visible');
        $('#buildingHeader').css('visibility', 'visible');

        $('#column2 #facultyB').css('visibility', 'hidden');
        $('#column2 #facultyA').css('visibility', 'hidden');


        $('#column2Image').css('height', '450px');
        $('#facilitiesButton').css('backgroundColor', '#002855');

        $('#advisingButton').css('backgroundColor', 'grey');
        $('#facultyButton').css('backgroundColor', 'grey');
        $('#generalButton').css('backgroundColor', 'grey');

        $('#facilities').css('visibility', 'visible');

        $('#faculty2').css('visibility', 'hidden');
        $('#faculty1').css('visibility', 'hidden');
        $('#advising').css('visibility', 'hidden');

        $('#secondaryHeader h3').html('FACILITIES');
        $('#secondaryHeader').css('visibility', 'visible');

    });




    $('#li2-4').click(function () {

        resetColors();
        resetGoldMarker();
        $('#markerGold1').css('visibility', 'visible');
        $('#markerBlue1').css('visibility', 'hidden');
        $('#li2-4').css('backgroundColor', '#002855');
        $('#li2-4').css('color', 'white');


        $('#buildingHeader').html('Aquatic (CABA) Facility');
        $('#buildingDescription').html('Aquatic Description');


        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');



    });

    $('#li3-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold2').css('visibility', 'visible');
        $('#markerBlue2').css('visibility', 'hidden');
        $('#li3-4').css('backgroundColor', '#002855');
        $('#li3-4').css('color', 'white');


        $('#buildingHeader').html('Avian Hopkins Facility');
        $('#buildingDescription').html('Avian Hopkins Facility');
        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/avian.fw.png)');

    });

    $('#li4-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold3').css('visibility', 'visible');
        $('#markerBlue3').css('visibility', 'hidden');
        $('#li4-4').css('backgroundColor', '#002855');
        $('#li4-4').css('color', 'white');


        $('#buildingHeader').html('Beef Barn');
        $('#buildingDescription').html('Beef Barn');
        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/beefbarn.fw.png)');
    });

    $('#li5-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold4').css('visibility', 'visible');
        $('#markerBlue4').css('visibility', 'hidden');
        $('#li5-4').css('backgroundColor', '#002855');
        $('#li5-4').css('color', 'white');


        $('#buildingHeader').html('Dairy Facility');
        $('#buildingDescription').html('Dairy Facility');
        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });


    $('#li6-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold5').css('visibility', 'visible');
        $('#markerBlue5').css('visibility', 'hidden');
        $('#li6-4').css('backgroundColor', '#002855');
        $('#li6-4').css('color', 'white');


        $('#buildingHeader').html('Goat Barn');
        $('#buildingDescription').html('Goat Barn');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/goatbarn.png)');
    });


    $('#li7-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold6').css('visibility', 'visible');
        $('#markerBlue46').css('visibility', 'hidden');
        $('#li7-4').css('backgroundColor', '#002855');
        $('#li7-4').css('color', 'white');


        $('#buildingHeader').html('Horse Barn');
        $('#buildingDescription').html('Horse Barn');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/horsebarn.png)');
    });



    $('#li8-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li8-4').css('backgroundColor', '#002855');
        $('#li8-4').css('color', 'white');


        $('#buildingHeader').html('Meat Lab');
        $('#buildingDescription').html('Meat Lab');


        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });


    $('#li9-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li9-4').css('backgroundColor', '#002855');
        $('#li9-4').css('color', 'white');


        $('#buildingHeader').html('Sheep Barn');
        $('#buildingDescription').html('Sheep Barn');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/sheepbarn.png)');
    });



    $('#li10-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li10-4').css('backgroundColor', '#002855');
        $('#li10-4').css('color', 'white');


        $('#buildingHeader').html('Small Animal Facility');
        $('#buildingDescription').html('Small Animal Facility');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li11-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li11-4').css('backgroundColor', '#002855');
        $('#li11-4').css('color', 'white');


        $('#buildingHeader').html('Swine Facility');
        $('#buildingDescription').html('Swine Facility');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li13-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li13-4').css('backgroundColor', '#002855');
        $('#li13-4').css('color', 'white');


        $('#buildingHeader').html('Sierra Field Station');
        $('#buildingDescription').html('Sierra Field Station');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li14-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li14-4').css('backgroundColor', '#002855');
        $('#li14-4').css('color', 'white');


        $('#buildingHeader').html('Desert Research Station');
        $('#buildingDescription').html('Desert Research Station');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li15-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li15-4').css('backgroundColor', '#002855');
        $('#li15-4').css('color', 'white');


        $('#buildingHeader').html('ANS Teaching Facility');
        $('#buildingDescription').html('ANS Teaching Facility');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li16-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li16-4').css('backgroundColor', '#002855');
        $('#li16-4').css('color', 'white');


        $('#buildingHeader').html('Putah Creek Lodge');
        $('#buildingDescription').html('Putah Creek Lodge');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });









    /* fACULTY SECTION */
    $('#li2-2').click(function () {

        resetColors();
        $('#li2-2').css('backgroundColor', '#002855');
        $('#li2-2').css('color', 'white');


        $('#facultyName').html('Trish Berger');
        $('#facultyEmail').html('tberger@ucdavis.edu');
        $('#facultyOfficeNumber').html('2147 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });


    $('#li3-2').click(function () {

        resetColors();
        $('#li3-2').css('backgroundColor', '#002855');
        $('#li3-2').css('color', 'white');


        $('#facultyName').html('Richard Blatchford');
        $('#facultyEmail').html('rablatchford@ucdavis.edu');
        $('#facultyOfficeNumber').html('2129 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });



    $('#li4-2').click(function () {

        resetColors();
        $('#li4-2').css('backgroundColor', '#002855');
        $('#li4-2').css('color', 'white');


        $('#facultyName').html('David Bunn');
        $('#facultyEmail').html('dabunn@ucdavis.edu');
        $('#facultyOfficeNumber').html('Veterinary Medicine Teaching Hospital');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });

    
 $('#li5-2').click(function () {

        resetColors();
        $('#li5-2').css('backgroundColor', '#002855');
        $('#li5-2').css('color', 'white');


        $('#facultyName').html('Christopher Calvert');
        $('#facultyEmail').html('cccalvert@ucdavis.edu');
        $('#facultyOfficeNumber').html('1255 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });


 $('#li6-2').click(function () {

        resetColors();
        $('#li6-2').css('backgroundColor', '#002855');
        $('#li6-2').css('color', 'white');


        $('#facultyName').html('Fred Conte');
        $('#facultyEmail').html('fsconte@ucdavis.edu');
        $('#facultyOfficeNumber').html('2117 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });



 $('#li7-2').click(function () {

        resetColors();
        $('#li7-2').css('backgroundColor', '#002855');
        $('#li7-2').css('color', 'white');


        $('#facultyName').html('Mary Delany');
        $('#facultyEmail').html('medelany@ucdavis.edu');
        $('#facultyOfficeNumber').html('2131D Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });

    
 $('#li8-2').click(function () {

        resetColors();
        $('#li8-2').css('backgroundColor', '#002855');
        $('#li8-2').css('color', 'white');


        $('#facultyName').html('Edward DePeters');
        $('#facultyEmail').html('ejdepeters@ucdavis.edu');
        $('#facultyOfficeNumber').html('2149 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
     $('#li9-2').click(function () {

        resetColors();
        $('#li9-2').css('backgroundColor', '#002855');
        $('#li9-2').css('color', 'white');


        $('#facultyName').html('John Eadie');
        $('#facultyEmail').html('jmeadie@ucdavis.edu');
        $('#facultyOfficeNumber').html('Academic Surge');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
      $('#li10-2').click(function () {

        resetColors();
        $('#li10-2').css('backgroundColor', '#002855');
        $('#li10-2').css('color', 'white');


        $('#facultyName').html('James Fadel');
        $('#facultyEmail').html('jgfadel@ucdavis.edu');
        $('#facultyOfficeNumber').html('2115 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
       
      $('#li11-2').click(function () {

        resetColors();
        $('#li11-2').css('backgroundColor', '#002855');
        $('#li11-2').css('color', 'white');


        $('#facultyName').html('Thomas Famula');
        $('#facultyEmail').html('trfamula@ucdavis.edu');
        $('#facultyOfficeNumber').html('2143 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
       
    
    
       
      $('#li12-2').click(function () {

        resetColors();
        $('#li12-2').css('backgroundColor', '#002855');
        $('#li12-2').css('color', 'white');


        $('#facultyName').html('Matthis Hess');
        $('#facultyEmail').html('mhess@ucdavis.edu');
        $('#facultyOfficeNumber').html('2123 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
       
    
    
        
       
      $('#li13-2').click(function () {

        resetColors();
        $('#li13-2').css('backgroundColor', '#002855');
        $('#li13-2').css('color', 'white');


        $('#facultyName').html('Russ Hovey');
        $('#facultyEmail').html('rchovey@ucdavis.edu');
        $('#facultyOfficeNumber').html('2145 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
       
    
    
        
      $('#li14-2').click(function () {

        resetColors();
        $('#li14-2').css('backgroundColor', '#002855');
        $('#li14-2').css('color', 'white');


        $('#facultyName').html('Joshua Hull');
        $('#facultyEmail').html('jmhull@ucdavis.edu');
        $('#facultyOfficeNumber').html('2131A Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
          
      $('#li15-2').click(function () {

        resetColors();
        $('#li15-2').css('backgroundColor', '#002855');
        $('#li15-2').css('color', 'white');


        $('#facultyName').html('Silas Hung');
        $('#facultyEmail').html('sshung@ucdavis.edu');
        $('#facultyOfficeNumber').html('2139 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
              
      $('#li16-2').click(function () {

        resetColors();
        $('#li16-2').css('backgroundColor', '#002855');
        $('#li16-2').css('color', 'white');


        $('#facultyName').html('Ermias Kebreab');
        $('#facultyEmail').html('ekebreab@ucdavis.edu');
        $('#facultyOfficeNumber').html('2111 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
              
      $('#li17-2').click(function () {

        resetColors();
        $('#li17-2').css('backgroundColor', '#002855');
        $('#li17-2').css('color', 'white');


        $('#facultyName').html('Annie King');
        $('#facultyEmail').html('ajking@ucdavis.edu');
        $('#facultyOfficeNumber').html('1217 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
          $('#li18-2').click(function () {

        resetColors();
        $('#li18-2').css('backgroundColor', '#002855');
        $('#li18-2').css('color', 'white');


        $('#facultyName').html('Kirk Klasing');
        $('#facultyEmail').html('kcklasing@ucdavis.edu');
        $('#facultyOfficeNumber').html('2131B Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    

          $('#li19-2').click(function () {

        resetColors();
        $('#li19-2').css('backgroundColor', '#002855');
        $('#li19-2').css('color', 'white');


        $('#facultyName').html('Dietmar Kueltz');
        $('#facultyEmail').html('dkueltz@ucdavis.edu');
        $('#facultyOfficeNumber').html('2207 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
        $('#li20-2').click(function () {

        resetColors();
        $('#li20-2').css('backgroundColor', '#002855');
        $('#li20-2').css('color', 'white');


        $('#facultyName').html('Yeunshin Lee');
        $('#facultyEmail').html('dizee@ucdavis.edu');
        $('#facultyOfficeNumber').html('1111 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
     
    
        $('#li21-2').click(function () {

        resetColors();
        $('#li21-2').css('backgroundColor', '#002855');
        $('#li21-2').css('color', 'white');


        $('#facultyName').html('Elizabeth Maga');
        $('#facultyEmail').html('eamaga@ucdavis.edu');
        $('#facultyOfficeNumber').html('2125 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
        $('#li22-2').click(function () {

        resetColors();
        $('#li22-2').css('backgroundColor', '#002855');
        $('#li22-2').css('color', 'white');


        $('#facultyName').html('Maja Makagon');
        $('#facultyEmail').html('mmmakagon@ucdavis.edu');
        $('#facultyOfficeNumber').html('1255 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    

    
      $('#li23-2').click(function () {

        resetColors();
        $('#li23-2').css('backgroundColor', '#002855');
        $('#li23-2').css('color', 'white');


        $('#facultyName').html('Lynn Martindale');
        $('#facultyEmail').html('lmartindale@ucdavis.edu');
        $('#facultyOfficeNumber').html('153 SOEB(School of Education Building)');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
    
    
    /* ------------- L - Z FACULTY ----------- */
    
    
    
        
 $('#li5-3').click(function () {

        resetColors();
        $('#li5-3').css('backgroundColor', '#002855');
        $('#li5-3').css('color', 'white');


        $('#facultyName').html('Bernie May');
        $('#facultyEmail').html('bpmay@ucdavis.edu');
        $('#facultyOfficeNumber').html('2237 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });


 $('#li6-3').click(function () {

        resetColors();
        $('#li6-3').css('backgroundColor', '#002855');
        $('#li6-3').css('color', 'white');


        $('#facultyName').html('Juan Medrano');
        $('#facultyEmail').html('jfmedrano@ucdavis.edu');
        $('#facultyOfficeNumber').html('2243 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });



 $('#li7-3').click(function () {

        resetColors();
        $('#li7-3').css('backgroundColor', '#002855');
        $('#li7-3').css('color', 'white');


        $('#facultyName').html('Joy Mench');
        $('#facultyEmail').html('jamench@ucdavis.edu');
        $('#facultyOfficeNumber').html('2245 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });

    
 $('#li8-3').click(function () {

        resetColors();
        $('#li8-3').css('backgroundColor', '#002855');
        $('#li8-3').css('color', 'white');


        $('#facultyName').html('Deanne Meyer');
        $('#facultyEmail').html('dmeyer@ucdavis.edu');
        $('#facultyOfficeNumber').html('2209 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
     $('#li9-3').click(function () {

        resetColors();
        $('#li9-3').css('backgroundColor', '#002855');
        $('#li9-3').css('color', 'white');


        $('#facultyName').html('Michael Mienaltowski');
        $('#facultyEmail').html('mjmienaltowski@ucdavis.edu');
        $('#facultyOfficeNumber').html('2211 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
      $('#li10-3').click(function () {

        resetColors();
        $('#li10-3').css('backgroundColor', '#002855');
        $('#li10-3').css('color', 'white');


        $('#facultyName').html('Michael Miller');
        $('#facultyEmail').html('micmiller@ucdavis.edu');
        $('#facultyOfficeNumber').html('2241 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
       
      $('#li11-3').click(function () {

        resetColors();
        $('#li11-3').css('backgroundColor', '#002855');
        $('#li11-3').css('color', 'white');


        $('#facultyName').html('Frank Mitloehner');
        $('#facultyEmail').html('fmmitloehner@ucdavis.edu');
        $('#facultyOfficeNumber').html('2151 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
       
    
    
       
      $('#li12-3').click(function () {

        resetColors();
        $('#li12-3').css('backgroundColor', '#002855');
        $('#li12-3').css('color', 'white');


        $('#facultyName').html('James Murray');
        $('#facultyEmail').html('jdmurray@ucdavis.edu');
        $('#facultyOfficeNumber').html('2119 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
       
    
    
        
       
      $('#li13-3').click(function () {

        resetColors();
        $('#li13-3').css('backgroundColor', '#002855');
        $('#li13-3').css('color', 'white');


        $('#facultyName').html('Lee Allen Pettey');
        $('#facultyEmail').html('lapettey@ucdavis.edu');
        $('#facultyOfficeNumber').html('2137 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
       
    
    
        
      $('#li14-3').click(function () {

        resetColors();
        $('#li14-3').css('backgroundColor', '#002855');
        $('#li14-3').css('color', 'white');


        $('#facultyName').html('Anita Oberbauer');
        $('#facultyEmail').html('amoberbauer@ucdavis.edu');
        $('#facultyOfficeNumber').html('2223B Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
          
      $('#li15-3').click(function () {

        resetColors();
        $('#li15-3').css('backgroundColor', '#002855');
        $('#li15-3').css('color', 'white');


        $('#facultyName').html('James Oltjen');
        $('#facultyEmail').html('jwoltjen@ucdavis.edu');
        $('#facultyOfficeNumber').html('2153 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
              
      $('#li16-3').click(function () {

        resetColors();
        $('#li16-3').css('backgroundColor', '#002855');
        $('#li16-3').css('color', 'white');


        $('#facultyName').html('Peter Robinson');
        $('#facultyEmail').html('phrobinson@ucdavis.edu');
        $('#facultyOfficeNumber').html('n/a');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
              
      $('#li17-3').click(function () {

        resetColors();
        $('#li17-3').css('backgroundColor', '#002855');
        $('#li17-3').css('color', 'white');


        $('#facultyName').html('Pablo Ross');
        $('#facultyEmail').html('pross@ucdavis.edu');
        $('#facultyOfficeNumber').html('2201 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
          $('#li18-3').click(function () {

        resetColors();
        $('#li18-3').css('backgroundColor', '#002855');
        $('#li18-3').css('color', 'white');


        $('#facultyName').html('Robert Sainz');
        $('#facultyEmail').html('rdsainz@ucdavis.edu');
        $('#facultyOfficeNumber').html('2205 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    

          $('#li19-3').click(function () {

        resetColors();
        $('#li19-3').css('backgroundColor', '#002855');
        $('#li19-3').css('color', 'white');


        $('#facultyName').html('Andrea Schreier');
        $('#facultyEmail').html('amdrauch@ucdavis.edu');
        $('#facultyOfficeNumber').html('2236 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    

    
     
    
        $('#li21-3').click(function () {

        resetColors();
        $('#li21-3').css('backgroundColor', '#002855');
        $('#li21-3').css('color', 'white');


        $('#facultyName').html('Ann Todgham');
        $('#facultyEmail').html('todgham@ucdavis.edu');
        $('#facultyOfficeNumber').html('2205 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
        $('#li22-3').click(function () {

        resetColors();
        $('#li22-3').css('backgroundColor', '#002855');
        $('#li22-3').css('color', 'white');


        $('#facultyName').html('Cary Trexler');
        $('#facultyEmail').html('cjtrexler@ucdavis.edu');
        $('#facultyOfficeNumber').html('258 SOEB (School of Education Building)');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    

    
      $('#li23-3').click(function () {

        resetColors();
        $('#li23-3').css('backgroundColor', '#002855');
        $('#li23-3').css('color', 'white');


        $('#facultyName').html('Cassanda Tucker');
        $('#facultyEmail').html('cbtucker@ucdavis.edu');
        $('#facultyOfficeNumber').html('2109 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
          $('#li24-3').click(function () {

        resetColors();
        $('#li24-3').css('backgroundColor', '#002855');
        $('#li24-3').css('color', 'white');


        $('#facultyName').html('Alison Van Eenennaam');
        $('#facultyEmail').html('alvaneenennaam@ucdavis.edu');
        $('#facultyOfficeNumber').html('2113 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
    
    
    
             $('#li25-3').click(function () {

        resetColors();
        $('#li25-3').css('backgroundColor', '#002855');
        $('#li25-3').css('color', 'white');


        $('#facultyName').html('Dana Van Liew');
        $('#facultyEmail').html('dbvanliew@ucdavis.edu');
        $('#facultyOfficeNumber').html('1215 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
    
             $('#li26-3').click(function () {

        resetColors();
        $('#li26-3').css('backgroundColor', '#002855');
        $('#li26-3').css('color', 'white');


        $('#facultyName').html('Huaijun Zhou');
        $('#facultyEmail').html('hzhou@ucdavis.edu');
        $('#facultyOfficeNumber').html('2247 Meyer Hall');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
             $('#li27-3').click(function () {

        resetColors();
        $('#li27-3').css('backgroundColor', '#002855');
        $('#li27-3').css('color', 'white');


        $('#facultyName').html('Richard Zinn');
        $('#facultyEmail').html('robzinn@ucdavis.edu');
        $('#facultyOfficeNumber').html('N/A');

        $('#facultyThere').css('marginTop', '');
        $('#facultyThere').css('marginLeft', '');

    });    
    
    
    
    
    
    
    
    function resetColors() {
        console.log("resetting colors");
        $('#column2 li').css('backgroundColor', 'white');
        $('#column2 li').css('color', 'black');

    }

    function resetImage() {
        console.log("resetting image");
        $('#column4 embed').css('visibility', 'hidden');
    }

    function resetGoldMarker() {
        $('.mapMarkersGold').css('visibility', 'hidden');
        $('.mapMarkersBlue').css('visibility', 'visible');
    }

    //close jQuery
});