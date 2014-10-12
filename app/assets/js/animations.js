var toteBettingAnimations = angular.module('toteBettingAnimations', ['ngAnimate']);

toteBettingAnimations.animation('.slide', function() {
    var NgHideClassName = 'ng-hide';
    return {
        beforeAddClass: function(element, className, done) {
            if(className === NgHideClassName) {
                jQuery(element).slideUp(done);
            }
        },
        removeClass: function(element, className, done) {
            if(className === NgHideClassName) {
                jQuery(element).slideDown(done);
            }
        }
    }
});