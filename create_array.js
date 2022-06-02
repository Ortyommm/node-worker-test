const fs = require("fs");
const path = require("path");

function statusWrapper(fn) {
  console.log("starting...");
  fn();
  console.log("finished!");
}

function createRandomArray(length = 10000000) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.random());
  }
  fs.writeFileSync(
    path.join(__dirname, "random_array.txt"),
    JSON.stringify(arr)
  );
}

function createDescendingArray(length = 10000000) {
  const arr = [];
  for (let i = length; i > 0; i--) {
    arr.push(i);
  }
  fs.writeFileSync(
    path.join(__dirname, "descending_array.txt"),
    JSON.stringify(arr)
  );
}

function createAscendingArray(length = 10000000) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  fs.writeFileSync(
    path.join(__dirname, "ascending_array.txt"),
    JSON.stringify(arr)
  );
}

const args = process.argv.slice(2);

switch (args[0]) {
  case "random":
    statusWrapper(() => createRandomArray(+args[1]));
    break;
  case "desc":
    statusWrapper(() => createDescendingArray(+args[1]));
    break;
  case "asc":
    statusWrapper(() => createAscendingArray(+args[1]));
    break;
  default:
    throw new Error("No argument provided");
}
