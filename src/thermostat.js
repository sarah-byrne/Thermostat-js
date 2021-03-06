'use strict';

function Thermostat(){
  this.temperature = 20;
  this.psm = true;
}

Thermostat.prototype.upButton = function() {
  this.up(this.temperature + 1);
}

Thermostat.prototype.downButton = function() {
  this.up(this.temperature - 1);
}

Thermostat.prototype.up = function(newTemperature) {
  if (newTemperature > 25 && this.psm) {
    throw('PSM on. Cannot go above 25.')
  } else if (newTemperature > 32 && !this.psm) {
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

Thermostat.prototype.changePowersavingMode = function() {
  this.psm = !this.psm;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    this.energyUsage = Symbol.for('low');
  } else if (this.temperature >= 18 && this.temperature < 25) {
    this.energyUsage = Symbol.for('med');
  } else if (this.temperature >= 25) {
    this.energyUsage = Symbol.for('high');
  }
  return this.energyUsage
};
