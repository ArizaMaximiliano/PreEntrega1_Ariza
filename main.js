console.log('Arrancando la pagina')
/*--------Variables globales-------*/

let screen = document.getElementById('screen')      //Input pantalla calculadora     

let aNum = document.getElementById('a')             //Botones potencia
let bNum = document.getElementById('b')
let rPot = document.getElementById('rPot')

let p = 'X';                                        //Variable tateti

/*--------INICIO-------*/

//Pequeña practica de lo que trabajamos en clase

let nombre = prompt("Ingrese su nombre para continuar");
let edad = 0;

while (nombre == "") {                              //Validacion de nombre
    nombre = prompt("ERROR! Coloque un nombre valido")
}

edad = prompt("Ingrese su edad, debe tener 10 años o más");

while (edad < 10) {                                 //Validacion de edad
    edad = prompt("ERROR! Ingrese una edad valida para continuar");
}

alert("Bienvenido/a " + nombre + '!');              //Alert que muestra valores ingresados

/*--------CALCULADORA-------*/

function agregar(dato) {    //Funcion para escribir la operacion. Tiene restricciones para que no ocurran errores
    if ((screen.value.slice(-1) == '*' || screen.value.slice(-1) == '/' || screen.value.slice(-1) == '+' || screen.value.slice(-1) == '-') && (dato == '*' || dato == '/')) {
        return
    } else {
        screen.value += dato;
    }
}

function calcular() {       //Funcion para calcular las operaciones
    let resultado = eval(screen.value);
    screen.value = resultado
}

function retroceso() {      //Funcion para borrar 1 caracter de la pantalla
    screen.value = screen.value.slice(0, -1);
}

function borrar() {         //Funcion para borrar la pantalla de la calculadora
    screen.value = '';
}


function potencia() {       //Funcion potencia. Conozco de la funcion que ya esta en javascript pero hice esta para utilizar bucles
    let a = aNum.value;
    let c = aNum.value;
    let b = bNum.value;

    if (bNum.value == 0) {                              //IF para valor = 0
        rPot.value = 0;
    } else if (bNum.value < 0) {                        //IF para valores negativos
        b = b * -1;                                     //cambio el indice para elevar a positivo de nuevo para el bucle for

        for (var i = 1; i < b; i++) {                   //Iteracion dependiendo del indice a elevar
            a = a * c;
        }

        rPot.value = eval(1 / a);                       //Operación potencia de numero negativo... propiedad

    } else if (bNum.value > 0) {                        //IF para valores positivos

        for (var i = 1; i < bNum.value; i++) {          //Iteracion dependiendo del indice a elevar
            a = a * c;
        }

        rPot.value = a;
    }

}

/*--------TATETI-------*/

//Pequeño videojuego a modo de prueba

function reset() {                      //Funcion para resetar los inputs
    p = 'X';

    for (var i = 1; i < 10; i++) {      //Recorro todos las casillas borrando su contenido y activandolas
        document.getElementById('c' + i).innerHTML = '-';
        document.getElementById('c' + i).disabled = false;
    }
}

function turno(casilla) {               //Funcion para escribir en la pantalla dependiendo del jugador se rellena con 'X' o 'O'
    let casillero = document.getElementById(casilla)

    if (p == 'X') {
        casillero.innerHTML = p;        //Escribir en HTML el valor p
        p = 'O'                         //Cambio de jugador
    } else if (p == 'O') {
        casillero.innerHTML = p;        //Escribir en HTML el valor p
        p = 'X'                         //Cambio de jugador
    }

    casillero.disabled = true;          //Desactivo la casilla para no hacer trampas
}

