function data() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((users) => display(users));
}

function display(users) {
  const parent = document.getElementById("main-div");
  for (let user of users) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("styleClass");
    postDiv.innerHTML = `
    <h3>user id: ${user.userId}</h3>
    <h4>title: ${user.title}</h4>
    <h5>body: ${user.body}</h5>
    `;
    parent.appendChild(postDiv);
  }
}

data();
