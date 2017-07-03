var app = angular.module("MyApp", []);
app.controller("ctrl1", ctrl1);
app.controller("ctrl2", ctrl2);

function ctrl1(){
    this.value1 = "ctrl1";

}

function ctrl2($scope){
    this.value1 = "ctrl2";

}
