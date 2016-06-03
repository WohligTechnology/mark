angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
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

    $scope.changePage = function(text) {
      console.log(text);
      var length = $(".fp-section").length;
      // if (typeof $.fn.fullpage.destroy == 'function') {
      //   $.fn.fullpage.destroy('all');
      // }
      if (length === 0) {
        $('.fullpage').fullpage();
      }
      $scope.homeval = text;
      switch (text) {
        case "contact":
          $.fn.fullpage.moveTo(5);
          break;
        case "careers":
          $.fn.fullpage.moveTo(4);
          break;
        case "brands":
          $.fn.fullpage.moveTo(3);
          break;
        case "overview":
          $.fn.fullpage.moveTo(2);
          break;
        case "home":
          $.fn.fullpage.moveTo(1);
          break;
        default:
          $.fn.fullpage.moveTo(1);
          break;
      }
    };
    $scope.$on('$viewContentLoaded', function() {
      $timeout(function() {
        $scope.changePage($stateParams.id);
      }, 1000);
    });

})

.controller('DessangeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("dessange");
  $scope.menutitle = NavigationService.makeactive("Dessange Paris");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('AlbaneCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("albane");
  $scope.menutitle = NavigationService.makeactive("Camille Albane Paris");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('PhytodessCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("phytodess");
  $scope.menutitle = NavigationService.makeactive("Phytodess Paris");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('MediaCornerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("media-corner");
  $scope.menutitle = NavigationService.makeactive("Media Corner");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
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
        //  $rootScope.$apply();
    };


})

;
