// Write your code here
// class User {
//   #username
//   #password
  
//   constructor(username, password, age) {
//     this.#username = username;
//     this.#password = password;
//     this.age = age;
//   }

//   getUsername() {
//     return this.#username;
//   }
// }

// const user1 = new User("troll", "password", 69);
// console.log(user1.getUsername());

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "ron",
  [password]: "420",
  age: 69,
}

console.log(user.username);