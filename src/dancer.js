var Dancer = class Dancer {
  
  constructor(top, left, timeBetweenSteps){
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }

  step () {
    setTimeout(() => this.step(), this.timeBetweenSteps);
  }

  setPosition (top, left) {
    var styleSettings = {
        top: top,
        left: left
      };
      this.$node.css(styleSettings);
  }
};


