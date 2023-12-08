// Path module
const path = require("path");
const myPath = "C:/Node JS - LWS/Raw Node JS/index.js";

/* console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath)); */

// OS module
const os = require("os");
/* console.log(os.platform());
console.log(os.cpus()); */

// fs module
const fs = require("fs");
fs.writeFileSync("myFile.txt", "Hello Programmers");

const data = fs.readFileSync("myFile.txt");
// console.log(data.toString());

/* fs.readFile("myFile.txt", (err, data) => {
    console.log(data.toString());
}) */

// Event modules

const School = require("./people");

// Use emitter.on, not EventEmitter.on

// Register a emitter for bell ring
/* 
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("bellRing", (period) => {
  console.log(`We are going home! because ${period}`);

  setTimeout(() => {
      emitter.emit("bellRing", "second period ended");
    }, 2000);
}); */

const school = new School();

school.on("bellRing", (period) => {
  console.log(`We are going home! because ${period}`);
});

school.started();

// Raise an event
// setTimeout(() => {
//   emitter.emit("bellRing", "second period ended");
// }, 2000);
