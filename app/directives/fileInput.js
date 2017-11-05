angular.module("IndiaEats").directive("fileInput", function() {
  return {
    require: "ngModel",
    link: function postLink(scope,elem,attrs,ngModel) {
      elem.on("change", function(e) {
        var file = elem[0].files[0];
        ngModel.$setViewValue(file);
      })
    }
  }
});