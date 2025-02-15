// Function that takes another function as a argumrnt in called high order function

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
