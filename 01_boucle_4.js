
var http = require("http");
const fs = require("fs");
let data = fs.readFileSync('pro.json');
let obj = JSON.parse(data)
var server = http.createServer(function(request, response) {
'use strict';
/* 
on définit un Object litéral qui contient l'ensemble des provinces 
*/
let oProvince = obj;
/* 


permet d'extraire l'ensemble des propriétés valeurs de l'objet litéral */

 const contenu_objet_json =(o)=>{

   let trace = '<table><tr><td><h3>Acronyme</h3></td><td><h3>Nom de la province</h3></td></tr>';
   for (let p in o) { 
     trace += '<tr><td>'+p + '</td><td>' + o[p] + '</td></tr>'; 
   } 
   return trace+='</table>';
   }

console.log('----------------------------')

  response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"})
  response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
  response.write('<style>table, th, td {border: 1px solid black;}</style>')
 response.write('<!DOCTYPE "html">');
 response.write('<html>');
 response.write('<head>');
 response.write('<title>Vive Node.js</title>');
 response.write('</head>');
 response.write('<body>');
 response.write('Bonjour tout le monde');
 response.write(contenu_objet_json(oProvince));
 response.write('</body>');
 response.write('</html>');
 response.end();

})
// le port 80 est le port standard on peut alors lancer la page avec seulement : localhost
server.listen(3000)