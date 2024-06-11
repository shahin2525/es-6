// class Doctors2 {
//   constructor(name, dises, post) {
//     (this.name = name), (this.dises = dises);
//     this.post = post;
//   }
//   consultant(rog) {
//     console.log(`rog vesi ${rog}`);
//   }
// }

// const details = new Doctors2();
// const details1 = new Doctors2("sakib", "brain", "rong");
// const details2 = new Doctors2("tamim", "eyes", "pak");
// console.log(details1);

class Vehicle {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }
}

class Bus extends Vehicle {
  constructor(name, price, seat, route) {
    super(name, price);
    this.seat = seat;
    this.route = route;
  }
  move(day) {
    console.log(`dhaka to kolkata ${day}`);
  }
}
class Truck extends Vehicle {
  constructor(name, price, rent, type) {
    super(name, price);
    this.rent = rent;
    this.type = type;
  }
  load() {
    console.log("it can load heavy");
  }
}

const bus = new Bus("hanif", 5000, 50, "m to n");
