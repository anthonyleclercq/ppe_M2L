<html>
<head>
	<script type="text/javascript" src="./js/jsChoixCommune.js"></script>
	<script type="text/javascript" src="./js/lectureFichierXML.js"></script>

</head>
<body>
	<fieldset >
		Choisir la ville<br/>
		<input name="ville" type="text" onChange="interrogeXML(this.value);" />
		<br/>
		<div id="villes"> </div>
	</fieldset>
</body>
</html>