<html>
	<head>
		<meta charset="utf-8">
		<script type="text/javascript" src="./js/controleSaisie.js"></script>
		<link rel="stylesheet" href="./css/pageAuthentification.css" />
	</head>
	<body>
		<?php session_start();
				if (isset($_SESSION["resultat"])) {//il y a eu une ereur de connexion
					echo '<p color="red">Erreur lors de l\'identification : '.$_SESSION["resultat"].'</p>';
				}
		?>
		<form name="f_choix" action="verifId.php" method="post">
			<label class="zoneTitre">Identifiant </label><input class="zoneChamp" name="id" type="text" /> 
			<label class="zoneTitre">Mot de passe</label>
			<input class="zoneChamp" type="password" name="passe"/>
			<input  class="zoneChamp" type="button" onClick="controlSaisie();" value="OK"/>
		</form>
	</body>
</html>
	
