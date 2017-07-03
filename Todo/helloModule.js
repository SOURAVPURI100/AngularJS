angular.module("helloModule", [])
    .controller("myTodo", todo);

function todo(){
   this.list = ["my work", "my life"];
   this.editCheck = false;    
    
   this.delete = function(index){
       console.log("Button clicked");
       this.list.splice(index, 1);
   }
   
   this.add = function(){
       console.log(this.addedText);
       this.list.push(this.addedText);
   }
   
   this.edit = function(){
       this.editCheck = !this.editCheck;
   }
   
   this.done = function(){
       console.log(this.editCheck);
       this.editCheck = !this.editCheck;
       
   }
    
}