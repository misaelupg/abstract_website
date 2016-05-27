/**
*  Module
*
* Description
*/
var app = angular.module('abstractWeb', ['ui.router']);

app.controller('homeController', ['$scope', 'contentFactory', function($scope, contentFactory){
    var home = this;

    initialize();

    //Set tile height equal to tile width
    function setTileHeight() {
        //Loop through each .tile to find width and set height
        $('.tile').each(function(index) {
            var height = $(this).css('width');
            $(this).css('height', height);
        });
    }

    //Set conainer height to windows inner height
    function setFullHeight() {
        $('.--fullscreen').css('height', window.innerHeight);
        $('#contact-aside').css('height', window.innerHeight);
    }

    //Register event listeners and set for the first time tile and 
    //container heights
    function initialize() {
        //Setting height for the first time
        setTileHeight();
        //Listen to changes in the tiles's width
        
        //Setting fullscreen container
        setFullHeight();

        window.addEventListener('resize', setTileHeight, false);
        window.addEventListener('resize', setFullHeight, false);
    }

    //Typing effect
    $(".typed").typed({
        stringsElement: $('#typedStrings'),
        typeSpeed: 300,
        loop: true,
        startDelay: 1500,
        backSpeed: 50,
        backDelay: 1500
    });


}]);

app.factory('contentFactory', function(){
    var data = {
        starProjects: 
        [
            {
                title: 'news',
                figureUrl: '',
                summary: ''
            },
            {
                title: 'pro-file',
                figureUrl: '',
                summary: ''
            },
            {
                title: 'mediterranean',
                figureUrl: '',
                summary: ''
            }
        ],

        posts: [],
        additionalProjects: []
    };

    return data;
});

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    });
});