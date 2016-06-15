angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'duScroll'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, $document, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.section = {
        one: "views/section/section1.html",
        two: "views/section/section2.html",
        three: "views/section/section3.html",
        four: "views/section/section4.html",
        five: "views/section/section5.html"
    };

    $scope.oneAtATime = true;

    function makeAnimation(id) {
        if (_.isEmpty(id)) {
            id = "home";
        }
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 0, 1400);
    }

    $scope.$on('$viewContentLoaded', function(event) {
        setTimeout(function() {
            makeAnimation($stateParams.id);
        }, 1000);
    });


    $scope.changePage = function(id) {
        $scope.menutitle = NavigationService.makeactive(id);
        $state.transitionTo('home', {
            id: id
        }, {
            notify: false
        });
        makeAnimation(id);
        $location.replace();
    };

    $scope.$on('$viewContentLoaded', function() {
        $('body').addClass('fp-viewing-0');
        $(window).scroll(function() {
            var scroller = $(document).scrollTop();
            var height = $(window).height();
            if (height <= scroller) {
                $('body').removeClass('fp-viewing-0');
            } else {
                $('body').addClass('fp-viewing-0');
            }
        });
    });

})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";
    $scope.changePage = function(id) {
      console.log(id);
      $location.path("" + id);
    };
})

.controller('DessangeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("dessange");
    $scope.menutitle = NavigationService.makeactive("Dessange Paris");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";
    $scope.changePage = function(id) {
      console.log(id);
      $location.path("" + id);
    };
})

.controller('AlbaneCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("camille");
    $scope.menutitle = NavigationService.makeactive("Camille Albane Paris");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";
    $scope.changePage = function(id) {
      console.log(id);
      $location.path("" + id);
    };
})

.controller('PhytodessCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("phytodess");
    $scope.menutitle = NavigationService.makeactive("Phytodess Paris");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";
    $scope.changePage = function(id) {
      console.log(id);
      $location.path("" + id);
    };
})

.controller('FranchiseCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("franchise");
    $scope.menutitle = NavigationService.makeactive("Franchise");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";
    $scope.changePage = function(id) {
      console.log(id);
      $location.path("" + id);
    };
})

.controller('MediaCornerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("media-corner");
    $scope.menutitle = NavigationService.makeactive("Media Corner");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";
    $scope.changePage = function(id) {
      console.log(id);
      $location.path("" + id);
    };
    $scope.wallpaper = [{
        img: "img/media/1.jpg",
    }, {
        img: "img/media/2.jpg",
    }, {
        img: "img/media/3.jpg",
    }, {
        img: "img/media/4.jpg",
    }, {
        img: "img/media/5.jpg",
    }, {
        img: "img/media/6.jpg",
    }, {
        img: "img/media/7.jpg",
        icon: "fa-play-circle-o"
    }, {
        img: "img/media/8.jpg",
        icon: "fa-play-circle-o"
    }, {
        img: "img/media/9.jpg",
        icon: "fa-play-circle-o"
    }, {
        img: "img/media/1.jpg",
    }, {
        img: "img/media/2.jpg",
    }, {
        img: "img/media/3.jpg",
    }, {
        img: "img/media/4.jpg",
    }, {
        img: "img/media/5.jpg",
    }, {
        img: "img/media/6.jpg",
    }, {
        img: "img/media/7.jpg",
        icon: "fa-play-circle-o"
    }, {
        img: "img/media/8.jpg",
        icon: "fa-play-circle-o"
    }, {
        img: "img/media/9.jpg",
        icon: "fa-play-circle-o"
    }];
    $scope.wallpaper = _.chunk($scope.wallpaper, 9);
    for (var i = 0; i < $scope.wallpaper.length; i++) {
        $scope.wallpaper[i] = _.chunk($scope.wallpaper[i], 3);
    }
})

.controller('headerctrl', function($scope, TemplateService, $state) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    console.log($state.current.name);
    if ($state.current.name == "media-corner" || $state.current.name == "about" || $state.current.name == "albane" || $state.current.name == "dessange" || $state.current.name == "phytodess") {
        $scope.uiSref = true;
    } else {
        $scope.uiSref = false;
    }

})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
    };


})

;
