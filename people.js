const EventEmitter = require("events");


class School extends EventEmitter {
  started = () => {
    console.log("Class started?");
    setTimeout(() => {
      this.emit("bellRing", "second period ended");
    }, 2000);
  };
}

module.exports = School;
