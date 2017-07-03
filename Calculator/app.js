var app = angular.module("MyApp", []);
app.controller("main", main);

function main(){
    this.opr = "";
    this.ans = "";
    
    console.log("main function");
    this.plus = function(){
        console.log("button clicked");
        this.opr = "+";
    }
    this.minus = function(){
        this.opr = "-";
    }
    this.mul = function(){
        this.opr = "*";
    }
    this.divide = function(){
        this.opr = "/";
    }
    
    this.equals = function(){
        if(this.opr == "+")
            this.ans = this.num1 + this.num2;
        else if(this.opr == "-")
            this.ans = this.num1 - this.num2;
        else if(this.opr == "*")
            this.ans = this.num1 * this.num2;
        else if(this.opr == "/")
            this.ans = this.num1 / this.num2;
    }
    
}




