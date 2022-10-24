
/*Apretando el boton de agregar o eliminiar entra en una funcion o en otra , para realizar un total de cada respuesto que quiera comprar*/


/*constructores*/


class Pantalla {
    constructor(id, Pantalla, precio, stock) {
        this.id = "item1";
        this.pantalla = "Pantalla";
        this.precio = precio;
        this.stock = stock;
    }
}
class Bateria {
    constructor(id, Bateria, precio, stock) {
        this.id = "item2";
        this.bateria = "Bateria";
        this.precio = precio;
        this.stock = stock;
    }
}
class Carcasa {
    constructor(id, Carcasa, precio, stock) {
        this.id = "item3";
        this.carcasa = "Carcasa";
        this.precio = precio;
        this.stock = stock;
    }
}
class Botonhome {
    constructor(id, BotonHome, precio, stock) {
        this.id = "item4";
        this.botonHome = "BotonHome";
        this.precio = precio;
        this.stock = stock;
    }
}
class Faceid {
    constructor(id, Faceid, precio, stock) {
        this.id = "item5";
        this.faceid = "Faceid";
        this.precio = precio;
        this.stock = stock;
    }
}


//obejetos y lista de productos
const pantalla = new Pantalla("item1", "Pantalla", 15000, 20);
const bateria = new Bateria("item2", "Bateria", 20000, 20);
const carcasa = new Carcasa("item3", "Carcasa", 30000, 20);
const botonhome = new Botonhome("item4", "BotonHome", 16000, 20);


const Iphone8 = [
    { id: "item1", pantalla: "pantalla", precio: 15000, stock: 20 },
    { id: "item2", bateria: "bateria", precio: 10000, stock: 20 },
    { id: "item3", carcasa: "carcasa", precio: 35000, stock: 20 },
    { id: "item4", botonhome: "botonhome", precio: 5000, stock: 40 }
]



//const ListaDeEquipos=[Iphone8]

//crear funcion para armar el total de todos los respuestos que quiera la persona
//nueva array (que se puede agregar y eleminar),objeto nuevo

let carritoIphone = []
localStorage.setItem("carrito", carritoIphone);

const botonesAzul = document.querySelectorAll(".btn-primary");
const botonesRojos = document.querySelectorAll(".btn-danger");

botonesAzul.forEach(boton => {
    boton.addEventListener("click", agregarTotal)
});

function agregarTotal(e) {
    let boton = e.target;
    let padre = boton.parentElement;
    let prodID = padre.getAttribute("id");

    if (prodID == "item1") {
        let agregar = Iphone8.find(elemento => elemento.id == "item1");
        carritoIphone.push(agregar);
    }
    if (prodID == "item2") {
        let agregar = Iphone8.find(elemento => elemento.id == "item2");
        carritoIphone.push(agregar);
    }
    if (prodID == "item3") {
        let agregar = Iphone8.find(elemento => elemento.id == "item3");
        carritoIphone.push(agregar);
    }
    if (prodID == "item4") {
        let agregar = Iphone8.find(elemento => elemento.id == "item4");
        carritoIphone.push(agregar);
    }
    localStorage.setItem("carrito", carritoIphone);

    CalcularTotal(carritoIphone)
}



//eliminar obejeto

botonesRojos.forEach(boton => {
    boton.addEventListener("click", eliminarTotal)
});

function eliminarTotal(e) {
    let boton = e.target;
    let padre = boton.parentElement;
    let prodID = padre.getAttribute("id");

    if (prodID == "item1") {
        carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item1" })
    }
    if (prodID == "item2") {
        carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item2" })
    }
    if (prodID == "item3") {
        carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item3" })
    }
    if (prodID == "item4") {
        carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item4" })
    }
    CalcularTotal(carritoIphone)
    localStorage.setItem("carrito", carritoIphone);
}

//Sumar al total
function CalcularTotal(carritoIphone) {
    total = 0
    carritoIphone.forEach(e => {
        total += e.precio;
    })
    document.getElementById("total").innerText = "Total= " + total
    localStorage.setItem("total", total);
}



// function repuestoIngresado (){

//     switch(prodID){
//       case "pantalla":
//            Iphone8.find(elemento => elemento.nombre = "pantalla");
//             alert(`Tenemos stock disponible ${pantalla.stock} de cada pantalla El total sale $${pantalla.precio}`);
//             break;

//       case "bateria":
//          Iphone8.find(elemento => elemento.nombre = "bateria");
//            alert(`Tenemos stock disponible ${bateria.stock} de cada bateria El total sale $${bateria.precio}`);
//                break;
//         case "carcasa":
//            Iphone8.find(elemento => elemento.nombre = "carcasa");
//             alert(`Tenemos stock disponible ${carcasa.stock} de cada carcasa El total sale $${carcasa.precio}`);
//                   break;
//          case "botohome":
//             Iphone8.find(elemento => elemento.nombre = "botonhome");
//              alert(`Tenemos stock disponible ${botonhome.stock} de cada botonhome El total sale $${botonhome.precio}`);
//                  break;
//          default:
//             alert("El respuesto ingresando es incorrecto");
//     }
// }



