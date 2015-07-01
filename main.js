function init() {

    // Récupérer le canvas à partir de son id
    game = document.getElementById('game');

    var cases = []

    for (i=1; i<10; i++){
    	cases[i] = document.getElementById(i);
    }

    // Définir les dimensions de l'objet créé dans le canvas
    height = game.height;
    width = game.width;
}

function click (item) {
	alert("couou");
	acase = document.getElementById($(item).attr("id"));
    acase.style.backgroundColor ="blue";

}
