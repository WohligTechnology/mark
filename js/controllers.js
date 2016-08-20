angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'duScroll'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, $document, $location, $uibModal) {
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
    $('body').addClass('fp-viewing-3');
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
  $scope.formComplete = false;
  $scope.contactForm = {};


  $scope.submitForm = function(contactForm) {
    $scope.formComplete = true;
    NavigationService.contactSubmit($scope.contactForm, function(data) {
      console.log('  $scope.contactForm', $scope.contactForm);
    });
    $timeout(function() {
      $scope.formComplete = false;
    }, 2000);
    $scope.contactForm = {};
  };

  NavigationService.getAllCareer(function(data) {
    $scope.careers = data;
    console.log("  $scope.careers", $scope.careers);
  })

  $scope.openThank = function() {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/thank.html',
      backdropClass: 'backcolor'
    });
  }









})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $location) {
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

.controller('DessangeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
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
  $scope.showMe = false;
  $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
  };
  // $scope.kemps = [{
  //     img: "img/kemps/IMG_7953.jpg"
  // }, {
  //     img: "img/kemps/IMG_7954.jpg"
  // }, {
  //     img: "img/kemps/IMG_7962.jpg"
  // }, {
  //     img: "img/kemps/IMG_7967.jpg"
  // }, {
  //     img: "img/kemps/IMG_7970.jpg"
  // }, {
  //     img: "img/kemps/IMG_7976.jpg"
  // }, {
  //     img: "img/kemps/IMG_7977.jpg"
  // }, {
  //     img: "img/kemps/IMG_7982.jpg"
  // }, {
  //     img: "img/kemps/IMG_7985.jpg"
  // }, {
  //     img: "img/kemps/IMG_7987.jpg"
  // }, {
  //     img: "img/kemps/IMG_7991.jpg"
  // }, {
  //     img: "img/kemps/IMG_7996.jpg"
  // }, {
  //     img: "img/kemps/IMG_8000.jpg"
  // }, {
  //     img: "img/kemps/IMG_8001.jpg"
  // }, {
  //     img: "img/kemps/IMG_8004.jpg"
  // }, {
  //     img: "img/kemps/IMG_8009.jpg"
  // }, {
  //     img: "img/kemps/IMG_8011.jpg"
  // }, {
  //     img: "img/kemps/IMG_8017.jpg"
  // }, {
  //     img: "img/kemps/IMG_8077.jpg"
  // }, {
  //     img: "img/kemps/IMG_8085.jpg"
  // }, {
  //     img: "img/kemps/IMG_8086.jpg"
  // }, {
  //     img: "img/kemps/IMG_8089.jpg"
  // }, {
  //     img: "img/kemps/IMG_8109.jpg"
  // }, {
  //     img: "img/kemps/IMG_8114.jpg"
  // }, {
  //     img: "img/kemps/IMG_8131.jpg"
  // }, {
  //     img: "img/kemps/IMG_8132.jpg"
  // }];
  // $scope.parel = [{
  //     img: "img/dessange/experience.jpg"
  // }, {
  //     img: "img/dessange/experience.jpg"
  // }, {
  //     img: "img/dessange/experience.jpg"
  // }];
  // $scope.bandra = [{
  //     img: "img/bandra/_MG_9650c.jpg"
  // }, {
  //     img: "img/bandra/_MG_9685c.jpg"
  // }, {
  //     img: "img/bandra/Bandra (4).jpg"
  // }, {
  //     img: "img/bandra/bandra.jpg"
  // }, {
  //     img: "img/bandra/Dessange-3.jpg"
  // }, {
  //     img: "img/bandra/Dessange-6.jpg"
  // }, {
  //     img: "img/bandra/Dessange-7.jpg"
  // }, {
  //     img: "img/bandra/Dessange-8.jpg"
  // }, {
  //     img: "img/bandra/Dessange-9.jpg"
  // }, {
  //     img: "img/bandra/Dessange-16.jpg"
  // }, {
  //     img: "img/bandra/Dessange-22.jpg"
  // }, {
  //     img: "img/bandra/Dessange-27.jpg"
  // }, {
  //     img: "img/bandra/Dessange-28.jpg"
  // }, {
  //     img: "img/bandra/Dessange-29.jpg"
  // }, {
  //     img: "img/bandra/Dessange-30.jpg"
  // }, {
  //     img: "img/bandra/Dessange-33.jpg"
  // }, {
  //     img: "img/bandra/Dessange-38.jpg"
  // }, {
  //     img: "img/bandra/Dessange-40.jpg"
  // }, {
  //     img: "img/bandra/Dessange-42.jpg"
  // }, {
  //     img: "img/bandra/Dessange-46.jpg"
  // }];
  console.log('in me');

  NavigationService.getBrands($stateParams.id, function(data) {
    if (data) {
      $scope.Dessange = data;
      console.log("$scope.Dessangesdfg", $scope.Dessange);
    }

  });

})

.controller('AlbaneCtrl', function($scope, TemplateService, NavigationService, $timeout, $location, $stateParams) {
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
  NavigationService.getBrands($stateParams.id, function(data) {
    $scope.Albane = data;
    console.log("$scope.Albane", $scope.Albane);
  });
})

.controller('PhytodessCtrl', function($scope, TemplateService, NavigationService, $timeout, $location, $stateParams) {
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
  NavigationService.getBrands($stateParams.id, function(data) {
    $scope.Phytodess = data;
    console.log('$scope.Phytodess', $scope.Phytodess);
  });
})

.controller('FranchiseCtrl', function($scope, TemplateService, NavigationService, $timeout, $location, $uibModal) {
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
  $scope.formComplete = false;
  $scope.franchiseForm = {};
  $scope.franchiseForm.enquiryarr = [];
  $scope.nofranchise = false;
  $scope.submitFranchiseForm = function(franchiseForm) {
    $scope.nofranchise = false;

    if ($scope.franchiseForm) {
      $scope.franchiseForm.franchise = "";
      if ($scope.franchiseForm.enquiryarr.length > 0) {
        _.each($scope.franchiseForm.enquiryarr, function(n) {
          $scope.franchiseForm.franchise += n + ",";
        })
        $scope.franchiseForm.franchise = $scope.franchiseForm.franchise.substring(0, $scope.franchiseForm.franchise.length - 1);
        NavigationService.franchiseSubmit($scope.franchiseForm, function(data) {


          $scope.formComplete = true;
          $scope.openThank();
        });
        $timeout(function() {
          $scope.formComplete = false;
        }, 2000);
        $scope.franchiseForm = {};
        $scope.franchiseForm.enquiryarr = [];
      } else {
        $scope.nofranchise = true;
      }
    }



  }
  $scope.franchise = function(val) {
    var foundIndex = $scope.franchiseForm.enquiryarr.indexOf(val);
    if (foundIndex == -1) {
      $scope.franchiseForm.enquiryarr.push(val);
    } else {
      $scope.franchiseForm.enquiryarr.splice(foundIndex, 1);
    }
  };
  $scope.openThank = function() {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/franchisethank.html',
      backdropClass: "backcolor"
    });
  }


})

.controller('MediaCornerCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
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
  // $scope.editorails = [{
  //     img: "img/media/editorial/1.jpg",
  //     video: ""
  // }, {
  //     img: "img/media/editorial/2.jpg",
  //     video: ""
  // }, {
  //     img: "img/media/editorial/3.jpg",
  //     video: ""
  // }, {
  //     img: "img/media/editorial/4.jpg",
  //     video: ""
  // }, {
  //     img: "img/media/editorial/5.jpg",
  //     video: ""
  // }, {
  //     img: "img/media/editorial/6.jpg",
  //     video: "",
  // }, {
  //     img: "img/media/editorial/7.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/8.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/9.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/10.jpg",
  //     video: "",
  // }, {
  //     img: "img/media/editorial/11.jpg",
  //     video: "",
  // }, {
  //     img: "img/media/editorial/12.jpg",
  //     video: "",
  // }, {
  //     img: "img/media/editorial/13.jpg",
  //     video: "",
  // }, {
  //     img: "img/media/editorial/14.jpg",
  //     video: "",
  // }, {
  //     img: "img/media/editorial/15.jpg",
  //     video: "",
  // }, {
  //     img: "img/media/editorial/16.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/17.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/18.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/19.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/20.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/21.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/22.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/23.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/24.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/25.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/26.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/27.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/28.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/29.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/30.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/31.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/32.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/33.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/34.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/35.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/36.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/37.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/38.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/39.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/40.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/41.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/42.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/43.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/44.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/45.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }, {
  //     img: "img/media/editorial/46.jpg",
  //     video: "",
  //     // icon: "fa-play-circle-o"
  // }];

  NavigationService.getMedia(1, function(data) {
    $scope.hairmakeup = data;
    $scope.hairmakeup = _.chunk($scope.hairmakeup, 9);
    for (var i = 0; i < $scope.hairmakeup.length; i++) {
      $scope.hairmakeup[i] = _.chunk($scope.hairmakeup[i], 3);
    }
    console.log("$scope.hairmakeupasdf", $scope.hairmakeup);
  })

  NavigationService.getMedia(2, function(data) {
    $scope.editorails = data;
    $scope.editorails = _.chunk($scope.editorails, 9);
    for (var i = 0; i < $scope.editorails.length; i++) {
      $scope.editorails[i] = _.chunk($scope.editorails[i], 3);
    }
  })


  console.log("$scope.dsad", $scope.hairmakeup);
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
