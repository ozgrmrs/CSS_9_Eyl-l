// DOM Accessing
let firstNameById = window.document.getElementById("first_name");
window.console.log(firstNameById);
let firstNameByClass = document.getElementsByClassName("input--style-4")[0];
console.log(firstNameByClass);
let firstNameByName = document.getElementsByName("first_name")[0];
console.log(firstNameByName);
let firstNameByTagName = document.getElementsByTagName("input")[0];
console.log(firstNameByTagName);
let firstNameByQuerySelectorId = document.querySelector("#first_name");
console.log(firstNameByQuerySelectorId);
let firstNameByQuerySelectorClass = document.querySelector(".input--style-4");
console.log(firstNameByQuerySelectorClass);
let firstNameByQuerySelectorAllClass = document.querySelectorAll(".input--style-4")[0];
console.log(firstNameByQuerySelectorAllClass);