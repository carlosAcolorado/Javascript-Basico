
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;
    var days = 31; //por defecto se pone days en 3
  // AÑADIR CONDICIONAL AQUÍ
  if (choice ==='February'){
   days =28; 
}else if(choice ==='September'|| choice ==='April' || choice ==='November' ||choice ==='June') // estos son los meses de 30 dias en caso de no ser febrero o estos meses, days valdra 31
{
    days=30
}

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January'); //creando el calendario en enero por defecto 
