var CharmanderDancer = class CharmanderDancer extends Dancer {
    step() {
      super.step();
      this.$node.addClass('charmander');
  
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