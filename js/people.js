$(function () {

    //send a message to the console window to check 
    //if this page is beting read
    console.log("ready");





    $('#bathroomicon').click(function() {
      console.log('click');
      $('#overlay').css('visibility', 'visible');
      return false;
  });

  // add a click event for the close button
  $('nav#close').click(function(){
    $('#overlay').css('visibility', 'hidden');
    
  });
    


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

        $('#li10').css('backgroundColor', '#002855');
        $('#li10').css('color', 'white');

        $('.swfObject7').css('visibility', 'visible');


    });



    $('#li11').click(function () {
        resetColors();
        resetImage();

        $('#li11').css('backgroundColor', '#002855');
        $('#li11').css('color', 'white');

        $('.swfObject8').css('visibility', 'visible');


    });


    $('.katherine').click(function () {
        resetColors();
        resetImage();

        console.log('livingston was clickedS')
        $('.katherine').css('backgroundColor', '#002855');
        $('.katherine').css('color', 'white');

        $('.swfObject9').css('visibility', 'visible');


    });

    
    

    $('#generalButton').click(function () {
        $('#generalInformation').css('visibility','visible');
        $('#column2Image').css('visibility','visible');
        $('#column2Image').css('visibility','hidden');
        
          $('#facultyName, #facultyEmail, #facultyOfficeNumber, #meyerMap1, #meyerMap2, #facultyHere, #facultyThere').css('visibility', 'hidden');
        

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
        
        
        $('#column2Image').css('visibility','visible');
        $('#generalInformation').css('visibility','hidden');
        
        $('#facultyName, #facultyEmail, #facultyOfficeNumber, #meyerMap1, #meyerMap2, #facultyHere, #facultyThere').css('visibility', 'hidden');
        
        
        
        
        
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


        $('#generalButton').css('backgroundColor', 'grey');

        $('#advisingButton').css('backgroundColor', '#002855');
        $('#facultyButton').css('backgroundColor', 'grey');
        $('#facilitiesButton').css('backgroundColor', 'grey');

        $('#faculty1').css('visibility', 'hidden');
        $('#faculty2').css('visibility', 'hidden');
        $('#facilities').css('visibility', 'hidden');

        $('#secondaryHeader').css('visibility', 'visible');
        $('#advising').css('visibility', 'visible');

        $('#secondaryHeader h3').html('ADVISING');
        
        $('#secondaryHeader').animate({
            top: 515,
            
        },
                                    500,
                                     'linear'
                                     );        
        
        
        $('#column2Image').animate({
            
            height: 510,
            
        
        },
                                  
                                500,
                                'linear'
                                    );
        
    });



    $('#facultyButton').click(function () {
        
        $('#column2Image').css('visibility','visible');
 $('#generalInformation').css('visibility','hidden');
          $('#facultyName, #facultyEmail, #facultyOfficeNumber, #meyerMap1, #meyerMap2, #facultyHere, #facultyThere').css('visibility', 'visible');
        
        

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
        
        
        
        
        
        
               $('#secondaryHeader').animate({
            top: 0,
            
        },
                                    500,
                                     'linear'
                                     );        
        
        
        $('#column2Image').animate({
            
            height: 0,
            
        
        },
                                  
                                500,
                                'linear'
                                    );
        
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
$('#generalInformation').css('visibility','hidden');
  $('#facultyName, #facultyEmail, #facultyOfficeNumber, #meyerMap1, #meyerMap2, #facultyHere, #facultyThere').css('visibility', 'hidden');
        
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
        
        
        $('#secondaryHeader').animate({
            
            top:330,
            
        },
                                     500,
                                      'linear'
                                     
                                        );
        
        $('#column2Image').animate({
            height: 320,
            
            
        },
                                  500,
                                   'linear'
                                  )

    });




    $('#li2-4').click(function () {

        resetColors();
        resetGoldMarker();
        $('#markerGold2').css('visibility', 'visible');
        $('#markerBlue2').css('visibility', 'hidden');
        $('#li2-4').css('backgroundColor', '#002855');
        $('#li2-4').css('color', 'white');


        $('#buildingHeader').html('Aquatic (CABA) Facility');
        $('#buildingDescription').html('There is research space for a wide range of programs, including aquatic toxicology, reproduction, engineering, nutrition, genetics, endocrinology, disease and pathology, fish ecology, and general aquatic biology. About 15 species are under study at any one time. In addition to supporting animal research, the Aquatic Centers water, after release from the tanks, contributes to the natural reserves and study sites at Jamison Pond and Putah Creek.');


        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.jpg)');



    });

    $('#li3-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold3').css('visibility', 'visible');
        $('#markerBlue3').css('visibility', 'hidden');
        $('#li3-4').css('backgroundColor', '#002855');
        $('#li3-4').css('color', 'white');


        $('#buildingHeader').html('Avian Hopkins Facility');
        $('#buildingDescription').html('Located on Hopkins Road, across from the University Airport, the Hopkins Avian Facility houses multiple species ranging from chickens to kestrels to parrots to finches. Composed of more than 15 buildings on 18 acres, research and teaching can be carried out in a variety of building and environments.');
        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/avian.fw.jpg)');

    });

    $('#li4-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold4').css('visibility', 'visible');
        $('#markerBlue4').css('visibility', 'hidden');
        $('#li4-4').css('backgroundColor', '#002855');
        $('#li4-4').css('color', 'white');


        $('#buildingHeader').html('Beef Barn');
        $('#buildingDescription').html('The Animal Science Beef Barn is located just west of the main campus off Garrod Drive. This facility is primarily used for cow/calf management and teaching. The physical facilities consist of two large hay storage barns with cattle pens arranged around the outside of the barns. In addition, there are approximately 50 acres of irrigated pasture near the main barns for summer grazing. In the winter, cows and calves are moved to remote pastures in the foothills bordering the cities of Vacaville and Folsom. These two pastures provide approximately 750 acres of annual grasses and oak trees.');
        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/beefbarn2.fw.jpg)');
    });

    $('#li5-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold5').css('visibility', 'visible');
        $('#markerBlue5').css('visibility', 'hidden');
        $('#li5-4').css('backgroundColor', '#002855');
        $('#li5-4').css('color', 'white');


        $('#buildingHeader').html('Dairy Facility');
        $('#buildingDescription').html('The U.C. Davis Dairy Teaching and Research Facility is located on the main campus at the University of California at Davis. The milking herd of 102 cows, excluding dry cows, is milked two times per day in a modern single six herringbone parlor with automatic takeoffs and cow identification. The system also has computerized production recording and motion monitoring for estrus detection. The rolling herd average is well above 27,000 pounds of energy corrected  milk per cow annually. Milk from the dairy is sold to Hilmar Cheese Company , Hilmar, CA. Along with the milk cows, 175 replacement heifers are raised from birth to calving at this facility. Seventy five percent of the herd are registered Holsteins and twenty five percent of the herd are registered Jerseys.');
        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/beefbarn2.fw.jpg)');
    });


    $('#li6-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold6').css('visibility', 'visible');
        $('#markerBlue6').css('visibility', 'hidden');
        $('#li6-4').css('backgroundColor', '#002855');
        $('#li6-4').css('color', 'white');


        $('#buildingHeader').html('Goat Barn');
        $('#buildingDescription').html('The Dairy Goat Research Facility operates under the daily management of a herd manager who is assisted by 3-5 part-time student employees. About 30 students per quarter (90 students/year) come to the barn for weekly management classes or volunteer to gain goat management experience. This facility is located off Old Davis Road south of the main UC Davis campus. The main barn contains the office, laboratory, milking, kid rearing, and trial areas. Animals are kept in dry lot pens surrounding the main barn.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/goatbarn.jpg)');
    });


    $('#li7-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold7').css('visibility', 'visible');
        $('#markerBlue7').css('visibility', 'hidden');
        $('#li7-4').css('backgroundColor', '#002855');
        $('#li7-4').css('color', 'white');


        $('#buildingHeader').html('Horse Barn');
        $('#buildingDescription').html('The Department of Animal Science Horse Barn has been a mainstay of the University of California, Davis since its foundation in the early 1910s.  The Horse Barn strives to educate its students about all aspects of equine reproduction and management via hands-on experience. The Animal Science Horse Barn is a student labor force run facility.  Each year approximately 10-15 students help keep the barn running, maintained and fed.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/horsebarn.jpg)');
    });



    $('#li8-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold8').css('visibility', 'visible');
        $('#markerBlue8').css('visibility', 'hidden');
        $('#li8-4').css('backgroundColor', '#002855');
        $('#li8-4').css('color', 'white');


        $('#buildingHeader').html('Meat Lab');
        $('#buildingDescription').html('Meat Sales Open Thurs & Friday 1:00 - 5:30 Located in Cole C Facility (530) 752-7410. The UC Davis Meat Lab is a federally inspected meat processing plant located on the UC Davis campus in the Harold Cole Facility for the Study of Biology of Large Animals. The Meat Lab is part of the Department of Animal Science and is used for teaching and research activities. It is a 5000-square-foot facility containing a multi-species kill floor, carcass coolers, processing room, cutting room, analytical lab, classroom, and freezers.');


        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/meatlab.jpg)');
    });


    $('#li9-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold9').css('visibility', 'visible');
        $('#markerBlue9').css('visibility', 'hidden');
        $('#li9-4').css('backgroundColor', '#002855');
        $('#li9-4').css('color', 'white');


        $('#buildingHeader').html('Sheep Barn');
        $('#buildingDescription').html('The Sheep Unit is located on Garrod Road west of Highway 113 on the University of California at Davis Campus. The Sheep Program is committed to the three missions of the University of California: Teaching, Research and Outreach.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/sheepbarn.jpg)');
    });



    $('#li10-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold10').css('visibility', 'visible');
        $('#markerBlue10').css('visibility', 'hidden');
        $('#li10-4').css('backgroundColor', '#002855');
        $('#li10-4').css('color', 'white');


        $('#buildingHeader').html('Small Animal Facility');
        $('#buildingDescription').html('Cole B is a Small Animal Colony dedicated to teaching and research. The animal inventory includes more than 1000 mice, as well as smaller colonies of rats and fish, but can accommodate a variety of small rodents and rabbits as the need arises. Most animals come from our own breeding colonies and some of the mouse lines were developed by our faculty and do not exist elsewhere.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/small_animal.jpg)');
    });



    $('#li11-4').click(function () {
        resetColors();
        resetGoldMarker();
        $('#markerGold11').css('visibility', 'visible');
        $('#markerBlue11').css('visibility', 'hidden');
        $('#li11-4').css('backgroundColor', '#002855');
        $('#li11-4').css('color', 'white');


        $('#buildingHeader').html('Swine Facility');
        $('#buildingDescription').html('The swine center contains more than 9,000 square feet of inside, enclosed space that houses a class and meeting room, student apartments, lab, office, break room, storage area, feed and work areas, as well as two farrowing rooms and two nursery rooms. Each farrowing room has 10 crates, while each nursery room has the capacity to house 150 pigs. Outside covered space of over 24,000 square feet consists of boar and sow pens, finishing pens, hospital area, working and breeding areas, as well as load-out and feed-handling facilities.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/swine-facility.jpg)');
    });



    $('#li13-4').click(function () {
        resetColors();
        resetGoldMarker();
;
        $('#li13-4').css('backgroundColor', '#002855');
        $('#li13-4').css('color', 'white');


        $('#buildingHeader').html('Sierra Field Station');
        $('#buildingDescription').html('The Sierra Foothills Research and Extension Center is located outside Marysville. Commercial cow/calf research is the primary focus of this station. The Station is maintained by the Division of Agriculture and Natural Resources of the University of California. The Animal Science cattle herd is approximately 450 breeding age females. Upon weaning, male calves are sent to the Feedlot on the Davis campus for further use in teaching and research activities.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li14-4').click(function () {
        resetColors();
        resetGoldMarker();
       
        $('#li14-4').css('backgroundColor', '#002855');
        $('#li14-4').css('color', 'white');


        $('#buildingHeader').html('Desert Research Station');
        $('#buildingDescription').html('The Desert Research and Extension Center (DREC) is located near El Centro, California. DREC is primarily a feedlot facility conducting research of feedlot cattle in the hot climate of the desert. With a capacity of nearly 600 head of feedlot cattle, DREC is a valuable tool for the feedlot industry in California.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li15-4').click(function () {
        resetColors();
        resetGoldMarker();
       
        $('#li15-4').css('backgroundColor', '#002855');
        $('#li15-4').css('color', 'white');


        $('#buildingHeader').html('ANS Teaching Facility');
        $('#buildingDescription').html('The Animal Science Teaching Facility (ASTF) is located on Dairy Road, just north of the Dairy Teaching and Research Facility. Designed primarily for teaching purposes, the facility includes 2 classrooms (500 & 600 ASTF), indoor rooms for laboratory animals and swine, and several outdoor pens for cattle, sheep, goats, and horses.');

        $('#buildingImage').css('backgroundImage', 'url(../images/new-facility-images/aquatic.png)');
    });



    $('#li16-4').click(function () {
        resetColors();
        resetGoldMarker();
       
        $('#li16-4').css('backgroundColor', '#002855');
        $('#li16-4').css('color', 'white');


        $('#buildingHeader').html('Putah Creek Lodge');
        $('#buildingDescription').html('Situated in the picturesque Arboretum on the southwest perimeter of campus, Putah Creek Lodge is an excellent choice for those desiring a beautiful location that is private and remote. The lodge offers wonderful atmosphere for conferences, meetings, retreats, receptions, banquets, weddings, company picnics, reunions and more. ');

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

        $('#facultyThere').css('marginTop', '100px');
        $('#facultyThere').css('marginLeft', '570px');

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

        $('#facultyThere').css('marginTop', '790px');
        $('#facultyThere').css('marginLeft', '160px');

    });


 $('#li6-2').click(function () {

        resetColors();
        $('#li6-2').css('backgroundColor', '#002855');
        $('#li6-2').css('color', 'white');


        $('#facultyName').html('Fred Conte');
        $('#facultyEmail').html('fsconte@ucdavis.edu');
        $('#facultyOfficeNumber').html('2117 Meyer Hall');

        $('#facultyThere').css('marginTop', '210px');
        $('#facultyThere').css('marginLeft', '600px');

    });



 $('#li7-2').click(function () {

        resetColors();
        $('#li7-2').css('backgroundColor', '#002855');
        $('#li7-2').css('color', 'white');


        $('#facultyName').html('Mary Delany');
        $('#facultyEmail').html('medelany@ucdavis.edu');
        $('#facultyOfficeNumber').html('2131D Meyer Hall');

        $('#facultyThere').css('marginTop', '140px');
        $('#facultyThere').css('marginLeft', '790px');

    });

    
 $('#li8-2').click(function () {

        resetColors();
        $('#li8-2').css('backgroundColor', '#002855');
        $('#li8-2').css('color', 'white');


        $('#facultyName').html('Edward DePeters');
        $('#facultyEmail').html('ejdepeters@ucdavis.edu');
        $('#facultyOfficeNumber').html('2149 Meyer Hall');

        $('#facultyThere').css('marginTop', '120px');
        $('#facultyThere').css('marginLeft', '510px');

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

        $('#facultyThere').css('marginTop', '210px');
        $('#facultyThere').css('marginLeft', '640px');

    });    
    
    
    
       
      $('#li11-2').click(function () {

        resetColors();
        $('#li11-2').css('backgroundColor', '#002855');
        $('#li11-2').css('color', 'white');


        $('#facultyName').html('Thomas Famula');
        $('#facultyEmail').html('trfamula@ucdavis.edu');
        $('#facultyOfficeNumber').html('2143 Meyer Hall');

        $('#facultyThere').css('marginTop', '80px');
        $('#facultyThere').css('marginLeft', '600px');

    });    
       
    
    
       
      $('#li12-2').click(function () {

        resetColors();
        $('#li12-2').css('backgroundColor', '#002855');
        $('#li12-2').css('color', 'white');


        $('#facultyName').html('Matthis Hess');
        $('#facultyEmail').html('mhess@ucdavis.edu');
        $('#facultyOfficeNumber').html('2123 Meyer Hall');

        $('#facultyThere').css('marginTop', '250px');
        $('#facultyThere').css('marginLeft', '520px');

    });    
       
    
    
        
       
      $('#li13-2').click(function () {

        resetColors();
        $('#li13-2').css('backgroundColor', '#002855');
        $('#li13-2').css('color', 'white');


        $('#facultyName').html('Russ Hovey');
        $('#facultyEmail').html('rchovey@ucdavis.edu');
        $('#facultyOfficeNumber').html('2145 Meyer Hall');

        $('#facultyThere').css('marginTop', '100px');
        $('#facultyThere').css('marginLeft', '570px');

    });    
       
    
    
        
      $('#li14-2').click(function () {

        resetColors();
        $('#li14-2').css('backgroundColor', '#002855');
        $('#li14-2').css('color', 'white');


        $('#facultyName').html('Joshua Hull');
        $('#facultyEmail').html('jmhull@ucdavis.edu');
        $('#facultyOfficeNumber').html('2131A Meyer Hall');

        $('#facultyThere').css('marginTop', '25px');
        $('#facultyThere').css('marginLeft', '730px');

    });    
    
    
    
          
      $('#li15-2').click(function () {

        resetColors();
        $('#li15-2').css('backgroundColor', '#002855');
        $('#li15-2').css('color', 'white');


        $('#facultyName').html('Silas Hung');
        $('#facultyEmail').html('sshung@ucdavis.edu');
        $('#facultyOfficeNumber').html('2139 Meyer Hall');

        $('#facultyThere').css('marginTop', '45px');
        $('#facultyThere').css('marginLeft', '676px');

    });    
    
    
    
    
              
      $('#li16-2').click(function () {

        resetColors();
        $('#li16-2').css('backgroundColor', '#002855');
        $('#li16-2').css('color', 'white');


        $('#facultyName').html('Ermias Kebreab');
        $('#facultyEmail').html('ekebreab@ucdavis.edu');
        $('#facultyOfficeNumber').html('2111 Meyer Hall');

        $('#facultyThere').css('marginTop', '696px');
        $('#facultyThere').css('marginLeft', '170px');

    });    
    
    
    
    
              
      $('#li17-2').click(function () {

        resetColors();
        $('#li17-2').css('backgroundColor', '#002855');
        $('#li17-2').css('color', 'white');


        $('#facultyName').html('Annie King');
        $('#facultyEmail').html('ajking@ucdavis.edu');
        $('#facultyOfficeNumber').html('1217 Meyer Hall');

        $('#facultyThere').css('marginTop', '660px');
        $('#facultyThere').css('marginLeft', '125px');

    });    
    
    
          $('#li18-2').click(function () {

        resetColors();
        $('#li18-2').css('backgroundColor', '#002855');
        $('#li18-2').css('color', 'white');


        $('#facultyName').html('Kirk Klasing');
        $('#facultyEmail').html('kcklasing@ucdavis.edu');
        $('#facultyOfficeNumber').html('2131B Meyer Hall');

        $('#facultyThere').css('marginTop', '20px');
        $('#facultyThere').css('marginLeft', '758px');

    });    
    
    
    

          $('#li19-2').click(function () {

        resetColors();
        $('#li19-2').css('backgroundColor', '#002855');
        $('#li19-2').css('color', 'white');


        $('#facultyName').html('Dietmar Kueltz');
        $('#facultyEmail').html('dkueltz@ucdavis.edu');
        $('#facultyOfficeNumber').html('2207 Meyer Hall');

        $('#facultyThere').css('marginTop', '210px');
        $('#facultyThere').css('marginLeft', '298px');

    });    
    
    
    
    
        $('#li20-2').click(function () {

        resetColors();
        $('#li20-2').css('backgroundColor', '#002855');
        $('#li20-2').css('color', 'white');


        $('#facultyName').html('Yeunshin Lee');
        $('#facultyEmail').html('dizee@ucdavis.edu');
        $('#facultyOfficeNumber').html('1111 Meyer Hall');

        $('#facultyThere').css('marginTop', '560px');
        $('#facultyThere').css('marginLeft', '675px');

    });    
    
    
     
    
        $('#li21-2').click(function () {

        resetColors();
        $('#li21-2').css('backgroundColor', '#002855');
        $('#li21-2').css('color', 'white');


        $('#facultyName').html('Elizabeth Maga');
        $('#facultyEmail').html('eamaga@ucdavis.edu');
        $('#facultyOfficeNumber').html('2125 Meyer Hall');

        $('#facultyThere').css('marginTop', '250px');
        $('#facultyThere').css('marginLeft', '480px');

    });    
    
    
    
        $('#li22-2').click(function () {

        resetColors();
        $('#li22-2').css('backgroundColor', '#002855');
        $('#li22-2').css('color', 'white');


        $('#facultyName').html('Maja Makagon');
        $('#facultyEmail').html('mmmakagon@ucdavis.edu');
        $('#facultyOfficeNumber').html('1255 Meyer Hall');

        $('#facultyThere').css('marginTop', '785px');
        $('#facultyThere').css('marginLeft', '155px');

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

        $('#facultyThere').css('marginTop', '285px');
        $('#facultyThere').css('marginLeft', '440px');

    });


 $('#li6-3').click(function () {

        resetColors();
        $('#li6-3').css('backgroundColor', '#002855');
        $('#li6-3').css('color', 'white');


        $('#facultyName').html('Juan Medrano');
        $('#facultyEmail').html('jfmedrano@ucdavis.edu');
        $('#facultyOfficeNumber').html('2243 Meyer Hall');

        $('#facultyThere').css('marginTop', '320px');
        $('#facultyThere').css('marginLeft', '355px');

    });



 $('#li7-3').click(function () {

        resetColors();
        $('#li7-3').css('backgroundColor', '#002855');
        $('#li7-3').css('color', 'white');


        $('#facultyName').html('Joy Mench');
        $('#facultyEmail').html('jamench@ucdavis.edu');
        $('#facultyOfficeNumber').html('2245 Meyer Hall');

        $('#facultyThere').css('marginTop', '325px');
        $('#facultyThere').css('marginLeft', '325px');

    });

    
 $('#li8-3').click(function () {

        resetColors();
        $('#li8-3').css('backgroundColor', '#002855');
        $('#li8-3').css('color', 'white');


        $('#facultyName').html('Deanne Meyer');
        $('#facultyEmail').html('dmeyer@ucdavis.edu');
        $('#facultyOfficeNumber').html('2209 Meyer Hall');

        $('#facultyThere').css('marginTop', '225px');
        $('#facultyThere').css('marginLeft', '270px');

    });    
    
    
     $('#li9-3').click(function () {

        resetColors();
        $('#li9-3').css('backgroundColor', '#002855');
        $('#li9-3').css('color', 'white');


        $('#facultyName').html('Michael Mienaltowski');
        $('#facultyEmail').html('mjmienaltowski@ucdavis.edu');
        $('#facultyOfficeNumber').html('2211 Meyer Hall');

        $('#facultyThere').css('marginTop', '225px');
        $('#facultyThere').css('marginLeft', '240px');

    });    
    
      $('#li10-3').click(function () {

        resetColors();
        $('#li10-3').css('backgroundColor', '#002855');
        $('#li10-3').css('color', 'white');


        $('#facultyName').html('Michael Miller');
        $('#facultyEmail').html('micmiller@ucdavis.edu');
        $('#facultyOfficeNumber').html('2241 Meyer Hall');

        $('#facultyThere').css('marginTop', '305px');
        $('#facultyThere').css('marginLeft', '380px');

    });    
    
    
    
       
      $('#li11-3').click(function () {

        resetColors();
        $('#li11-3').css('backgroundColor', '#002855');
        $('#li11-3').css('color', 'white');


        $('#facultyName').html('Frank Mitloehner');
        $('#facultyEmail').html('fmmitloehner@ucdavis.edu');
        $('#facultyOfficeNumber').html('2151 Meyer Hall');

        $('#facultyThere').css('marginTop', '130px');
        $('#facultyThere').css('marginLeft', '480px');

    });    
       
    
    
       
      $('#li12-3').click(function () {

        resetColors();
        $('#li12-3').css('backgroundColor', '#002855');
        $('#li12-3').css('color', 'white');


        $('#facultyName').html('James Murray');
        $('#facultyEmail').html('jdmurray@ucdavis.edu');
        $('#facultyOfficeNumber').html('2119 Meyer Hall');

        $('#facultyThere').css('marginTop', '230px');
        $('#facultyThere').css('marginLeft', '580px');

    });    
       
    
    
        
       
      $('#li13-3').click(function () {

        resetColors();
        $('#li13-3').css('backgroundColor', '#002855');
        $('#li13-3').css('color', 'white');


        $('#facultyName').html('Lee Allen Pettey');
        $('#facultyEmail').html('lapettey@ucdavis.edu');
        $('#facultyOfficeNumber').html('2137 Meyer Hall');

        $('#facultyThere').css('marginTop', '50px');
        $('#facultyThere').css('marginLeft', '705px');

    });    
       
    
    
        
      $('#li14-3').click(function () {

        resetColors();
        $('#li14-3').css('backgroundColor', '#002855');
        $('#li14-3').css('color', 'white');


        $('#facultyName').html('Anita Oberbauer');
        $('#facultyEmail').html('amoberbauer@ucdavis.edu');
        $('#facultyOfficeNumber').html('2223B Meyer Hall');

        $('#facultyThere').css('marginTop', '310px');
        $('#facultyThere').css('marginLeft', '50px');

    });    
    
    
    
          
      $('#li15-3').click(function () {

        resetColors();
        $('#li15-3').css('backgroundColor', '#002855');
        $('#li15-3').css('color', 'white');


        $('#facultyName').html('James Oltjen');
        $('#facultyEmail').html('jwoltjen@ucdavis.edu');
        $('#facultyOfficeNumber').html('2153 Meyer Hall');

        $('#facultyThere').css('marginTop', '150px');
        $('#facultyThere').css('marginLeft', '460px');

    });    
    
    
    
    
              
      $('#li16-3').click(function () {

        resetColors();
        $('#li16-3').css('backgroundColor', '#002855');
        $('#li16-3').css('color', 'white');


        $('#facultyName').html('Peter Robinson');
        $('#facultyEmail').html('phrobinson@ucdavis.edu');
        $('#facultyOfficeNumber').html('n/a');

        $('#facultyThere').css('marginTop', '#');
        $('#facultyThere').css('marginLeft', '#');
    });    
    
    
    
    
              
      $('#li17-3').click(function () {

        resetColors();
        $('#li17-3').css('backgroundColor', '#002855');
        $('#li17-3').css('color', 'white');


        $('#facultyName').html('Pablo Ross');
        $('#facultyEmail').html('pross@ucdavis.edu');
        $('#facultyOfficeNumber').html('2201 Meyer Hall');

        $('#facultyThere').css('marginTop', '180px');
        $('#facultyThere').css('marginLeft', '380px');

    });    
    
    
          $('#li18-3').click(function () {

        resetColors();
        $('#li18-3').css('backgroundColor', '#002855');
        $('#li18-3').css('color', 'white');


        $('#facultyName').html('Robert Sainz');
        $('#facultyEmail').html('rdsainz@ucdavis.edu');
        $('#facultyOfficeNumber').html('2205 Meyer Hall');

        $('#facultyThere').css('marginTop', '200px');
        $('#facultyThere').css('marginLeft', '330px');

    });    
    
    
    

          $('#li19-3').click(function () {

        resetColors();
        $('#li19-3').css('backgroundColor', '#002855');
        $('#li19-3').css('color', 'white');


        $('#facultyName').html('Andrea Schreier');
        $('#facultyEmail').html('amdrauch@ucdavis.edu');
        $('#facultyOfficeNumber').html('2236 Meyer Hall');

        $('#facultyThere').css('marginTop', '280px');
        $('#facultyThere').css('marginLeft', '440px');

    });    
    
    
    

    
     
    
        $('#li21-3').click(function () {

        resetColors();
        $('#li21-3').css('backgroundColor', '#002855');
        $('#li21-3').css('color', 'white');


        $('#facultyName').html('Ann Todgham');
        $('#facultyEmail').html('todgham@ucdavis.edu');
        $('#facultyOfficeNumber').html('2205 Meyer Hall');

        $('#facultyThere').css('marginTop', '200px');
        $('#facultyThere').css('marginLeft', '330px');

    });    
    
    
    
        $('#li22-3').click(function () {

        resetColors();
        $('#li22-3').css('backgroundColor', '#002855');
        $('#li22-3').css('color', 'white');


        $('#facultyName').html('Cary Trexler');
        $('#facultyEmail').html('cjtrexler@ucdavis.edu');
        $('#facultyOfficeNumber').html('258 SOEB (School of Education Building)');

        $('#facultyThere').css('marginTop', '#');
        $('#facultyThere').css('marginLeft', '#');

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

        $('#facultyThere').css('marginTop', '160px');
        $('#facultyThere').css('marginLeft', '740px');

    });    
    
    
    
    
    
    
    
             $('#li25-3').click(function () {

        resetColors();
        $('#li25-3').css('backgroundColor', '#002855');
        $('#li25-3').css('color', 'white');


        $('#facultyName').html('Dana Van Liew');
        $('#facultyEmail').html('dbvanliew@ucdavis.edu');
        $('#facultyOfficeNumber').html('1215 Meyer Hall');

        $('#facultyThere').css('marginTop', '650px');
        $('#facultyThere').css('marginLeft', '150px');

    });    
    
    
    
    
    
             $('#li26-3').click(function () {

        resetColors();
        $('#li26-3').css('backgroundColor', '#002855');
        $('#li26-3').css('color', 'white');


        $('#facultyName').html('Huaijun Zhou');
        $('#facultyEmail').html('hzhou@ucdavis.edu');
        $('#facultyOfficeNumber').html('2247 Meyer Hall');

        $('#facultyThere').css('marginTop', '340px');
        $('#facultyThere').css('marginLeft', '300px');

    });    
    
    
    
             $('#li27-3').click(function () {

        resetColors();
        $('#li27-3').css('backgroundColor', '#002855');
        $('#li27-3').css('color', 'white');


        $('#facultyName').html('Richard Zinn');
        $('#facultyEmail').html('robzinn@ucdavis.edu');
        $('#facultyOfficeNumber').html('N/A');

        $('#facultyThere').css('marginTop', '#');
        $('#facultyThere').css('marginLeft', '#');

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