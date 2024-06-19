function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  c();
}
setTimeout(() => {
  console.log("timeout");
}, 2000);
function c() {
  console.log("c");
}
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

a();
