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

.controller('AlbaneCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
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

.controller('PhytodessCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
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

.controller('FranchiseCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
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
  }, {
    img: "img/media/editorial/19.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/20.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/21.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/22.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/23.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/24.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/25.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/26.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/27.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/28.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/29.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/30.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/31.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/32.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/33.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/34.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/35.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/36.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/37.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/38.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/39.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/40.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/41.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/42.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/43.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/44.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/45.jpg",
    video: "",
    // icon: "fa-play-circle-o"
  }, {
    img: "img/media/editorial/46.jpg",
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
  }, {
    img: "img/media/HairMakeUp/19.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/20.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/21.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/22.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/23.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/24.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/25.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/26.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/27.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/28.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/29.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/30.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/31.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/32.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/33.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/34.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/35.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/36.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/36.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/37.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/38.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/39.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/40.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/41.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/42.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/43.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/44.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/45.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/46.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/47.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/48.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/49.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/50.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/51.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/52.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/53.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/54.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/55.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/56.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/57.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/58.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/59.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/60.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/61.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/62.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/63.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/64.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/65.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/66.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/67.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/68.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/69.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/70.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/71.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/72.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/73.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/74.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/75.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/76.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/77.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/78.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/79.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/80.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/81.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/81.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/82.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/83.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/84.jpg",
    video: "",
  }, {
    img: "img/media/HairMakeUp/85.jpg",
    video: "",
  }, {
      img: "img/media/HairMakeUp/86.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/87.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/88.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/89.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/90.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/91.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/92.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/93.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/94.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/95.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/96.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/97.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/98.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/99.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/100.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/101.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/102.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/103.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/104.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/105.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/106.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/107.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/108.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/109.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/110.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/111.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/112.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/113.jpg",
      video: "",
    }
    , {
      img: "img/media/HairMakeUp/114.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/115.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/116.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/117.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/118.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/119.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/120.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/121.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/122.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/123.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/124.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/125.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/126.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/127.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/128.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/129.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/130.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/131.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/132.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/132.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/133.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/134.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/135.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/136.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/137.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/138.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/139.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/140.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/141.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/142.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/143.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/144.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/145.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/146.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/147.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/148.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/149.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/150.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/151.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/152.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/153.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/154.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/155.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/156.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/157.jpg",
      video: "",
    }
    , {
      img: "img/media/HairMakeUp/158.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/159.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/160.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/161.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/162.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/163.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/164.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/165.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/166.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/167.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/168.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/169.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/170.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/171.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/172.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/173.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/174.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/175.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/176.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/177.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/178.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/179.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/180.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/181.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/182.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/183.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/184.jpg",
      video: "",
    }
    , {
      img: "img/media/HairMakeUp/185.jpg",
      video: "",
    }, {
      img: "img/media/HairMakeUp/186.jpg",
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
