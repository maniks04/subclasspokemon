var PikachuDancer = class PikachuDancer extends Dancer {
  step() {
    super.step();
    this.$node.addClass('pikachu');

    this.$node.animate({
      backgroundSize: '80%'
    }, 600, function() {
      // Animation complete.
    });
    this.$node.animate({
      backgroundSize: '40%'
    }, 600, function() {
      // Animation complete.
    });
    
  }
}








