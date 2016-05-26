 $(document).ready(function() {

            setTimeout(animateIntro, 3000);
            function animateIntro() {
                $('.animated-intro').css({
                    'height': '50px'});
                $('#logoGif').css({
                    'transform': 'translate3d(0,-50%,0)',
                    'left': '4%',
                    'top': '50%',
                    'width': '100px'
                });
            }

            //Resizing Height
            window.addEventListener('resize', resizeContainer, false);


            function resizeContainer() {
                var windowHeight = window.innerHeight;
                $('.container').css({'height': windowHeight});
                $('.main-nav .nav-item:nth-child(2)').css({'opacity': '1'});
            }

            resizeContainer();

            //Scrolling Hijacking
            
        });