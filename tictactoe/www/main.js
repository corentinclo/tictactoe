$( document ).ready(function() {

	/*Set the size*/



	/* The player has the cross X */

	// Table of filled cases
	var game = [];
	for (i = 1; i<10; i++) {
		game[i]=0;
	}
	var filledX = [];
	var filledO = [];
	var turn = 0; // if the O start, we need 5 to end the game
    // Retrieve the canvas from the ids
    var cases = [];
    var context = [];
    for (i=1; i<10; i++){
    	cases[i] = document.getElementById(i);
    	context[i] = cases[i].getContext('2d');
    }
    var x = cases[1].width / 2;
    var y = cases[1].height / 2;

    // The human play
    $(".case").click(function() {
    	var id = $(this).attr('id');
    	if (!is_filled(id)){
	    	place(2, id);
	    	draw('O',id);
	    	filledO[id] = true;
	    	turn += 1;
	    	var result = is_game_over();
	    	if (result == 2){alert("O win!");}
	    	else if (result == 3) {alert("It's a draw!");}
	    	else{
		    	minimax(0,1);
		    	draw('X', computer_move);
		    	place(1, computer_move);
		    	filledX[computer_move] = true;
		    	var result = is_game_over();
		    	if (result == 1){alert("X win!");}
		    	else if (result == 3) {alert("It's a draw!");}
		    }
	    }
	});	

    function place (player, acase) {
		game[acase] = player;
    }

    function draw (letter, acase){
    	context[acase].font = '80pt Arial';
	    context[acase].textAlign = 'center';
	    context[acase].textBaseline = 'middle';
		context[acase].fillStyle = '#3498db';
		context[acase].fillText(letter,x,y)
    }

    function is_filled (id) {
    	if (filledX[id] || filledO[id]) {
    		return true; 
    	}
    	else {
    		return false;
    	}
    }

	function erase_case(id){
		context[id].rect(0,0,300,300);
		context[id].fillStyle = '#f1c40f';
		context[id].fill()
	}

	function is_game_over(){
		if (X_has_won()) return 1;
		else if (O_has_won()) return 2;
		else if (turn == 5) return 3;
		else return 0;
	}

	function X_has_won(){
		if ((game[1] == game[5] && game[1] == game[9] && filledX[1]) || (game[7] == game[5] && game[7] == game[3] && filledX[7])) {
            //console.log("X Diagonal Win");
            return true;
        }
        for (i = 1; i < 4; ++i) {
        	var j;
        	if (i==1) {j=1}
        		else if (i==2) {j=4}
        			else {j=7}
            if (((game[i] == game[i+3] && game[i] == game[i+6] && filledX[i]) // verticale
                    || (game[j] == game[j+1] && game[j] == game[j+2] && filledX[j]))) { //horizontale
                //console.log("X Row or Column win");
                return true;
            }
        }
        return false;
	}
	function O_has_won(){
		if ((game[1] == game[5] && game[1] == game[9] && filledO[1]) || (game[7] == game[5] && game[7] == game[3] && filledO[7])) {
            //console.log("O Diagonal Win");
            return true;
        }
        for (i = 1; i < 4; ++i) {
        	var j;
        	if (i==1) {j=1}
        		else if (i==2) {j=4}
        			else {j=7}
            if (((game[i] == game[i+3] && game[i] == game[i+6] && filledO[i]) // verticale
                    || (game[j] == game[j+1] && game[j] == game[j+2] && filledO[j]))) { //horizontale
                //console.log("O Row or Column win");
                return true;
            }
        }
        return false;
	}

	function get_available_cases() {
        available_cases = new Array();
        for (i = 1; i < 10; i++) {
            if (game[i] == 0) {
                available_cases.push(i);
            }
        }
        return available_cases;
    }

    // MINIMAX
    function minimax (depth, turn) {
    	
    	if (X_has_won()) return +1; 
        if (O_has_won()) return -1;

        var available_cases = get_available_cases();
        available_cases = $.makeArray(available_cases);
        if (available_cases.length == 0) {
        	return 0;
        }
        var min = 9999;
        var max = -9999;

        $.each(available_cases, function( index, value ) {		
            var a_case = value;
            if (turn == 1) { // X
                place(1, a_case);
                filledX[a_case] = true;
                var current_score = minimax(depth + 1, 2);
                max = Math.max(current_score, max);
                
                if(depth == 0) {
                	console.log("Score for position "+value+" = "+current_score);
                }

                if(current_score >= 0){
                	if(depth == 0) {
                		computer_move = a_case;
                	}
                }
                if(current_score == 1){
                	game[a_case] = 0;
                	filledX[a_case] = false;
                	return false;
                } 
                if(value == available_cases.lenght-1 && max < 0){
                	if(depth == 0){
                		computer_move = a_case;
                	}
                }
                
            } 
            else if (turn == 2) { // O
                place(2, a_case); 
                filledO[a_case] = true;
                var current_score = minimax(depth + 1, 1);
                min = Math.min(current_score, min); 
                if(min == -1){
                	game[a_case] = 0; 
                	filledO[a_case] = false;
                	return false;
                }
                
            }
            game[a_case] = 0; //Reset this point
            filledX[a_case] = false;
            filledO[a_case] = false;
        }); 
        return (turn == 1)?max:min;
    }

	// Reset the game
	$("#reset_button").click(function() {
		game = [];
		filledX = [];
		filledO = [];
		turn = 0;
		for (i = 1; i<10; i++) {
			erase_case(i);
			game[i] = 0;
			filledO[i] = false;
			filledX[i] = false;
		}
	});
});
//End

