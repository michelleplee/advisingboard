$(function () {

    //send a message to the console window to check 
    //if this page is beting read
    console.log("ready");





    /*
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
        
            
        
        */




    /* on window load*/
    $(window).load(function () {
        $('#clickContinueAfrica').css('visibility', 'visible');


        console.log("africa clicked");
        resetColors();
        $('#li1').css('backgroundColor', '#BA0C2F');


        $('#countryName').html('AFRICA');
        $('#universityName').html('University of Ghana');
        $('#countryDescription').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');


        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-22.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-23.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-24.png)');



        resetListThree();

        $('#clickContinueAfrica').click(function () {

            resetContinue();


            console.log('show Africa List');
            $('#africaUl').css('visibility', 'visible');





            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');



            $('#column3Image').animate({

                    width: 250
                    , height: 770,

                }
                , 1000
                , 'linear');



            $('#countryName').animate({

                    opacity: 1
                    , top: 790
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');


        });




        // add a callback function here to change opacity and left values to get a fade/slide effect over .75 second                                                 

    });



    function africaBase() {

        /* africa  starts here */
        $('#li1').click(function () {





            $('#clickContinueAfrica').css('visibility', 'visible');

            resetCountryName();
            resetAll();

            console.log("africa clicked");
            resetColors();
            $('#li1').css('backgroundColor', '#BA0C2F');


            $('#countryName').html('AFRICA');
            $('#universityName').html('University of Ghana');
            $('#countryDescription').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');


            $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-22.png)');

            $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-23.png)');

            $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-24.png)');



            resetListThree();
            $('#clickContinueAfrica').click(function () {

                resetContinue();


                console.log('show Africa List');
                $('#africaUl').css('visibility', 'visible');





                $('#countryDescription').css('visibility', 'hidden');
                $('#universityName').css('visibility', 'hidden');


                $('#column3Image').animate({

                        width: 250
                        , height: 770,

                    }
                    , 1000
                    , 'linear');



                $('#countryName').animate({

                        opacity: 1
                        , top: 790
                        , width: 220
                        , paddingRight: 0
                        , paddingLeft: 30,

                    }
                    , 1000
                    , 'linear');


            });



        });


    }

    /* australia  starts here */
    $('#li2').click(function () {
        console.log("australia clicked");

        $('#clickContinueAustralia').css('visibility', 'visible');
        resetCountryName();
        resetAll();
        resetColors();
        $('#li2').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('AUSTRALIA');
        $('#universityName').html('University of Melbourne and University of Queensland');
        $('#countryDescription').html('text about australia');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-21.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-20.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-19.png)');





        resetListThree();


        $('#clickContinueAustralia').click(function () {

            resetContinue();


            console.log('show Australia List');
            $('#australiaUl').css('visibility', 'visible');




            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');

            $('#column3Image').animate({

                    width: 250
                    , height: 560,

                }
                , 1000
                , 'linear');

            $('#countryName').animate({

                    opacity: 1
                    , top: 580
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');


        });


    });



    /* china  starts here */
    $('#li3').click(function () {
        console.log("china clicked");
        resetCountryName();
        resetAll();
        resetColors();
        $('#clickContinueChina').css('visibility', 'visible');
        $('#li3').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('CHINA');

        $('#universityName').html('University of Hong Kong');

        $('#countryDescription').html('text about china');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-07.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-08.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-09.png)');


        resetListThree();



        $('#clickContinueChina').click(function () {
            resetContinue();


            console.log('show China List');
            $('#chinaUl').css('visibility', 'visible');





            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');

            $('#column3Image').animate({

                    width: 250
                    , height: 790,

                }
                , 1000
                , 'linear');

            $('#countryName').animate({

                    opacity: 1
                    , top: 810
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');



        });




    });


    /* denmark starts here */

    $('#li4').click(function () {

        $('#clickContinueDenmark').css('visibility', 'visible');
        console.log("denmark clicked");
        resetCountryName();
        resetAll();
        resetColors();

        $('#li4').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('DENMARK');

        $('#universityName').html('University of Copenhagen');

        $('#countryDescription').html('text about denmark');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-15.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-14.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-13.png)');



        resetListThree();
        $('#clickContinueDenmark').click(function () {

            resetContinue();


            console.log('show Denmark List');
            $('#denmarkUl').css('visibility', 'visible');





            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');

            $('#column3Image').animate({

                    width: 250
                    , height: 760,

                }
                , 1000
                , 'linear');
            $('#countryName').animate({

                    opacity: 1
                    , top: 780
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');


        });


    });


    /*ireland starts here */
    $('#li5').click(function () {
        console.log("ireland clicked");

        $('#clickContinueIreland').css('visibility', 'visible');
        resetCountryName();
        resetAll();
        resetColors();

        $('#li5').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('IRELAND');

        $('#universityName').html('University of Cork');

        $('#countryDescription').html('text about ireland');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-16.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-17.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-18.png)');



        resetListThree();
        $('#clickContinueIreland').click(function () {

            resetContinue();


            console.log('show Ireland List');
            $('#irelandUl').css('visibility', 'visible');





            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');


            $('#column3Image').animate({

                    width: 250
                    , height: 760,

                }
                , 1000
                , 'linear');

            $('#countryName').animate({

                    opacity: 1
                    , top: 780
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');


        });


    });




    /* new zealand starts here */
    $('#li6').click(function () {
        $('#clickContinueNewZealand').css('visibility', 'visible');
        console.log("new zealand");
        resetCountryName();
        resetAll();
        resetColors();

        $('#li6').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('NEW ZEALAND');

        $('#universityName').html('Lincoln University and Massey University');

        $('#countryDescription').html('text about new zealand');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-25.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-26.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-27.png)');



        resetListThree();
        $('#clickContinueNewZealand').click(function () {

            resetContinue();


            console.log('show new zealand List');
            $('#newZealandUl').css('visibility', 'visible');





            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');


            $('#column3Image').animate({

                    width: 250
                    , height: 640,

                }
                , 1000
                , 'linear');

            $('#countryName').animate({

                    opacity: 1
                    , top: 660
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');



        });


    });


    /* scotland  starts here */
    $('#li7').click(function () {
        $('#clickContinueScotland').css('visibility', 'visible');
        console.log("scotland");
        resetCountryName();
        resetAll();
        resetColors();

        $('#li7').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('SCOTLAND');

        $('#universityName').html('University of Glawsgod and University of Edinburgh');

        $('#countryDescription').html('text about Scotland');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-01.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-02.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-03.png)');



        resetListThree();
        $('#clickContinueScotland').click(function () {

            resetContinue();


            console.log('show Scotland List');
            $('#scotlandUl').css('visibility', 'visible');




            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');

            $('#column3Image').animate({

                    width: 250
                    , height: 640,

                }
                , 1000
                , 'linear');

            $('#countryName').animate({

                    opacity: 1
                    , top: 660
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');

        });


    });



    /* south korea  starts here */

    $('#li8').click(function () {
        $('#clickContinueSouthKorea').css('visibility', 'visible');
        console.log("south Korea");
        resetCountryName();
        resetAll();
        resetColors();

        $('#li8').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('SOUTH KOREA');

        $('#universityName').html('Yonsei University');

        $('#countryDescription').html('text about korea');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-10.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-11.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-12.png)');



        resetListThree();
        $('#clickContinueSouthKorea').click(function () {

            resetContinue();


            console.log('show SouthKorea List');
            $('#southKoreaUl').css('visibility', 'visible');





            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');


            $('#column3Image').animate({

                    width: 250
                    , height: 810,

                }
                , 1000
                , 'linear');
            $('#countryName').animate({

                    opacity: 1
                    , top: 830
                    , width: 220
                    , paddingRight: 0
                    , paddingLeft: 30,

                }
                , 1000
                , 'linear');

        });


    });




    $('#li9').click(function () {
        $('#clickContinueFAQ').css('visibility', 'visible');
        console.log("faq");
        resetCountryName();
        resetAll();
        resetColors();

        $('#li9').css('backgroundColor', '#BA0C2F');

        $('#countryName').html('FAQ');

        $('#universityName').html('Frequently Asked Questions');

        $('#countryDescription').html('text about faq');

        $('#column1Image').css('backgroundImage', 'url(images/studyabroad-pic-04.png)');

        $('#column2Image').css('backgroundImage', 'url(images/studyabroad-pic-05.png)');

        $('#column3Image').css('backgroundImage', 'url(images/studyabroad-pic-06.png)');


        resetListThree();


        $('#clickContinueFAQ').click(function () {

            resetContinue();


            console.log('show FAQ List');
            $('#faqUl').css('visibility', 'visible');





            $('#countryDescription').css('visibility', 'hidden');
            $('#universityName').css('visibility', 'hidden');

            $('#column3Image').animate({

                    width: 250
                    , height: 800,

                }
                , 1000
                , 'linear');
            $('#countryName').animate({

                    opacity: 1
                    , top: 820
                    , paddingLeft: 30
                    , width: 220
                    , paddingRight: 0,

                }
                , 1000
                , 'linear');



        });


    });




    /*-------START LINKING ALL THE PAGES HERE--------*/


    $('#africa-2').click(function () {

        resetImage();
        resetColors_third();
        $('.africa1').css('visibility', 'visible');
        $('#africa-2').css('backgroundColor', '#BA0C2F');
        $('#africa-2').css('color', 'white');

    });


    $('#africa-3').click(function () {

        resetImage();
        resetColors_third();
        $('.africa3').css('visibility', 'visible');
        $('#africa-3').css('backgroundColor', '#BA0C2F');
        $('#africa-3').css('color', 'white');

    });



    $('#africa-4').click(function () {

        resetImage();
        resetColors_third();
        $('.africa2').css('visibility', 'visible');
        $('#africa-4').css('backgroundColor', '#BA0C2F');
        $('#africa-4').css('color', 'white');

    });



    $('#africa-5').click(function () {

        resetImage();
        resetColors_third();
        $('.africa4').css('visibility', 'visible');
        $('#africa-5').css('backgroundColor', '#BA0C2F');
        $('#africa-5').css('color', 'white');

    });



    /* australia starts here */


    $('#australia-2').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia1').css('visibility', 'visible');
        $('#australia-2').css('backgroundColor', '#BA0C2F');
        $('#australia-2').css('color', 'white');

    });


    $('#australia-3').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia3').css('visibility', 'visible');
        $('#australia-3').css('backgroundColor', '#BA0C2F');
        $('#australia-3').css('color', 'white');

    });


    $('#australia-4').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia2').css('visibility', 'visible');
        $('#australia-4').css('backgroundColor', '#BA0C2F');
        $('#australia-4').css('color', 'white');

    });



    $('#australia-6').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia4').css('visibility', 'visible');
        $('#australia-6').css('backgroundColor', '#BA0C2F');
        $('#australia-6').css('color', 'white');

    });




    $('#australia-7').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia6').css('visibility', 'visible');
        $('#australia-7').css('backgroundColor', '#BA0C2F');
        $('#australia-7').css('color', 'white');

    });

    $('#australia-8').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia5').css('visibility', 'visible');
        $('#australia-8').css('backgroundColor', '#BA0C2F');
        $('#australia-8').css('color', 'white');

    });


    $('#australia-9').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia7').css('visibility', 'visible');
        $('#australia-9').css('backgroundColor', '#BA0C2F');
        $('#australia-9').css('color', 'white');

    });


    $('#australia-11').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia8').css('visibility', 'visible');
        $('#australia-11').css('backgroundColor', '#BA0C2F');
        $('#australia-11').css('color', 'white');

    });




    $('#australia-12').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia10').css('visibility', 'visible');
        $('#australia-12').css('backgroundColor', '#BA0C2F');
        $('#australia-12').css('color', 'white');

    });



    $('#australia-13').click(function () {
        console.log('australia page clicked');
        resetImage();
        resetColors_third();
        $('.australia9').css('visibility', 'visible');
        $('#australia-13').css('backgroundColor', '#BA0C2F');
        $('#australia-13').css('color', 'white');

    });



    /*china starts here*/


    $('#china-2').click(function () {
        resetImage();
        resetColors_third();
        $('.china1').css('visibility', 'visible');
        $('#china-2').css('backgroundColor', '#BA0C2F');
        $('#china-2').css('color', 'white');

    });


    $('#china-3').click(function () {
        resetImage();
        resetColors_third();
        $('.china3').css('visibility', 'visible');
        $('#china-3').css('backgroundColor', '#BA0C2F');
        $('#china-3').css('color', 'white');

    });


    $('#china-4').click(function () {
        resetImage();
        resetColors_third();
        $('.china2').css('visibility', 'visible');
        $('#china-4').css('backgroundColor', '#BA0C2F');
        $('#china-4').css('color', 'white');

    });



    /* denmark starts here */

    $('#denmark-2').click(function () {
        resetImage();
        resetColors_third();
        $('.denmark1').css('visibility', 'visible');
        $('#denmark-2').css('backgroundColor', '#BA0C2F');
        $('#denmark2').css('color', 'white');

    });


    $('#denmark-3').click(function () {
        resetImage();
        resetColors_third();
        $('.denmark3').css('visibility', 'visible');
        $('#denmark-3').css('backgroundColor', '#BA0C2F');
        $('#denmark-3').css('color', 'white');

    });


    $('#denmark-4').click(function () {
        resetImage();
        resetColors_third();
        $('.denmark2').css('visibility', 'visible');
        $('#denmark-4').css('backgroundColor', '#BA0C2F');
        $('#denmark-4').css('color', 'white');

    });


    $('#denmark-5').click(function () {
        resetImage();
        resetColors_third();
        $('.denmark4').css('visibility', 'visible');
        $('#denmark-5').css('backgroundColor', '#BA0C2F');
        $('#denmark-5').css('color', 'white');

    });


    /* ireland starts here */


    $('#ireland-2').click(function () {
        resetImage();
        resetColors_third();
        $('.ireland1').css('visibility', 'visible');
        $('#ireland-2').css('backgroundColor', '#BA0C2F');
        $('#ireland-2').css('color', 'white');

    });

    $('#ireland-3').click(function () {
        resetImage();
        resetColors_third();
        $('.ireland3').css('visibility', 'visible');
        $('#ireland-3').css('backgroundColor', '#BA0C2F');
        $('#ireland-3').css('color', 'white');

    });

    $('#ireland-4').click(function () {
        resetImage();
        resetColors_third();
        $('.ireland2').css('visibility', 'visible');
        $('#ireland-4').css('backgroundColor', '#BA0C2F');
        $('#ireland-4').css('color', 'white');

    });



    $('#ireland-5').click(function () {
        resetImage();
        resetColors_third();
        $('.ireland4').css('visibility', 'visible');
        $('#ireland-5').css('backgroundColor', '#BA0C2F');
        $('#ireland-5').css('color', 'white');

    });


    /* new zealand starts here*/

    $('#new-2').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand1').css('visibility', 'visible');
        $('#new-2').css('backgroundColor', '#BA0C2F');
        $('#new-2').css('color', 'white');

    });



    $('#new-3').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand3').css('visibility', 'visible');
        $('#new-3').css('backgroundColor', '#BA0C2F');
        $('#new-3').css('color', 'white');

    });

    $('#new-4').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand2').css('visibility', 'visible');
        $('#new-4').css('backgroundColor', '#BA0C2F');
        $('#new-4').css('color', 'white');

    });

    $('#new-5').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand4').css('visibility', 'visible');
        $('#new-5').css('backgroundColor', '#BA0C2F');
        $('#new-5').css('color', 'white');

    });


    $('#new-7').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand5').css('visibility', 'visible');
        $('#new-7').css('backgroundColor', '#BA0C2F');
        $('#new-7').css('color', 'white');

    });



    $('#new-8').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand7').css('visibility', 'visible');
        $('#new-8').css('backgroundColor', '#BA0C2F');
        $('#new-8').css('color', 'white');

    });



    $('#new-9').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand6').css('visibility', 'visible');
        $('#new-9').css('backgroundColor', '#BA0C2F');
        $('#new-9').css('color', 'white');

    });



    $('#new-10').click(function () {
        resetImage();
        resetColors_third();
        $('.newzealand8').css('visibility', 'visible');
        $('#new-10').css('backgroundColor', '#BA0C2F');
        $('#new-10').css('color', 'white');

    });



    /*scotland starts here*/


    $('#scotland-2').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland1').css('visibility', 'visible');
        $('#scotland-2').css('backgroundColor', '#BA0C2F');
        $('#scotland-2').css('color', 'white');

    });

    $('#scotland-3').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland3').css('visibility', 'visible');
        $('#scotland-3').css('backgroundColor', '#BA0C2F');
        $('#scotland-3').css('color', 'white');

    });


    $('#scotland-4').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland2').css('visibility', 'visible');
        $('#scotland-4').css('backgroundColor', '#BA0C2F');
        $('#scotland-4').css('color', 'white');

    });

    $('#scotland-5').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland4').css('visibility', 'visible');
        $('#scotland-5').css('backgroundColor', '#BA0C2F');
        $('#scotland-5').css('color', 'white');

    });


    $('#scotland-7').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland5').css('visibility', 'visible');
        $('#scotland-7').css('backgroundColor', '#BA0C2F');
        $('#scotland-7').css('color', 'white');

    });

    $('#scotland-8').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland7').css('visibility', 'visible');
        $('#scotland-8').css('backgroundColor', '#BA0C2F');
        $('#scotland-8').css('color', 'white');

    });

    $('#scotland-9').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland6').css('visibility', 'visible');
        $('#scotland-9').css('backgroundColor', '#BA0C2F');
        $('#scotland-9').css('color', 'white');

    });



    $('#scotland-10').click(function () {
        resetImage();
        resetColors_third();
        $('.scotland8').css('visibility', 'visible');
        $('#scotland-10').css('backgroundColor', '#BA0C2F');
        $('#scotland-10').css('color', 'white');

    });


    /*south korea starts here*/

    $('#south-2').click(function () {
        resetImage();
        resetColors_third();
        $('.southkorea1').css('visibility', 'visible');
        $('#south-2').css('backgroundColor', '#BA0C2F');
        $('#south-2').css('color', 'white');

    });


    $('#south-3').click(function () {
        resetImage();
        resetColors_third();
        $('.southkorea2').css('visibility', 'visible');
        $('#south-3').css('backgroundColor', '#BA0C2F');
        $('#south-3').css('color', 'white');

    });



    /* faq starts here */

    $('#faq-2').click(function () {
        resetImage();
        resetColors_third();
        $('.faq1').css('visibility', 'visible');
        $('#faq-2').css('backgroundColor', '#BA0C2F');
        $('#faq-2').css('color', 'white');

    });



    $('#faq-3').click(function () {
        resetImage();
        resetColors_third();
        $('.faq2').css('visibility', 'visible');
        $('#faq-3').css('backgroundColor', '#BA0C2F');
        $('#faq-3').css('color', 'white');

    });




    /*first menu here*/
    $('#uceapButton').click(function () {
        uceapReset();


        $('#uceapButton').css('backgroundColor', '#BA0C2F');
        $('#summerButton').css('backgroundColor', 'grey');

        $('#otherButton').css('backgroundColor', 'grey');

    });


    $('#summerButton').click(function () {
        summerReset();





        $('#uceapButton').css('backgroundColor', 'grey');
        $('#summerButton').css('backgroundColor', '#BA0C2F');

        $('#otherButton').css('backgroundColor', 'grey');


        $('#column2Image, #column3Image').animate({

                width: 250
                , height: 810,

            }
            , 1000
            , 'linear');


    });





    $('#otherButton').click(function () {
        otherReset();

        $('#column2Image, #column3Image').animate({

                width: 250
                , height: 810,

            }
            , 1000
            , 'linear');



        $('#uceapButton').css('backgroundColor', 'grey');
        $('#summerButton').css('backgroundColor', 'grey');

        $('#otherButton').css('backgroundColor', '#BA0C2F');

    });
    
    
    
    
    
    
    $('#summer-li1').click(function(){
     
        resetImage(); 
        resetColors_second();
           $('.summer1').css('visibility', 'visible');
        $('#summer-li1').css('backgroundColor','#BA0C2F');
        
           $('#summer-li1').css('color','white');
        
    });

    
        $('#summer-li2').click(function(){
     
        resetImage();
            resetColors_second();
           $('.summer2').css('visibility', 'visible');
        $('#summer-li2').css('backgroundColor','#BA0C2F');
        
           $('#summer-li2').css('color','white');
        
    });

        $('#summer-li3').click(function(){
     
        resetImage();
            resetColors_second();
           $('.summer3').css('visibility', 'visible');
        $('#summer-li3').css('backgroundColor','#BA0C2F');
        
           $('#summer-li3').css('color','white');
        
    });

    
        $('#summer-li4').click(function(){
     
        resetImage();
            resetColors_second();
           $('.summer4').css('visibility', 'visible');
        $('#summer-li4').css('backgroundColor','#BA0C2F');
        
           $('#summer-li4').css('color','white');
        
    });

    
    
    

    /* other here */
    
    
    
    
        
        $('#other-li1').click(function(){
     
        resetImage();
            resetColors_second();
           $('.other1').css('visibility', 'visible');
        $('#other-li1').css('backgroundColor','#BA0C2F');
        
           $('#other-li1').css('color','white');
        
    });

      
        $('#other-li2').click(function(){
     
        resetImage();
            resetColors_second();
           $('.other2').css('visibility', 'visible');
        $('#other-li2').css('backgroundColor','#BA0C2F');
        
           $('#other-li2').css('color','white');
        
    });

      
        $('#other-li3').click(function(){
     
        resetImage();
            resetColors_second();
           $('.other3').css('visibility', 'visible');
        $('#other-li3').css('backgroundColor','#BA0C2F');
        
           $('#other-li3').css('color','white');
        
    });

    
      
        $('#other-li4').click(function(){
     
        resetImage();
            resetColors_second();
           $('.other4').css('visibility', 'visible');
        $('#other-li4').css('backgroundColor','#BA0C2F');
        
           $('#other-li4').css('color','white');
        
    });

    
    /* reset functions here*/




    function resetListThree() {
        console.log("resetting list three");
        $('#column3 ul').css('visibility', 'hidden');


    }

    function resetColors() {
        console.log("resetting colors");
        $('#secondaryUl li').css('backgroundColor', 'grey');

    }
    
    function resetColors_second(){
         $('#summerUl li, #otherUl li').css('backgroundColor', 'white');
         $('#summerUl li, #otherUl li').css('color', 'black');
        

    }


    function resetColors_third() {
        console.log("resetting colors");
        $('#column3 li').css('backgroundColor', 'white');
        $('#column3 li').css('color', 'black');

    }

    function resetImage() {
        console.log("resetting image");
        $('#column4 embed').css('visibility', 'hidden');
    }



    function resetCountryName() {
        $('#countryName').animate({

                top: 80
                , paddingLeft: 30
                , paddingRight: 250
            , }
            , 1000
            , 'linear');

    }

    function resetAll() {
        $('#column4 embed').css('visibility', 'hidden');
        $('#countryDescription').css('visibility', 'visible');
        $('#universityName').css('visibility', 'visible');
        $('#column3Image').css('visibility', 'visible');

        console.log('resetting all');
        $('#column3Image').animate({

                width: 1080
                , height: 980,

            }
            , 1000
            , 'linear');


    }

    function resetContinue() {
        $('#column6 div').css('visibility', 'hidden');

    }

    function uceapReset() {
          resetImage();
        africaBase();
        $('#column2Image').animate({

                width: 250
                , height: 320,

            }
            , 1000
            , 'linear');


        $('#column3Image').animate({

                width: 1080
                , height: 980,

            }
            , 1000
            , 'linear');
        
      resetCountryName();

        $('#clickContinueAfrica').css('visibility', 'visible');
        $('#countryName').css('visibility', 'visible');
        $('#universityName').css('visibility', 'visible');
        $('#countryDescription').css('visibility', 'visible');


        $('#summerTitle').css('visibility', 'hidden');
        $('#otherTitle').css('visibility', 'hidden');


        $('#summerUl').css('visibility', 'hidden');

        $('#secondaryUl').css('visibility', 'visible');
        $('#otherUl').css('visibility', 'hidden');
    }

    function summerReset() {
        resetContinue();
        resetListThree();
  resetImage();

        $('#countryName').css('visibility', 'hidden');
        $('#universityName').css('visibility', 'hidden');
        $('#countryDescription').css('visibility', 'hidden');

        $('#summerTitle').css('visibility', 'visible');


        $('#otherTitle').css('visibility', 'hidden');


        $('#summerUl').css('visibility', 'visible');

        $('#secondaryUl').css('visibility', 'hidden');
        $('#otherUl').css('visibility', 'hidden');
    }

    function otherReset() {

        resetContinue();
        resetListThree();
  resetImage();
        $('#countryName').css('visibility', 'hidden');
        $('#universityName').css('visibility', 'hidden');
        $('#countryDescription').css('visibility', 'hidden');


        $('#otherTitle').css('visibility', 'visible');
        $('#summerTitle').css('visibility', 'hidden');

        $('#summerUl').css('visibility', 'hidden');

        $('#secondaryUl').css('visibility', 'hidden');
        $('#otherUl').css('visibility', 'visible');
    }
    //close jQuery
});