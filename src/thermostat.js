function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.up = function(newTemperature) {
  this.temperature = newTemperature;
}

Thermostat.prototype.down = function(newTemperature) {
  this.temperature = newTemperature;
}