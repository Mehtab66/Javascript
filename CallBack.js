// Function that takes another function as a argument is called high order function
// Function which is passed as a argument is called callback function
function add(a, b, callback) {
  let result = a + b;
  callback(result);
}
//function for Showing result
function ShowResult(result) {
  console.log("Result is: " + result);
}

//
add(5, 5, ShowResult);

//You can even return a fuction from a function
function addition(a, b, callback) {
  let result = a + b;
  callback(result);
  return () => console.log("Result : " + result);
}

let ResultFunction = addition(5, 10, () => {});
ResultFunction();
