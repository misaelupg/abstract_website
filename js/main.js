$( document ).ready(function() {

    
    //Listen to changes in the tiles's width
    window.addEventListener('resize', setTileHeight, false);

    //Set tile height equal to tile width
    function setTileHeight() {
        //Loop through each .tile to find width and set height
        $('.tile').each(function(index) {
            var height = $(this).css('width');
            $(this).css('height', height);
        });
        
    }

    //Setting height for the first time
    setTileHeight();

});