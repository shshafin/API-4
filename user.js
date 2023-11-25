function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(users) {
  const ul = document.getElementById("main-ul");

  for (let user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

function loadUsers3() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayDatas(data));
}

function displayDatas(users) {
  const ul2 = document.getElementById("sec-ul");
  for (let user of users) {
    const h2 = document.createElement("h2");
    h2.innerText = user.email;
    ul2.appendChild(h2);
  }
}

// create
function createAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// patch
function patchAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// delete
function deleteAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}
