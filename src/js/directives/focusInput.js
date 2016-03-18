angular
    .module('app')
    .directive('focusInput', function () {
      return {
        link: function (scope, element, attrs) {
          element[0].focus();
        }
      };
    });