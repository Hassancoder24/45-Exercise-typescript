//func to car object with optional options
function createCar(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    //additional option for objects
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}
// calling func to create car object
let my_car = createCar("Ford", "Mustang", "color:red", "Turbo: yes", "year: 2024");

//var to ensure the all info is stored correctly in objects
console.log(my_car);