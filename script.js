let users = [
    { id: 1, name: "John", age: 18, profession: "developer" },
    { id: 2, name: "Jack", age: 20, profession: "developer" },
    { id: 3, name: "Karen", age: 19, profession: "admin" }
  ];
  
  function displayUsers() {
    let html = "";
    for (let i = 0; i < users.length; i++) {
      html += "<div>";
      html += "<p>ID: " + users[i].id + "</p>";
      html += "<p>Name: " + users[i].name + "</p>";
      html += "<p>Age: " + users[i].age + "</p>";
      html += "<p>Profession: " + users[i].profession + "</p>";
      html += "</div>";
    }
    document.getElementById("users").innerHTML = html;
  }
  
  function filterUsers() {
    let profession = document.getElementById("profession").value;
    if (profession === "") {
      alert("Please select a profession before clicking the button.");
      return;
    }
    let filteredUsers = users.filter(function(user) {
      return user.profession === profession;
    });
    users = filteredUsers;
    displayUsers();
  }
  
  function addUser() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let profession = document.getElementById("profession").value;
    let id = users.length + 1;
    let user = { id: id, name: name, age: age, profession: profession };
    users.push(user);
    displayUsers();
  }