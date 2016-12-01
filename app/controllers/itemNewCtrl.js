"use strict";

app.controller("itemNewCtrl", function($scope) {

    $scope.newTask = {};

/*

    $scope.items = [{
        id: 0,
        task: "mow the lawn",
        isCompleted: false,
        dueDate: "12/5/17",
        assignedTo: "Greg",
        location: "Joe's house",
        urgency: "low",
        dependencies: "sunshine, clippers, hat, water, headphones"
    }, {
        id: 1,
        task: "grade quizzes",
        isCompleted: false,
        dueDate: "12/5/15",
        assignedTo: "Christina",
        location: "NSS",
        urgency: "high",
        dependencies: "wifi, tissues, vodka"
    }, {
        id: 2,
        task: "take a nap",
        isCompleted: false,
        dueDate: "5/21/16",
        assignedTo: "Joe",
        location: "Porch of lakefront cabin",
        urgency: "medium",
        dependencies: "hammock, silence"
    }];
    
    */

    $scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log("add a new item", $scope.newTask);
        itemStorage.postNewItem($scope.newTask);
        $scope.newTask = {};
    };

});
