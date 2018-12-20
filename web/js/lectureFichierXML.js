//charge les communes à partir du fichier XML
var reqAjax= new XMLHttpRequest();	
reqAjax.open('GET','./Tri/Commune.xml',false)
reqAjax.send(null);
var arbreXML = reqAjax.responseXML;