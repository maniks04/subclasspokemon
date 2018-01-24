var SnorlaxDancer = class SnorlaxDancer extends Dancer {
    step() {
      super.step();
      this.$node.addClass('snorlax');
      
      this.$node.animate({
        top: 1000
      }, 3000, function() {
        // Animation complete.
      });
    //   this.$node.animate({
    //     backgroundSize: '40%'
    //   }, 600, function() {
    //     // Animation complete.
    //   });
      
    }
  }