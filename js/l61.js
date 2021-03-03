/*
The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact. This model is useful for scenarios where there is a need to manage complex conditions in which every object is aware of any state change in any other object in the group.

example of Mediator is that of a control tower on an airport coordinating arrivals and departures of airplanes.

https://www.dofactory.com/javascript/design-patterns/mediator
*/

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {};

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //single user message
        to.receive(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};
const Brad = new User("Brad");
const Jeff = new User("Jeff");
const Sara = new User("Sara");

const chatroom = new Chatroom();
chatroom.register(Brad);
chatroom.register(Jeff);
chatroom.register(Sara);

Brad.send("hello jeff", Jeff);
Sara.send("hello Brad", Brad);
Jeff.send("hi all");
