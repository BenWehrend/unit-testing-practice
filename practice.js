function startGPS(currentLocation, newLocation) {
  if(currentLocation != newLocation) {
    return `Taking you from ${currentLocation} to ${newLocation}! Getting directions now!`
  } else {
    return `You are already at the ${currentLocation}! Would you like to go somewhere else?`
  }
};

function createUser(firstName, lastName, birthDate) {
  var user = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    onlineStatus: false,
  };
  return user;
};

function makePizza(pizza, topping) {
  pizza.cooked = true; 
  if (pizza.toppings.length < 5) {
    pizza.toppings.push(topping);
  }
  
};

function findRemainder(num1, num2) {
  return num1 %= num2;
};
module.exports = {
  startGPS,
  createUser,
  makePizza,
  findRemainder
}
