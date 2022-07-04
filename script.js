"use strict";

// How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

//Solution: deep comparison Using recursive function
// To check if objects are declared within the objects
function isobject(checkObject) {
  return checkObject != null && typeof checkObject === "object";
}
// To compare objects
function comparison(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let keys of keys1) {
    var val1 = obj1[keys];
    var val2 = obj2[keys];
    var areObjects = isobject(val1) && isobject(val2);
    if (
      (areObjects && !comparison(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}
console.log(comparison(obj1, obj2));

// Displayed all flags in the browser, and print all countries names, regions, sub regions and populations
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
// function to display images
function display_image(src, width, height, alt) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  a.alt = alt;
  document.body.appendChild(a);
}

request.onload = function () {
  var studentData = JSON.parse(this.responseText);
  for (let country of studentData) {
    let countryName = country.name.common;
    let region = country.region;
    let subRegion = country.subregion;
    let population = country.population;
    let flag = country.flags.png;
    display_image(flag, 276, 110, "JavaScriptImage");
    console.log(flag);
    console.log(countryName);
    console.log(region);
    console.log(subRegion);
    console.log(population);
  }
};
