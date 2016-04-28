$(document).ready(function() {

            //
            //Disciplines Animations
            ////
            ///
            
            //SAsign elements
            var $disFiguresContainer = $('.figure-services');
            var $firstFigure = $('.figure-services:nth-child(1) svg');
            var $secondFigure = $('.figure-services:nth-child(2) svg');
            var $thirdFigure = $('.figure-services:nth-child(3) svg');


            $('#designButton').on('click', function() {
                $disFiguresContainer.css({
                    transform: 'translate3d(0, 0, 0)'
                });
                console.log('clicked');
            });
            $('#techButton').on('click', function() {
                $disFiguresContainer.css({
                    transform: 'translate3d(-190%, 0, 0)'
                });
                console.log('clicked');
            });
            $('#strategyButton').on('click', function() {
                $disFiguresContainer.css({
                    transform: 'translate3d(-350%, 0, 0)'
                });
                console.log('clicked');
            });
            



            //Assign basic elements
            var $body = $('body');
            var $circleFocus = $('#circleFocus');
            //Hide Animated Circle at start
            $circleFocus.hide();
            //Fullpage Pluging Initialization
            $('#fullpage').fullpage({
                verticalCentered: false,
                easingcss3: 'cubic-bezier(0.55,0,0.1,1)',
                normalScrollElements: '.main-nav',
                //Function to trigger animations
                onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);
                    console.log(index);
                    console.log(nextIndex);
                    console.log(direction);
                    //Section Properties
                    var sections = [
                        {
                            sectionIndex: 1,
                            backgroundColor: '#1e48f0',
                            borderColor: '#4768f1'
                        },
                        {
                            sectionIndex: 2,
                            backgroundColor: '#ffc614',
                            borderColor: '#ffd143'
                        },
                        {
                            sectionIndex: 3,
                            backgroundColor: '#503cfe',
                            borderColor: '#422dfc'
                        },
                        {
                            sectionIndex: 4,
                            backgroundColor: '#ff415a',
                            borderColor: '#ff2b47'
                        }, 
                        {
                            sectionIndex: 5,
                            backgroundColor: '#fbfcff',
                        },
                        {
                            sectionIndex: 6,
                            backgroundColor: '#374ded',
                        },
                        {
                            sectionIndex: 7,
                            backgroundColor: '#fff',
                        },
                        {
                            sectionIndex: 8,
                            backgroundColor: '#fbfcff',
                        }
                    ];
                    //After leaving first section (Cover), show circle
                    $circleFocus.show();
                    //Remove animation class everytime we leave section,  so the animation can be triggered next
                    var cleanAnimation = function() {
                        $circleFocus.removeClass('circle-animation-scaled');
                    };
                    //Add css properties to change section styles
                    var animateCircle = function() {
                        //Background color
                        $body.css({'background-color': sections[section].backgroundColor});
                        //Add class again to add animation scaling to circle
                        $circleFocus.addClass('circle-animation-scaled');
                        //Change circle color
                        $circleFocus.css({
                            'border-color': sections[section].borderColor
                        });
                    };
                    //Listen to end of animation, so we can remove animation class
                    $circleFocus[0].addEventListener('animationend', cleanAnimation, false);

                    //Match section to properties
                    for (var section in sections) {

                        if (nextIndex === sections[section].sectionIndex) {

                            //Hide circle going back to start or last section
                            if (nextIndex === 1 || nextIndex > 4) { $circleFocus.hide(); }

                            animateCircle();

                            
                        }
                    }
                }

            }); //Fullpage Initialization ends here

            // Resizing Containers
            initialize();
             
            function initialize() {
                // Register an event listener to
                // call the resizeContainer() function each time 
                // the window is resized.
                window.addEventListener('resize', resizeContainer, false);

                //resize for the first time
                resizeContainer();

            }

            function resizeContainer() {
                // if (window.innerHeight > 500) {
                    $('.container').css({'height': window.innerHeight - 5 + 'px'});
                // }
                
            }
        });
