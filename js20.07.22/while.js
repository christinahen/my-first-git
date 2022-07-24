function whileExample() {
  let i = 0;
  while (i < 100) {
    console.log(i);
    i += 5;
  }
  console.log("after while");
}

function whileExample2() {
  let userInput = prompt("what is the password");
  console.log(userInput);
  while (userInput === "123456") {
    alert("you shall not pass!!");
    userInput = prompt("what is the password");
    console.log(userInput);
  }
  alert("open sesame");
}

function forExample() {
  for (let i = 100; i > 0; i -= 20) {
    console.log(i);
  }
}
console.log(20);

function printAllCharactersBetween(from, to) {
  for (let i = from.charCodeAt(0); i < to.charCodeAt(0); i += 1) {
    console.log(i, string.fromChardCode(i));
  }
}
function forExample2() {
  printAllCharactersBetween("A , D");
  printAllCharactersBetween("a , z");
  printAllCharactersBetween("0 , 9");
  printAllCharactersBetween("א , ת");
}
function forExample() {
  const obj = {
    a: 5,
    b: 6,
    c: 7,
    otherObject: {
      d: 5,
    },
  };

  for (const key in obj) {
    console.log(key);
  }
}
function forExample() {
  const obj = {
    a: 5,
    b: 6,
    c: 7,
    otherObject: {
      d: 5,
    },
  };
  const keys = Object.keys(obj);
  console.log(keys);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    console.log(i, key);
  }
}

function forExample2() {
  const arr = ["a", "b", "c", "d", "e"];
  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];
    console.log(i, value);
  }
}
function forOfExample() {
  const arr = ["a", "b", "c", "d", "e"];
  for (const value of arr) {
    console.log(value);
  }
}
