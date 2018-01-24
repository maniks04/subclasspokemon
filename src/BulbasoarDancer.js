var BulbasoarDancer = class BulbaSoarDancer extends Dancer {
    step() {
      super.step();
      this.$node.addClass('bulbasoar');
  
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