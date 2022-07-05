
/*
let operacion = prompt ("Digite una operacion: 1 = Suma, 2 = Resta, 3 = Multiplicación y 4 = División");
let v1 = prompt ("Digite el primer valor");
let v2 = prompt ("Digite el segundo valor");
let suma = parseInt(v1) + parseInt(v2);
let resta = v1 - v2;
let multiplicación = v1 * v2;
let division = v1 / v2;

switch(operacion){
    case "1": 
        alert(v1 + " + " + v2 + " = " + suma);
        break;
    case "2":
        alert(v1 + " - " + v2 + " = " + resta);
        break;
    case "3":
        alert(v1 + " * " + v2 + " = " + multiplicación);
        break;
    case "4":
        alert(v1 + " / " + v2 + " = " + division);
        break;
    default:
        alert("Por favor digite una operación válida.");
}
*/

/*
Acuario = 21/01 - 19/02
Piscis = 20/02 - 20/03
Aries = 21/03 - 20/04
Tauro = 21/04 - 21/05
Géminis = 22/05 - 21/06
Cáncer = 22/06 - 22/07
Leo = 23/07 - 22/08
Virgo = 23/08 - 22/09 
Libra = 23/09 - 22/10
Escorpio = 23/10 - 22/11 ///
Sagitario = 23/11 - 21/12
Capricornio = 22/12 - 20/01
*/

let day_one = prompt("Ingrese el día de su cumpleaños. Ejemplo: 20");
let month_one = prompt("Ingrese el mes de su cumpleaños. Ejemplo: enero");
let day_two = prompt("Ingrese el día de cumpleaños de su pareja. Ejemplo: 20");
let month_two = prompt("Ingrese el mes de cumpleaños de su pareja. Ejemplo: enero");

function couple_one(day_one, month_one) {
  return zodiac_one;
}
if (month_one == "enero"){ //ENERO
  if (day_one > 20){
    zodiac_one = "Acuario"
  } else if (zodiac_one = 20){
    zodiac_one = "Capricornio y Acuario"
  } else (zodiac_one = "Acuario")
}
else if (month_one == "febrero") { //FEBRERO
  if (day_one < 19){
    zodiac_one = "Acuario"
  } else if (day_one >= 20){
    zodiac_one = "Piscis"
  } else if (zodiac_one = 19)
    zodiac_one = "Acuario y Piscis"
}
else if (month_one == "marzo"){ //MARZO
  if (day_one < 20) {
    zodiac_one = "Piscis"
  } else if (day_one >= 21){
    zodiac_one = "Aries"
  } else if (day_one = 20){
    zodiac_one = "Piscis y Aries"
  }
}
else if (month_one == "abril") { //ABRIL
  if (day_one < 21){
    zodiac_one = "Aries"
  } else if(day_one >=22){
    zodiac_one = "Tauro"
  } else if (day_one = 21){
    zodiac_one = "Aries y Tauro"
  }
}
else if (month_one == "mayo"){ //MAYO
  if (day_one < 21){
    zodiac_one = "Tauro"
  } else if (day_one >= 22){
    zodiac_one = "Géminis"
  } else if (day_one = 21){
    zodiac_one = "Tauro y Géminis"
  }
}
else if (month_one == "junio"){ //JUNIO
  if (day_one < 21){
    zodiac_one = "Géminis"
  } else if (day_one >= 22){
    zodiac_one = "Cáncer"
  } else if (day_one = 21){
    zodiac_one = "Géminis y Cáncer"
  }
}
else if (month_one == "julio"){ //JULIO
  if (day_one < 22){
    zodiac_one = "Cáncer"
  } else if (day_one >= 23){
    zodiac_one = "Leo"
  } else if (day_one = 22){
    zodiac_one = "Cáncer y Leo"
  }
}
else if (month_one == "agosto"){ //AGOSTO
  if (day_one < 22){
    zodiac_one = "Leo"
  } else if (day_one >= 23){
    zodiac_one = "Virgo"
  } else if (day_one = 22){
    zodiac_one = "Leo y Virgo"
  }
}
else if (month_one == "septiembre"){ //SEPTIEMBRE
  if (day_one < 22){
    zodiac_one = "Virgo"
  } else if (day_one >= 23){
    zodiac_one = "Libra"
  } else if (day_one = 22){
    zodiac_one = "Virgo y Libra"
  }
}
else if (month_one == "octubre"){ //OCTUBRE
  if (day_one < 22){
    zodiac_one = "Libra"
  } else if (day_one >= 23){
    zodiac_one = "Escorpio"
  } else if (day_one = 22){
    zodiac_one = "Libra y Escorpio"
  }
}
else if (month_one == "noviembre"){ //NOVIEMBRE
  if (day_one < 22){
    zodiac_one = "Escorpio"
  } else if (day_one >= 23){
    zodiac_one = "Sagitario"
  } else if (day_one = 22){
    zodiac_one = "Escorpio y Sagitario"
  }
}
else if (month_one == "diciembre"){ //DICIEMBRE
  if (day_one < 21){
    zodiac_one = "Sagitario"
  } else if (day_one >= 22){
    zodiac_one = "Capricornio"
  } else if (day_one = 21){
    zodiac_one = "Sagitario y Capricornio"
  }
}

function couple_two(day_two, month_two) {
  return zodiac_two;
}
if (month_two == "enero"){ //ENERO
  if (day_two > 20){
    zodiac_two = "Acuario"
  } else if (zodiac_two = 20){
    zodiac_two = "Capricornio y Acuario"
  } else (zodiac_two = "Acuario")
}
else if (month_two == "febrero") { //FEBRERO
  if (day_two < 19){
    zodiac_two = "Acuario"
  } else if (day_two >= 20){
    zodiac_two = "Piscis"
  } else if (zodiac_two = 19)
    zodiac_two = "Acuario y Piscis"
}
else if (month_two == "marzo"){ //MARZO
  if (day_two < 20) {
    zodiac_two = "Piscis"
  } else if (day_two >= 21){
    zodiac_two = "Aries"
  } else if (day_two = 20){
    zodiac_two = "Piscis y Aries"
  }
}
else if (month_two == "abril") { //ABRIL
  if (day_two < 21){
    zodiac_two = "Aries"
  } else if(day_two >=22){
    zodiac_two = "Tauro"
  } else if (day_two = 21){
    zodiac_two = "Aries y Tauro"
  }
}
else if (month_two == "mayo"){ //MAYO
  if (day_two < 21){
    zodiac_two = "Tauro"
  } else if (day_two >= 22){
    zodiac_two = "Géminis"
  } else if (day_two = 21){
    zodiac_two = "Tauro y Géminis"
  }
}
else if (month_two == "junio"){ //JUNIO
  if (day_two < 21){
    zodiac_two = "Géminis"
  } else if (day_two >= 22){
    zodiac_two = "Cáncer"
  } else if (day_two = 21){
    zodiac_two = "Géminis y Cáncer"
  }
}
else if (month_two == "julio"){ //JULIO
  if (day_two < 22){
    zodiac_two = "Cáncer"
  } else if (day_two >= 23){
    zodiac_two = "Leo"
  } else if (day_two = 22){
    zodiac_two = "Cáncer y Leo"
  }
}
else if (month_two == "agosto"){ //AGOSTO
  if (day_two < 22){
    zodiac_two = "Leo"
  } else if (day_two >= 23){
    zodiac_two = "Virgo"
  } else if (day_two = 22){
    zodiac_two = "Leo y Virgo"
  }
}
else if (month_two == "septiembre"){ //SEPTIEMBRE
  if (day_two < 22){
    zodiac_two = "Virgo"
  } else if (day_two >= 23){
    zodiac_two = "Libra"
  } else if (day_two = 22){
    zodiac_two = "Virgo y Libra"
  }
}
else if (month_two == "octubre"){ //OCTUBRE
  if (day_two < 22){
    zodiac_two = "Libra"
  } else if (day_two >= 23){
    zodiac_two = "Escorpio"
  } else if (day_two = 22){
    zodiac_two = "Libra y Escorpio"
  }
}
else if (month_two == "noviembre"){ //NOVIEMBRE
  if (day_two < 22){
    zodiac_two = "Escorpio"
  } else if (day_two >= 23){
    zodiac_two = "Sagitario"
  } else if (day_two = 22){
    zodiac_two = "Escorpio y Sagitario"
  }
}
else if (month_two == "diciembre"){ //DICIEMBRE
  if (day_two < 21){
    zodiac_two = "Sagitario"
  } else if (day_two >= 22){
    zodiac_two = "Capricornio"
  } else if (day_two = 21){
    zodiac_two = "Sagitario y Capricornio"
  }
}


document.write("Tu signo es " + zodiac_one + " y el signo de tu pareja es " + zodiac_two)