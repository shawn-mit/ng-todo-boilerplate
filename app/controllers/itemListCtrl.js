"use strict" ; 

app.controller("itemListCtrl", function($scope, itemStorage){

$scope.items = itemStorage.getItemList();

});