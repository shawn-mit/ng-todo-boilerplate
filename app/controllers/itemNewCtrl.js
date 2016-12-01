"use strict";

app.controller("itemNewCtrl", function($scope) {
	$scope.title = "Add a new task";
	$scope.btnText = "Save new task";
    $scope.newTask = {

    	assignedTo: "",
    	dependicies: "",
    	dueDate: "",
    	location: "",
    	task: "",
    	urgency: "low",
    	isCompleted: false,
    	//uid : go get the user
    };


    $scope.addNewItem = function($location) {
        //$scope.newTask.isCompleted = false;
        //$scope.newTask.id = $scope.items.length;
        console.log("add a new item", $scope.newTask);
        itemStorage.postNewItem($scope.newTask)
        .then((response) => {
        	$location.url("/items/list");
        	$scope.$apply();
    });
        $scope.newTask = {};
    };    
});
