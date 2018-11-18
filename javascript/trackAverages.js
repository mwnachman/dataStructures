const AverageTracker = function() {

  this.counter = 0;
  this.min = null;
  this.max = null;
  this.totalSum = 0;
  this.occurrences = [];
  for (let i = 0; i < 121; i ++) {
    this.occurrences[i] = 0;
  }
  this.highestOccurrences = 0;
  this.mode = null;
}


AverageTracker.prototype.insert = function(newTemp) {
  if (this.max === null || newTemp > this.max) {
    this.max = newTemp;
  }
  if (this.min === null || newTemp < this.min) {
    this.min = newTemp;
  }
  this.occurrences[newTemp]++;
  if (this.occurrences[newTemp] > this.highestOccurrences) {
    this.highestOccurrences = this.occurrences[newTemp];
    this.mode = newTemp;
  }
  this.totalSum += newTemp;
  this.counter++;
};

AverageTracker.prototype.getMax = function() {
  return this.max;
};

AverageTracker.prototype.getMin = function() {
  return this.min;
};

AverageTracker.prototype.getMean = function() {
  return this.totalSum / this.counter;
};

AverageTracker.prototype.getMode = function() {
  return this.mode;
};
