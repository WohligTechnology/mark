var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Overview",
    classis: "active",
    anchor: "overview",
    subnav: []
  },{
    name: "Brands",
    classis: "active",
    anchor: "brands",
    subnav: []
  },{
    name: "Media Corner",
    classis: "active",
    anchor: "media-corner",
    subnav: []
  },{
    name: "Careers",
    classis: "active",
    anchor: "careers",
    subnav: []
  },{
    name: "Contant Us",
    classis: "active",
    anchor: "contact-us",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
