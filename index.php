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
<div data-role="page" id="main_page" data-url="main_page">

  	<div data-role="header" id="title">
  		<h1>Tic-Tac-Toe</h1>
      <a href="#left-panel" data-icon="carat-r" data-iconpos="notext" data-shadow="false" data-iconshadow="false" class="ui-nodisc-icon">Settings</a>
  	</div><!-- /header -->

    <div role="main" class="ui-content" id="game">
     	<canvas class="case" id="1"></canvas><canvas class="case" id="2"></canvas><canvas class="case" id="3"></canvas>	
     	<canvas class="case" id="4"></canvas><canvas class="case" id="5"></canvas><canvas class="case" id="6"></canvas>	
     	<canvas class="case" id="7"></canvas><canvas class="case" id="8"></canvas><canvas class="case" id="9"></canvas>
    </div><!-- /content -->

    <div data-role="panel" id="left-panel" data-theme="b">
        <a href="#" data-rel="close" class="ui-btn ui-corner-all ui-shadow ui-mini ui-btn-inline ui-icon-delete ui-btn-icon-left ui-btn-right">Close Settings</a>
        <form id="player_form">
          <fieldset data-role="controlgroup" data-type="horizontal">
              <legend>X or O ?</legend>
              <input name="radio-choice-h-2" id="radio-choice-h-2a" value="X" type="radio">
              <label for="radio-choice-h-2a">X</label>
              <input name="radio-choice-h-2" id="radio-choice-h-2b" value="O" checked="checked" type="radio">
              <label for="radio-choice-h-2b">O</label>
          </fieldset>
        </form>
    </div><!-- /panel -->

  	<div data-role="footer" class="footer">
  		<button class="ui-shadow ui-btn ui-corner-all" id="new-game-button">New game</button>
  	</div><!-- /footer -->
</div>
</body>
</html>
