//func to car object with optional options
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //additional option for objects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// calling func to create car object
var my_car = createCar("Ford", "Mustang", "color:red", "Turbo: yes", "year: 2024");
// let my_car = createCar("Ford", "Mustang", "color:red", "Turbo: yes");
//var to ensure the all info is stored correctly in objects
console.log(my_car);
