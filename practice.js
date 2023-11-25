function main() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => display(data));
}

function display(users) {
  const parent = document.getElementById("main-div");
  for (let user of users) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("addStyle");
    commentDiv.innerHTML = `
    <h1>name:${user.id == 1 ? "yess" : "nooo"}</h1>
    <h2>name:${user.name}</h2>
    <h3>email:${user.email}</h3>
    <h4>body:${user.body}</h4>
    `;
    parent.appendChild(commentDiv);
  }
}

main();


