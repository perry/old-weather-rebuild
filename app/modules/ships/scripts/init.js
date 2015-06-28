(function (angular) {
    'use strict';

    var module = angular.module('ships', [
        'ui.router',
        'zooAPI'
    ]);

    module.config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('ships-list', {
                    url: '/ships',
                    views: {
                        main: {
                            templateUrl: 'templates/ships/list.html',
                            controller: 'ShipsListCtrl'
                        },
                        'header-bottom': {
                            templateUrl: 'templates/ships/list-header.html'
                        }
                    }
                })
                .state('ships-detail', {
                    url: '/ships/:id',
                    views: {
                        main: {
                            templateUrl: 'templates/ships/detail.html',
                            controller: 'ShipsDetailCtrl'
                        },
                        'header-bottom': {
                            templateUrl: 'templates/ships/list-header.html'
                        }
                    }
                });
        }
    ]);

}(window.angular));
