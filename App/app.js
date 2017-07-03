var app = angular.module("MyApp", []);
app.controller("myFunc", myFunc);

function myFunc($scope){
    var date = new Date();
    console.log("Func Called");
    $scope.currentTime = date.toTimeString();
    
    $scope.Update = function(){
        console.log("Button clicked");
        if($scope.username)
            console.log($scope.username);
    }
    
}
