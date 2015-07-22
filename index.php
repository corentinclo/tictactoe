<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Titre de la page</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css">
  <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="main.js"></script>
  <script src="jquery.mobile-1.4.5.min.js"></script>
</head>
<body>
<div data-role="page">
	<div data-role="header" id="title">
		<h1>Tic-Tac-Toe</h1>
	</div>
<div>
<form>
    <fieldset data-role="controlgroup" data-type="horizontal">
        <legend>You want to be X or O ?</legend>
        <input name="radio-choice-h-2" id="radio-choice-h-2a" value="X" checked="checked" type="radio">
        <label for="radio-choice-h-2a">X</label>
        <input name="radio-choice-h-2" id="radio-choice-h-2b" value="O" type="radio">
        <label for="radio-choice-h-2b">O</label>
    </fieldset>
</form>
</div>
    <div role="main" class="ui-content" id="game">
     	<canvas class="case" id="1"></canvas>	
     	<canvas class="case" id="2"></canvas>	
     	<canvas class="case" id="3"></canvas>	
     	<canvas class="case" id="4"></canvas>	
     	<canvas class="case" id="5"></canvas>		
     	<canvas class="case" id="6"></canvas>	
     	<canvas class="case" id="7"></canvas>		
     	<canvas class="case" id="8"></canvas>	
     	<canvas class="case" id="9"></canvas>
    </div>

	<div data-role="footer">
		<button class="ui-shadow ui-btn ui-corner-all" id="reset_button">Reset</button>
	</div>
</div>
</body>
</html>
