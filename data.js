const dataUrl = "https://jsonplaceholder.typicode.com/users";

function loadUsers() {
  fetch(dataUrl)
    .then((res) => res.json())
    .then((data) => dataFunction(data));
}

function dataFunction(data) {
  console.log(data);
}
