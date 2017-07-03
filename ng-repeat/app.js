angular.module("ngRepeat", [])
.controller("repeatCtrl", ctrl);

function ctrl(){
    this.list = [{'name': "Rahul", 'age':20},
              {'name': "Rohit", 'age':24},
              {'name': "Sourav", 'age':23},
              {'name': "Mohit", 'age':25},
              {'name': "Anu", 'age':26}];
              
}
