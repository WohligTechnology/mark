// JavaScript Document
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

        .state('homeid', {
          url: "/:id",
          templateUrl: "views/template-home.html",
          controller: 'HomeCtrl'
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
        controller: 'AboutCtrl'

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

firstapp.directive('fancyboxBox', function($document) {
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
            $(element).css({"min-height": height+'px'});
        }
    };
});


firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
