
// -- Get current route
angular.module('starter')
    .factory('routes', function() {
        return {
            currRoute: null,

            getRoute: function(menuItems){

                _.each(menuItems, function(item) {

                    switch(item.name.toLowerCase()) {

                        case 'inleiding':
                            _.extend(item, {route: 'home'});
                        break;

                        case 'tutorials':
                            _.extend(item, {route: 'tutorials'});
                        break;

                        case 'theorie':
                            _.extend(item, {route: 'theory'});
                        break;

                        case 'opdrachten':
                            _.extend(item, {route: 'assignments'});
                        break;

                        case 'test jezelf!':
                            _.extend(item, {route: 'test'});
                        break;

                        case 'links':
                            _.extend(item, {route: 'links'});
                        break;

                        case 'mijn foto\'s!':
                            _.extend(item, {route: 'photos'});
                        break;

                        default:
                            _.extend(item, {route: '/'});
                        break;
                    }


                });

            },
            getRouteName : function(name) {

                switch(name) {

                    case 'inleiding':
                        return 'home';
                        break;

                    case 'tutorials':
                        return 'tutorials';
                        break;

                    case 'theorie':
                        return 'theory';
                        break;

                    case 'opdrachten':
                        return 'assignments';
                        break;

                    case 'test jezelf!':
                        return 'test';
                        break;

                    case 'links':
                        return 'links';
                        break;

                    case 'mijn foto\'s!':
                        return 'photos';
                        break;

                    default:
                        return '/';
                        break;
                }

            }
        }
    });