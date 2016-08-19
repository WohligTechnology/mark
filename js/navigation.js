// var adminurl = "http://192.168.1.109/markbackend/index.php/json/";
// var imgurl = "http://192.168.1.109/markbackend/uploads/";
var adminurl = "http://wohlig.co.in/markbackend/index.php/json/";
var imgurl = "http://wohlig.co.in/markbackend/uploads/";
// var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])


.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Overview",
    classis: "active",
    anchor: "overview",
    pagename: "overview",
    subnav: []
  },{
    name: "Brands",
    classis: "active",
    anchor: "brands",
    pagename: "brands",
    subnav: []
  },{
    name: "Media Corner",
    classis: "active",
    anchor: "media-corner",
    pagename: "media",
    subnav: []
  },{
    name: "Careers",
    classis: "active",
    anchor: "careers",
    pagename: "careers",
    subnav: []
  },{
    name: "Contact Us",
    classis: "active",
    anchor: "contact",
    pagename: "contact",
    subnav: []
  },{
    name: "Franchise",
    classis: "active",
    anchor: "franchise",
    pagename: "media",
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


    // getBrands:function(id,callback){
    //   $http({
    //     url:adminurl+'getBrand',
    //     method:'GET',
    //     withCredentials:true
    //   }).success(callback);
    // }id
    getBrands: function(id, callback) {
     console.log(id);
     $http.get(adminurl + 'getBrand?id=' + id).success(callback);
   },
   getMedia: function(type, callback) {
    console.log(type);
    $http.get(adminurl + 'getMedia?type=' + type).success(callback);
  },


  contactSubmit: function(formData, callback) {
  // console.log('form data: ', formData);
  $http({
    url: adminurl + 'contactUs',
    method: 'POST',
    withCredentials: true,
    data: {
      "email": formData.email,
      "telephone": formData.telephone,
      "comment": formData.comment,
      "name": formData.name,
    }
  }).success(callback);
},
  contactSubmit:function(contactForm,callback)
  {
    $http({
      url: adminurl + 'contactSubmit',
      method: 'POST',
      withCredentials: true,
      data: contactForm
    }).success(callback);
  },
  getAllCareer: function(callback) {

   $http.get(adminurl + 'getAllCareer').success(callback);
 },

 franchiseSubmit:function(franchiseForm,callback)
 {
   $http({
     url: adminurl + 'franchiseSubmit',
     method: 'POST',
     withCredentials: true,
     data: franchiseForm
   }).success(callback);
 },

  };
});
