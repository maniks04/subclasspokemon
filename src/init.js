var music = document.createElement('audio');
var audio = document.createElement('audio');
var explosion = document.createElement('audio'); 

var pokeball = null;
var lastDancer = null;
var counter = 0;

$(document).ready(function() {
  window.dancers = [];

  
  explosion.setAttribute('src', './sounds/Explosion+3.mp3');
  explosion.volume = 0.3;
  music.loop = true;
  music.setAttribute('src', './sounds/Pokemon.mp3');
  music.volume = 0.4;
  music.play();
  
  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(dancer => wumbify(dancer));
  });
  
  
  
  
  
  
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    //top: 192.613px; left: 896.194px

    if (dancerMakerFunctionName === 'SnorlaxDancer') {
      //console.log('snorlax!')
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(), //does not subtract 1000 if I do -1000 because its overwritten in SnorlaxDancer.js
        $("body").width() * Math.random()-1000,
        Math.random() * 1000
      )
    }
else if (dancerMakerFunctionName !== 'Snorlax') {
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    )
  }
  //console.log(dancer)
    //dancer is the name of the character
    soundCheck(dancer)

    if (!pokeball && dancer.$node.hasClass('pokeball')) {
      pokeball = dancer;
    } else if (pokeball && dancer.$node.hasClass('pokeball')) {
      return;
    }

    if (!dancer.$node.hasClass('pokeball')) {
      lastDancer = dancerMakerFunction;
    }
    window.dancers.push(dancer);
    audio.play(); 
    dancer.$node.attr('id', counter++);
    $('.dancefloor').append(dancer.$node);

  });
    
 
  $(document).keydown(function(event) {
    if (pokeball) {
      var top = pokeball.$node.css('top');
      top = top.slice(0, top.length - 2);
      top = parseInt(top);
      var left = pokeball.$node.css('left');
      left = left.slice(0, left.length - 2);
      left = parseInt(left);
      if (event.keyCode === 37) {
        //left
        left -= 10;
        pokeball.$node.css('left', left.toString() + 'px');
        collisionCheck(left, top);
      } else if (event.keyCode === 38) {
        //up
        top -= 10;
        pokeball.$node.css('top', top.toString() + 'px');
        collisionCheck(left, top);
      } else if (event.keyCode === 39) {
        //right
        left += 10;
        pokeball.$node.css('left', left.toString() + 'px');
        collisionCheck(left, top);
      } else if (event.keyCode === 40) {
        //down
        top += 10;
        pokeball.$node.css('top', top.toString() + 'px');
        collisionCheck(left, top);
      }
    }
  });


});










var wumbify = function(dancer) {
  dancer.$node.addClass('wumbo');
  dancer.$node.css('top', '500px');
};


var collisionCheck = function(left, top) {
  var plankLeft = left;
  var plankTop = top;
  window.dancers.forEach((dancer, index) => {
    var dancerLeft = dancer.$node.css('left');
    dancerLeft = dancerLeft.slice(0, dancerLeft.length - 2);
    dancerLeft = parseInt(dancerLeft);
    var dancerTop = dancer.$node.css('top');
    dancerTop = dancerTop.slice(0, dancerTop.length - 2);
    dancerTop = parseInt(dancerTop);
    if (!dancer.$node.hasClass('pokeball')) {
      if (Math.abs(plankLeft - dancerLeft) <= 50 && Math.abs(plankTop - dancerTop) <= 50) {
        explosion.play();
        dancer.$node.css('background-image', 'url("http://bestanimations.com/Military/Explosions/explosion-animation-1.gif")');
        setTimeout(() => {
          $('#' + dancer.$node.attr('id')).remove();
        }, 500);
        window.dancers.splice(index, 1);
      }
    }
  });
};


var soundCheck = function(dancer) {
    if (dancer.$node.hasClass('pikachu')) {
    audio.setAttribute('src', './sounds/pikachu.wav');
    audio.volume = 1;
  }  else if (dancer.$node.hasClass('pokeball')) {
    audio.setAttribute('src', './sounds/pokeball_sound_effects_mp3cut_1.mp3');
    audio.volume = 0.6;
  } else if (dancer.$node.hasClass('snorlax')) {
    audio.setAttribute('src', './sounds/pokeball_sound_effects_mp3cut_1.mp3');
    audio.volume = 0.6;
  } else if (dancer.$node.hasClass('charmander')) {
    audio.setAttribute('src', './sounds/charyawn.wav');
    audio.volume = 0.6;
  } else if (dancer.$node.hasClass('squirtle')) {
    audio.setAttribute('src', './sounds/squirtle_squirtle.wav');
    audio.volume = 0.6;
  } else if (dancer.$node.hasClass('bulbasoar')) {
    audio.setAttribute('src', './sounds/babasaur.wav');
    audio.volume = 0.6;
  }
};