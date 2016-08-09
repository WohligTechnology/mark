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
    url: "/brands/dessange/:id",
    templateUrl: "views/template.html",
    controller: 'DessangeCtrl'
  })

  .state('albane', {
    url: "/brands/albane/:id",
    templateUrl: "views/template.html",
    controller: 'AlbaneCtrl'
  })

  .state('phytodess', {
    url: "/brands/phytodess/:id",
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
firstapp.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      var windowHeight = $(window).height();
      if (this.pageYOffset >= windowHeight) {
        // console.log(windowHeight);
        element.addClass('affix');
      } else {
        element.removeClass('affix');
      }
    });
  };
});

var markAni = true;
var markAni2 = true;
firstapp.directive('markanimation', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      // new ScrollMagic.Scene({
      //     triggerElement: ".markani2",
      //     duration: 400
      //   })
      //   .addTo(controller)
      //   // .addIndicators() // add indicators (requires plugin)
      //   .on("enter", function(e) {
      //     // console.log("shark and snail Enter");
      //     setTimeout(function() {
      //       markAni2 = true;
      //       console.log("done");
      //     }, 5000);
      //
      //     if (markAni2 == true) {
      //       $(".markani3").attr("src", "img/overview.gif");
      //       markAni2 = false;
      //     }
      //   })
      new ScrollMagic.Scene({
          triggerElement: ".markani4",
          duration: 550
        })
        .addTo(controller)
        // .addIndicators() // add indicators (requires plugin))
        .setClassToggle(".markani4", "fadein")
        .on("enter", function(e) {
          // console.log("Flying plane");
          setTimeout(function() {
            markAni = true;
            console.log("done23");
          }, 1000);

          if (markAni == true) {
            // $(".markani4").addClass("fadein")
            // $(".markani5").addClass("fadein");
            markAni = false;
          }
        })
    }
  };
});

firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});

firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = "";
        if (width && width != "") {
            other += "&width=" + width;
        }
        if (height && height != "") {
            other += "&height=" + height;
        }
        if (style && style != "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return uploadurl + input + other;

            } else {
                return input;
            }
        }
    };
});

// firstapp.filter('youtubethumb', function() {
//     return function(input, onlyid) {
//         if (input) {
//           console.log("input",input);
//             var videoid = input.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
//             if (input != null) {
//                 if (onlyid == false) {
//                     return "http://img.youtube.com/vi/" + videoid[1] + "/hqdefault.jpg";
//                 } else if (onlyid == true) {
//                     return videoid[1];
//                 }
//             } else {
//                 return input;
//             }
//         } else {
//             return input;
//         }
//     };
// });


firstapp.filter('youtubethumb', function() {
    return function(input, onlyid) {
        if (input) {
          console.log(input);
            var videoid = input.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            console.log(videoid);
            if (videoid != null) {
              console.log('tgyuhj',videoid);
                if (onlyid == false) {
                    return "http://img.youtube.com/vi/" + videoid[1] + "/hqdefault.jpg";
                } else if (onlyid == true) {
                    return videoid[1];
                }
            } else {
                return input;
                console.log('1 else',input);
            }
        } else {
            return input;
            console.log('2 else',input);
        }
    };
});
