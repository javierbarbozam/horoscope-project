let day_one = prompt("Ingrese el día de su cumpleaños. Ejemplo: 20");
let month_one = prompt("Ingrese el mes de su cumpleaños. Ejemplo: enero");
let day_two = prompt("Ingrese el día de cumpleaños de su pareja. Ejemplo: 20");
let month_two = prompt("Ingrese el mes de cumpleaños de su pareja. Ejemplo: enero");
let zodiac_one = ""
let zodiac_two = ""
let compatibility = ""

//COUPLE 1

if (month_one == "enero"){ //ENERO
  if (day_one < 21){
    zodiac_one = "Capricornio"
  } else if (zodiac_one >= 22){
    zodiac_one = "Acuario"
  } else if (zodiac_one = 21){
    zodiac_one = "Capricornio y Acuario"
  }
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

//COUPLE 2

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
if (zodiac_one == zodiac_two){ // COMPATIBILITY
  compatibility = "compatibilidad"
}
else if(zodiac_one == "Géminis"){ //GÉMINIS
  if (zodiac_two == "Piscis" || zodiac_two == "Escorpio" || zodiac_two == "Tauro" || zodiac_two == "Cáncer"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Libra" || zodiac_two == "Leo" || zodiac_two == "Acuario" || zodiac_two == "Aries"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Sagitario" || zodiac_two == "Virgo" || zodiac_two == "Capricornio"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Piscis"){ //PISCIS
  if (zodiac_two == "Géminis" || zodiac_two == "Libra" || zodiac_two == "Acuario"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Escorpio" || zodiac_two == "Tauro" || zodiac_two == "Cáncer" || zodiac_two == "Capricornio"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Sagitario" || zodiac_two == "Leo" || zodiac_two == "Aries" || zodiac_two == "Virgo"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Escorpio"){ //ESCORPIO
  if (zodiac_two == "Géminis" || zodiac_two == "Libra" || zodiac_two == "Acuario" || zodiac_two == "Sagitario"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Tauro" || zodiac_two == "Cáncer" || zodiac_two == "Capricornio" || zodiac_two == "Virgo"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Leo" || zodiac_two == "Aries"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Tauro"){ //TAURO
  if (zodiac_two == "Géminis" || zodiac_two == "Acuario" || zodiac_two == "Sagitario" || zodiac_two == "Aries"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Escorpio" || zodiac_two == "Cáncer" || zodiac_two == "Capricornio" || zodiac_two == "Virgo"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Libra" || zodiac_two == "Leo"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Tauro"){ //TAURO
  if (zodiac_two == "Géminis" || zodiac_two == "Acuario" || zodiac_two == "Sagitario" || zodiac_two == "Aries"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Escorpio" || zodiac_two == "Tauro" || zodiac_two == "Cáncer" || zodiac_two == "Capricornio" || zodiac_two == "Virgo"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Libra" || zodiac_two == "Leo"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Libra"){ //LIBRA
  if (zodiac_two == "Escorpio" || zodiac_two == "Cáncer" || zodiac_two == "Virgo" || zodiac_two == "Capricornio"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Géminis" || zodiac_two == "Sagitario" || zodiac_two == "Leo" || zodiac_two == "Acuario"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Tauro" || zodiac_two == "Aries"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Cáncer"){ //CÁNCER
  if (zodiac_two == "Géminis" || zodiac_two == "Libra" || zodiac_two == "Acuario" || zodiac_two == "Aries"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Escorpio" || zodiac_two == "Tauro" || zodiac_two == "Virgo" || zodiac_two == "Capricornio"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Sagitario" || zodiac_two == "Leo"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Sagitario"){ //SAGITARIO
  if (zodiac_two == "Géminis" || zodiac_two == "Libra" || zodiac_two == "Acuario" || zodiac_two == "Aries"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Escorpio" || zodiac_two == "Tauro" || zodiac_two == "Virgo" || zodiac_two == "Capricornio"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Sagitario" || zodiac_two == "Leo"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Cáncer"){ //CÁNCER
  if (zodiac_two == "Géminis" || zodiac_two == "Libra" || zodiac_two == "Acuario" || zodiac_two == "Aries"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Escorpio" || zodiac_two == "Tauro" || zodiac_two == "Virgo" || zodiac_two == "Capricornio"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Sagitario" || zodiac_two == "Leo"){
    compatibility = "compatibilidad media"
  }
}
else if(zodiac_one == "Cáncer"){ //CÁNCER
  if (zodiac_two == "Géminis" || zodiac_two == "Libra" || zodiac_two == "Acuario" || zodiac_two == "Aries"){
    compatibility = "incompatibilidad"
  } else if (zodiac_two == "Piscis" || zodiac_two == "Escorpio" || zodiac_two == "Tauro" || zodiac_two == "Virgo" || zodiac_two == "Capricornio"){
    compatibility = "compatibilidad"
  } else if (zodiac_two == "Sagitario" || zodiac_two == "Leo"){
    compatibility = "compatibilidad media"
  }
}

document.write("Tu signo es " + zodiac_one + " y el signo de tu pareja es " + zodiac_two + " y sus signos tienen " + compatibility)

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