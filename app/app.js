"use strict";





var app = angular.module("TodoApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('items/list', {
        templateUrl: 'partials/item-list.html',
        controller: 'itemListCtrl'
    })
    .when('/items/new', {
        templateUrl: 'partials/item-form.html',
        controller: 'itemNewCtrl'
    })
    .when('/items/details', {
        templateUrl: 'partials/item-details.html',
        controller: 'itemViewCtrl'
    })
    .otherwise('/items/list');
    })
};

