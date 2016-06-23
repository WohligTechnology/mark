angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'duScroll'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, $document, $location) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  TemplateService.footer = "views/footer2.html";


  $scope.section = {
    one: "views/section/section1.html",
    two: "views/section/section2.html",
    three: "views/section/section3.html",
    four: "views/section/section4.html",
    five: "views/section/section5.html"
  };

  $scope.oneAtATime = true;

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

  // $scope.showSlider = 1;
  // $scope.slider = function(val) {
  //   if(val == 1) {
  //     $scope.showSlider = 1;
  //   }
  //   else if(val == 2) {
  //     $scope.showSlider = 2;
  //   }
  //   else if (val == 3) {
  //     $scope.showSlider =3 ;
  //   }
  //   else {
  //     $scope.showSlider = 1;
  //   }
  // }
  $scope.changePage = function(id) {
    console.log(id);
    $location.path("" + id);
  };
  $scope.editorails = [{
    img: "img/media/editorial/1.jpg",
    video: ""
  }, {
    img: "img/media/editorial/2.jpg",
    video: ""
  }, {
    img: "img/media/editorial/3.jpg",
    video: ""
  }, {
    img: "img/media/editorial/4.jpg",
    video: ""
  }, {
    img: "img/media/editorial/5.jpg",
    video: ""
  }, {
    img: "img/media/editorial/6.jpg",
    video: "",
  }, {
    img: "img/media/editorial/7.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/8.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/9.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/10.jpg",
    video: "",
  }, {
    img: "img/media/editorial/11.jpg",
    video: "",
  }, {
    img: "img/media/editorial/12.jpg",
    video: "",
  }, {
    img: "img/media/editorial/13.jpg",
    video: "",
  }, {
    img: "img/media/editorial/14.jpg",
    video: "",
  }, {
    img: "img/media/editorial/15.jpg",
    video: "",
  }, {
    img: "img/media/editorial/16.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/17.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/18.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }];
  $scope.hairmakeup = [{
    img: "img/media/HairMakeUp/1.jpg",
    video: ""
  }, {
    img: "img/media/HairMakeUp/2.jpg",
    video: ""
  }, {
    img: "img/media/HairMakeUp/3.jpg",
    video: ""
  }, {
    img: "img/media/HairMakeUp/4.jpg",
    video: ""
  }, {
    img: "img/media/HairMakeUp/5.jpg",
    video: ""
  }, {
    img: "img/media/HairMakeUp/6.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/7.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/HairMakeUp/8.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/HairMakeUp/9.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/HairMakeUp/10.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/11.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/12.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/13.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/14.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/15.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/16.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/17.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/18.jpg",
    video: "",
  }];
  $scope.editorails = _.chunk($scope.editorails, 9);
  for (var i = 0; i < $scope.editorails.length; i++) {
    $scope.editorails[i] = _.chunk($scope.editorails[i], 3);
  }
  $scope.hairmakeup = _.chunk($scope.hairmakeup, 9);
  for (var i = 0; i < $scope.hairmakeup.length; i++) {
    $scope.hairmakeup[i] = _.chunk($scope.hairmakeup[i], 3);
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


});
