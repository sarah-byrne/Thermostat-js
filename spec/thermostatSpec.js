describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can turn the temperature up', function() {
    thermostat.up(24);
    expect(thermostat.temperature).toEqual(24);
  });

  it('can turn the temperature down', function() {
    thermostat.down(12);
    expect(thermostat.temperature).toEqual(12);
  });

  it('does not allow the temperature to be taken down below 10 degrees', function() {
    expect(function() { thermostat.down(9) }).toThrow("cannot go below 10 degrees")
    expect(thermostat.temperature).toEqual(20)
  });

  it('cannot go above 25 if powersaving mode is on', function() {
    thermostat.powersavingMode('ON')
    expect(function() { thermostat.up(28) }).toThrow('PSM on. Cannot go above 25.')  
  });

});
