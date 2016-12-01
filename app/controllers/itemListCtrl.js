"use strict";

app.controller("itemListCtrl", function($scope, itemStorage) {

    itemStorage.getItemList()
        .then((itemArray) => {

            $scope.items = itemArray;
            // digest within Angular to update all of the bindings
            $scope.$apply();
        });

});