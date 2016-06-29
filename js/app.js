// JavaScript Document
var ZoomValue = 1;
var HeightChange = 1;
var controller = new ScrollMagic.Controller();
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template-home.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'home',
      }
    })


  .state('contact', {
    url: "/contact",
    templateUrl: "views/template-home.html",
    controller: 'HomeCtrl',
    params: {
      'id': 'contact',
    }
  })

  .state('brands', {
    url: "/brands",
    templateUrl: "views/template-home.html",
    controller: 'HomeCtrl',
    params: {
      'id': 'brands',
    }
  })

  .state('overview', {
    url: "/overview",
    templateUrl: "views/template-home.html",
    controller: 'HomeCtrl',
    params: {
      'id': 'overview',
    }
  })

  .state('careers', {
    url: "/careers",
    templateUrl: "views/template-home.html",
    controller: 'HomeCtrl',
    params: {
      'id': 'careers',
    }
  })

  .state('about', {
    url: "/about",
    templateUrl: "views/template.html",
    controller: 'AboutCtrl',
    params: {
      'id': 'about',
    }

  })

  .state('dessange', {
    url: "/brands/dessange",
    templateUrl: "views/template.html",
    controller: 'DessangeCtrl'
  })

  .state('albane', {
    url: "/brands/albane",
    templateUrl: "views/template.html",
    controller: 'AlbaneCtrl'
  })

  .state('phytodess', {
    url: "/brands/phytodess",
    templateUrl: "views/template.html",
    controller: 'PhytodessCtrl'
  })

  .state('media-corner', {
    url: "/media-corner",
    templateUrl: "views/template.html",
    controller: 'MediaCornerCtrl'
  })

  .state('franchise', {
    url: "/franchise",
    templateUrl: "views/template.html",
    controller: 'FranchiseCtrl'
  })

  ;
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancybox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});
firstapp.directive('fuller', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var height = $(window).height();
      $(element).css({
        "min-height": height + 'px'
      });
    }
  };
});
firstapp.directive('ngScrollDuration', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var animation = {};
      var animationSceneFrom = eval("(" + attrs.ngScrollAnimationFrom + ")");
      var animationSceneTo = eval("(" + attrs.ngScrollAnimationTo + ")");
      var id = attrs.id;
      var pin = attrs.pin;
      var toggleClass = attrs.toggleClass;
      if (attrs.ngScrollTrigger) {
        animation.triggerElement = attrs.ngScrollTrigger;
      }
      animation.duration = attrs.ngScrollDuration * ZoomValue;
      animation.offset = attrs.ngScrollOffset * ZoomValue;
      // build tween
      var tween = TweenMax.fromTo($element, 1, animationSceneFrom, animationSceneTo);

      // build scene
      if (pin) {
        var scene = new ScrollMagic.Scene(animation)
          .setTween(tween)
          .setPin(pin, {
            pushFollowers: false
          })
          // .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
      } else {
        var scene = new ScrollMagic.Scene(animation)
          .setTween(tween)
          // .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
      }
    }
  };
});


var taxiAni = true;
firstapp.directive('animationfade', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      new ScrollMagic.Scene({
          triggerElement: ".animationfade",
        })
        .setClassToggle("#high1", "active")
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller)
        //.addIndicators() // add indicators (requires plugin)
        .on("enter", function(e) {
          console.log("Taxi Enter");
          setTimeout(function() {
            taxiAni = true;
          });
          if (taxiAni == true) {
            $(".taxiAnimation").attr("src", "img/gif/taxianimation.gif");
          }
          taxiAni = false;
        })
    }
  };
});


firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
