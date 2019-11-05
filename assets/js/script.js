// Appel de la librairie Jquery
$(function(){
  // fonction pour changer la couleur du texte en vert au passage de la souris
  $('#green').mouseover(function(){
    $('#text').css('color', 'green');
    // fonction pour remettre la couleur du texte en noir quand la souris ne survol plus
    $('#green').mouseout(function(){
      $('#text').css('color', 'black');
    });
  });
  // fonction pour changer la couleur du texte en rouge au passage de la souris
  $('#red').mouseover(function(){
    $('#text').css('color', 'red');
    // fonction pour remettre la couleur du texte en noir quand la souris ne survol plus
    $('#red').mouseout(function(){
      $('#text').css('color', 'black');
    });
  });
  // fonction pour changer la couleur du texte en rouge au passage de la souris
  $('#blue').mouseover(function(){
    $('#text').css('color', 'blue');
    // fonction pour remettre la couleur du texte en noir quand la souris ne survol plus
    $('#blue').mouseout(function(){
      $('#text').css('color', 'black');
    });
  });
});
