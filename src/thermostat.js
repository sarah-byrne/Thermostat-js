function Thermostat(){
  this.temperature = 20;
  this.psmOn = true;
}

Thermostat.prototype.up = function(newTemperature) {
  if (newTemperature > 25 && this.psm === true) {
    throw('PSM on. Cannot go above 25.')
  } else if (newTemperature > 32 && this.psm === false) {
    throw('Cannot go above 32.')
  }
  this.temperature = newTemperature;
}

Thermostat.prototype.down = function(newTemperature) {
  if (newTemperature < 10) {
    throw('cannot go below 10 degrees');
  }
  this.temperature = newTemperature;
}

Thermostat.prototype.powersavingMode = function(bool) {
  this.psm = bool;
}
