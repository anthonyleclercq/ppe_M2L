function interrogeXML(p_ville) {
	//cherche toutes les villes contenant le texte p_ville
	//utilise un arbre pour les noms et un pour les code postaux des communes
	villes = arbreXML.getElementsByTagName('Com_Nom');
	cp = arbreXML.getElementsByTagName('Com_CodePostal');
	//récupère le texte saisi
	document.getElementById("villes").innerHTML = "";
	//variable pour construire la liste des villes à afficher
	str="";
	for (i=0;i<villes.length;i++) { //parcours toutes les villes
		uneVille = villes.item(i).firstChild.data ; //pour chacune
		if (uneVille.indexOf(p_ville.toUpperCase())!=-1) {  //si la ville en cours contient le texte cherché
			 //on ajoute la ville avec un retour à la ligne
			str += cp.item(i).firstChild.data + " | " + uneVille + "<br/>";		 						
			}		   
		}
		document.getElementById("villes").innerHTML= str;   //remplace le contenu de la div par la nouvelle liste
}

//charge les communes à partir du fichier XML
		var reqAjax= new XMLHttpRequest();	
		reqAjax.open('GET','Commune.xml',false)
		reqAjax.send(null);
		var arbreXML = reqAjax.responseXML;