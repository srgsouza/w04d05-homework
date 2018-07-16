

const car = {
  "color": "blue",
  "speed": 0,
  'type': 'sedan',
  accelerate(accel) {
    let oldSpeed = accel;
    this.speed += oldSpeed;
    console.log(`oldspeed is ${oldSpeed}. speed is ${this.speed}`);
    
  }

}

car.accelerate(10);
car.accelerate(-20);


module.exports.car;