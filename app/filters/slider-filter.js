starter.filter('htmlize', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val.toString());
    };
});