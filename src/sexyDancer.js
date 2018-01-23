var makeSexyDancer = function(top, left, timeBetweenSteps, node) {
    

  MakeDancer.call(this, top, left, timeBetweenSteps, node);
  this.node = node
  this.top = top
  this.left = left
  this.timeBetweenSteps = timeBetweenSteps
  
  
  //this.$node = $('<span class="blinkydancer"></span>')
}


makeSexyDancer.prototype = Object.create(MakeDancer.prototype)
makeSexyDancer.prototype.constructor = makeSexyDancer

makeSexyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  console.log(this.node)
  this.node.toggle();
  
}



//$(this).addClass('classOne');




