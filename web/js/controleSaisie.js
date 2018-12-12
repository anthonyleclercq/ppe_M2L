function controlSaisie(){
	if (f_choix.elements["id"].value=="" || f_choix.elements["passe"].value=="") {
		alert("Vous devez renseigner les deux champs");
	}
	else {
		document.location.href="Authentification/verifId.php?id=" + f_choix.elements["id"].value + "&passe=" + f_choix.elements["passe"].value;
	}
}