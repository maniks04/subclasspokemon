var SquirtleDancer = class SquirtleDancer extends Dancer {
    step() {
      super.step();
      this.$node.addClass('squirtle');
  
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