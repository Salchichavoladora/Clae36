class Form {
constructor(){}

display(){

var title = createElement('h2');
title.html("Juego de carreras de autos");
title.position(130,0);

var input = createInput("Name");

var button = createButton('Play');

var greeting = createElement('h3');

input.position(130,160);

button.position(250,200);

button.mousePressed(function(){
    input.hide();
    button.hide();
    var Name = input.value();
    playerCount = playerCount + 1;
    player.update(Name);
    player.updateCount(playerCount);
    greeting.html("Bienvenido Jugador"+ Name);
    greeting.position(130,160);
})

}
}