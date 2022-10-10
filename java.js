
/*Apretando el boton de agregar o eliminiar entra en una funcion o en otra , para realizar un total de cada respuesto que quiera comprar*/ 


/*constructores*/


class Pantalla {
    constructor(repuesto,precio,stock) {
        this.repuesto="Pantalla";
        this.precio=15000;
        this.stock=20;
    }
}
class Bateria {
    constructor(repuesto,precio,stock) {
        this.repuesto="Bateria";
        this.precio=5000;
        this.stock=8;
    }
}
class Carcasa {
    constructor(repuesto,precio,stock) {
        this.repuesto="Carcasa";
        this.precio=12000;
        this.stock=1;
    }
}
class Botonhome {
    constructor(repuesto,precio,stock) {
        this.repuesto="BotonHome";
        this.precio=2000;
        this.stock=3;
    }
}

class faceid{
    constructor(repuesto,precio,stock) {
        this.repuesto="Faceid";
        this.precio=2000;
        this.stock=3;
    }
}
const pantalla= new Pantalla("repuesto","precio","stock");
const bateria= new Bateria("repuesto","precio","stock");
const carcasa= new Carcasa("repuesto","precio","stock");
const botonhome= new Botonhome("repuesto","precio","stock");
const faceid= new faceid("repuesto","precio","stock");

let Iphone8=[];
Iphone8.push (pantalla,bateria,carcasa,botonhome);



//Se pidio al usuario un repuesto y muestra el stock que diponible y precio de cada respuesto


let Respuesto=prompt("Ingrerse nombre del respuesto").toLowerCase();

function repuestoIngresado (Respuesto){

    switch(Respuesto){
        case "pantalla":
            Iphone8.find(elemento => elemento.nombre = "pantalla");
            alert(`Tenemos stock disponible ${pantalla.stock} de cada pantalla El total sale $${pantalla.precio}`);
             break;

        case "bateria":
            Iphone8.find(elemento => elemento.nombre = "bateria");
            alert(`Tenemos stock disponible ${bateria.stock} de cada bateria El total sale $${bateria.precio}`);
                break;
        case "carcasa":
            Iphone8.find(elemento => elemento.nombre = "carcasa");
            alert(`Tenemos stock disponible ${carcasa.stock} de cada carcasa El total sale $${carcasa.precio}`);
                 break;
        case "botohome":
            Iphone8.find(elemento => elemento.nombre = "botonhome");
            alert(`Tenemos stock disponible ${botonhome.stock} de cada botonhome El total sale $${botonhome.precio}`);
                 break;
        default:
            alert("El respuesto ingresando es incorrecto");
    }
}
repuestoIngresado(Respuesto);




















//Recorre array establecido

// function porcadaelemento(Iphone8,funcion){
//     for (const elemento of Iphone8){
//         funcion (elemento);
//     }
// }






/*class  {
    constructor(pantalla, bateria, carcasa, faceid) {
        this.pantalla = pantalla;
        this.bateria = bateria;
        this.carcasa = carcasa;
        this.faceid = faceid;
    
    }
    sumaIva() {
        this.precio=this.precio*1.21;
    }
    vender() {
        this.vendido=true
    }
}*/

/* Menu navegable , dando como opcion 1 como registro de nombre,apellido y dni*/

/*let opcion ;
do { 
     console.log("1-Registrarse");
    console.log("2-Iniciar Session");
    console.log("0-salir"); 
    opcion=parseInt(prompt("Ingrese opcion de menu")); 

switch(opcion){
    case 1:
        let NombreCompleto=NombreComplet();
        alert(NombreCompleto);
    break;

    case 2:

    break;

    case 0:

     break;

     default:
        break;
}
}while(opcion != 0);
function NombreComplet(){
    let Nombre=prompt("Ingrese Nombre");
    let Apellido=prompt("ingrese Apellido");
    const Dni=parseInt(prompt("ingrese dni"));
    let NombreCompleto=Nombre+ " "+Apellido +" "+Dni;
    console.log("Registro exitoso");
    return NombreCompleto;

    }
*/
