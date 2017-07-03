var app = angular.module("contact", []);

app.controller("myContact", ctrl);
app.controller("header", header);
app.controller("footer", footer);

app.value("AppName", "This is a new Application");

app.value("funcValue", function(){
    console.log("Hi Value Function Called");
});

app.factory("factoryFunc", function(){
    
    return {name : "Rahul",
            age : 20};
    
    
})

function ctrl(){
    this.contact = [
        {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "romain",
        "last": "hoogmoed"
      },
      "location": {
        "street": "1861 jan pieterszoon coenstraat",
        "city": "maasdriel",
        "state": "zeeland",
        "postcode": 69217
      },
      "id": {
        "name": "BSN",
        "value": "04242023"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      }
    },
        
         {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "rahul",
        "last": "Ghandhi"
      },
      "location": {
        "street": "1862 coenstraat",
        "city": "maasd",
        "state": "england",
        "postcode": 69217
      },
      "id": {
        "name": "BSN",
        "value": "04242023"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      }
    },
        
    {
      "gender": "female",
      "name": {
        "title": "mr",
        "first": "ritima",
        "last": "Ghandhi"
      },
      "location": {
        "street": "8787 coenstraat",
        "city": "Taipei",
        "state": "Taiwan",
        "postcode": 69217
      },
      "id": {
        "name": "BSN",
        "value": "04242023"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      }
    }
        
    ];
    this.curContact = this.contact[0];
    this.click = function(index){
        this.curContact = this.contact[index];
    }
    
}

   function header(AppName, funcValue, factoryFunc){
        this.title = AppName;
        funcValue();
        console.log(factoryFunc.name);
    }
    
     function footer(AppName){
        this.title = AppName;
    }