angular.module("helloModule", [])
    .controller("myCtrl", ctrl);

function ctrl(){
   this.text = "I am from Hello Module"; 
    
}