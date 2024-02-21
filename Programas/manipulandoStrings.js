var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['¡Feliz cumpleaños!',
                 'Feliz navidad mi amor',
                 'Una feliz navidad a toda la familia',
                 'Eres todo lo que quiero para Navidad',
                 'Que te mejores pronto'];

for (var i = 0; i < greetings.length; i++) {
    var input = greetings[i];
    greetings[i]=greetings[i].toLowerCase();
  if (greetings[i].indexOf("navidad") !== -1) {
     input =greetings[i];
         var result = input;
        var listItem = document.createElement('li');
        listItem.textContent = result;
        list.appendChild(listItem);
  }
}


var list = document.querySelector('.output2 ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
var nuevaCadena = input.slice(1).toLowerCase();
var capital = input.slice(0,1) + nuevaCadena;  
  var result = capital;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

var list = document.querySelector('.output3 ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // escribe tu código justo debajo aquí
var codigo = input.slice(0,3);
var ciudad = input.slice(input.indexOf(';')+1)
var result = codigo +': '+ ciudad;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}