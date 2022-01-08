//------minimum------//
const car = {
    maker: 'Germany', 
    model: 'Audi Q5', 
    year: 2020,
    speed: 111,
    tankVolume: 65,
    fuelConsumption: 6.3,
    driver: true
}
//1
for (let key in car) {
    console.log(`Kлюч: ${key}, Значення: ${car[key]}`);
}

//2
driver = {
    name: 'Nata',
    lastName: 'Kyrylenko',
    age: 34,
    eyeColor: 'green'
}
console.log(driver);

//3
function refCar (text, smile) {
    console.log(driver.name + text + car.model + smile);
}
refCar(' goes to the gas station in her ', ' ;)')

//4

function timeTrip(distance, speed, driver) {
    let time = Math.floor(distance/speed);
    let y=0;
    while (time > 4) {
        time = time - 4;
        y=y+1;
    }
     console.log(`Щоб ${driver} подолала відстань ${distance} км, потрібно ${Math.floor(distance/speed) + y} годин.`)
     function fuelCar (tankVolume, fuelConsumption) {
        let fuel = tankVolume/fuelConsumption * 100;
        console.log(`Бензину вистачить на ${Math.floor(fuel)} км, не забудь заправити авто!`);
     }
     fuelCar(car.tankVolume, car.fuelConsumption)
}
timeTrip(1250, car.speed, driver.name);

//------Norma------//
let mainTime = new Date();
//1
console.log(mainTime.getHours()+ ':'+ mainTime.getMinutes()+':' +mainTime.getSeconds());
//2
mainTime.setSeconds(mainTime.getSeconds()+45)
console.log(mainTime.getHours()+ ':'+ mainTime.getMinutes()+':' +mainTime.getSeconds());
//3
mainTime.setMinutes(mainTime.getMinutes()+150)
console.log(mainTime.getHours()+ ':'+ mainTime.getMinutes()+':' +mainTime.getSeconds());
//4
mainTime.setHours(mainTime.getHours()+5)
console.log(mainTime.getHours()+ ':'+ mainTime.getMinutes()+':' +mainTime.getSeconds());

//------max------//
let calc = {
    //1
    sum() {
      return this.a + this.b;
    },
    //2
    minus() {
        return this.a - this.b;
    },
    //3
    mul() {
      return this.a * this.b;
    },
    //4
    divi() {
        return this.a / this.b
    },
    read() {
      this.a = 5/6;
      this.b = 3/4;
    }
  };
  calc.read();
  //5
  console.log(calc.sum().toFixed(2));
  console.log(calc.minus().toFixed(2));
  console.log(calc.mul().toFixed(2));
  console.log(calc.divi().toFixed(2));


