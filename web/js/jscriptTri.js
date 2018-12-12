function trier(pIndex, pTablo, pLongueur) {
	//trie un tableau à une dimension contenant, en continu, les multiples lignes d'un tableau à trois colonnes
	//le tri s'effectue sur la colonne de numéro d'ordre pIndex
	for (i=0;i<pLongueur; i+=3) //parcours de la totalité, de 3 cases en 3 cases
		for (j=i+3;j<pLongueur;j+=3)  //parours de toutes les cellules restantes pour comparaison
	    
		if (pTablo[i+pIndex].innerHTML>pTablo[j+pIndex].innerHTML) { //si la première case de la colonne souhaitée est plus grande qu'une autre 			
			tmp = pTablo[i].innerHTML;
			pTablo[i].innerHTML = pTablo[j].innerHTML ; 
			pTablo[j].innerHTML = tmp; 
			tmp = pTablo[i+1].innerHTML;
			pTablo[i+1].innerHTML = pTablo[j+1].innerHTML ; 
			pTablo[j+1].innerHTML = tmp; 
			tmp = pTablo[i+2].innerHTML;
			pTablo[i+2].innerHTML = pTablo[j+2].innerHTML ; 
			pTablo[j+2].innerHTML = tmp; 		
		}
 	return pTablo;
}

function classer(item) {  //fait appel à la fonction de tri, en récupérant toutes les cases et en comptant le nombre
	result = trier (item, document.getElementsByTagName("td"), document.getElementsByTagName("td").length);	  
}