var module = angular.module("myModule", []);

// //PROVIDER
// module.provider("myProvider", function() {
//   this.value = "MyValue";

//   this.setValue = function(newValue) {
//     this.value = newValue
//   };

//   this.$get = function() {
//     console.log("myProvider.$get called");
//     return this.value;
//   };
// });
// module.controller("myController", function (myProvider) {
//   console.log("myProvider: " + myProvider);
// });

// module.controller("myController2", function (myProvider) {
//   console.log("myProvider: " + myProvider);
// });

// module.config(function(myProviderProvider) {
//   myProviderProvider.setValue("NewValue");
// })


// OBJECT CONTSTRUCTOR WITH THE OBJECT FUNCTION
// function MyObject() {
//   this.getValue = function() {
//     return "My object value";
//   };
// }

// FACTORY
// module.factory("myProvider", function () {
//   console.log("factory function called");
//   // INLINE THE OBJECT FUNCTION
//   return new function () {
//     this.getValue = function () {
//       return "My object value";
//     };
//   };
// });

//SERVICE
// module.service("myProvider", function () {
//   console.log("service function called");
//   this.getValue = function () {
//     return "My object value";
//   };
// });

// module.controller("myController", function (myProvider) {
//   console.log("myProvider: " + myProvider.getValue());
// });

// module.controller("myController2", function (myProvider) {
//   console.log("myProvider: " + myProvider.getValue());
// });

// function Person(name) {
//   this.name = name;
// }

// module.factory("myProvider", function () {
//   console.log("factory function called");
//   // INLINE THE OBJECT FUNCTION
//   return new Person("John");
// });
// module.controller("myController", function (myProvider) {
//   console.log("myProvider: " + myProvider.name);
// });

// module.controller("myController2", function (myProvider) {
//   console.log("myProvider: " + myProvider.name);
// });


//VALUE IS A SPECIAL CASE OF FACTORY
// module.value("myProvider", "myValue");

// module.controller("myController", function (myProvider) {
//   console.log("myProvider: " + myProvider);
// });

// module.controller("myController2", function (myProvider) {
//   console.log("myProvider: " + myProvider);
// });

//CONSTANT ASSIGN 1, CAN ACCESS DURING THE CONFIGURATION
module.constant("myProvider", "myValue");

module.controller("myController", function (myProvider) {
  console.log("myProvider: " + myProvider);
});

module.controller("myController2", function (myProvider) {
  console.log("myProvider: " + myProvider);
});