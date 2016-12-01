"use strict";

app.factory("itemStorage", ($http, FBCreds) => {

    //getters and setters done inside a factory 

    let getItemList = () => {
        let items = [];

        return new Promise((resolve, reject) => {

            $http.get(`${FBCreds.URL}/items.json`)
                .success((itemObject) => {
                    let itemCollection = itemObject;
                    Object.keys(itemCollection).forEach(key) => (

                        itemCollection[key].id = key;
                        items.push(itemCollection[key]);
                    );
                    resolve(items);
                })
                .error((error) => {
                    reject(error);
                });
        });

    };

    let getSingleItem = (itemId) => {
        return new Promise((resolve, reject) => {
            $http.get(`${FBCreds.URL}/items/${itemId}.json`)
                .success((itemObject) => {
                    .error(itemObject);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    let postNewItem = (newTask) => {
        return new Promise((resolve, reject) => {
            $http.post(`${FBCreds.URL}/items.json`, angular.toJson(newTask))
                .success((obj) => {
                    resolve(obj);

                })
                .error((error) => {
                    reject(error);
                });
        });
        //items.push(newTask);

    };

    return {
        getItemList,
        postNewItem,
        getSingleItem
    };

});