"use strict";


app.controller("itemViewCtrl", function($scope, itemStorage, $routeParams) {
    
    console.log("routeParams PFM", $routeParams.itemId);

    //$scope.selectedItem = ?

        itemStorage.getSingleItem($routeParams.itemId)
        .then((itemObject) => {

            $scope.selectedItem = itemObject;
            $scope.$apply();
        });

});
