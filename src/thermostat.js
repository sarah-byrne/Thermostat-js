function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.up = function(newTemperature) {
  this.temperature = newTemperature;
}

Thermostat.prototype.down = function(newTemperature) {
  if (newTemperature < 10) {
    throw('cannot go below 10 degrees');
  }
  this.temperature = newTemperature;
}
