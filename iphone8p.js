export function iphone8p() {
    // /*Apretando el boton de agregar o eliminiar entra en una funcion o en otra , para realizar un total de cada respuesto que quiera comprar*/
    /*constructores*/
    class Pantalla {
        constructor(id, Pantalla, precio, stock) {
            this.id = "item5";
            this.pantalla = "Pantalla";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Bateria {
        constructor(id, Bateria, precio, stock) {
            this.id = "item6";
            this.bateria = "Bateria";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Carcasa {
        constructor(id, Carcasa, precio, stock) {
            this.id = "item7";
            this.carcasa = "Carcasa";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Botonhome {
        constructor(id, BotonHome, precio, stock) {
            this.id = "item8";
            this.botonHome = "BotonHome";
            this.precio = precio;
            this.stock = stock;
        }
    }
   
    //obejetos y lista de productos
    const pantalla = new Pantalla("item5", "Pantalla", 15000, 20);
    const bateria = new Bateria("item6", "Bateria", 20000, 20);
    const carcasa = new Carcasa("item7", "Carcasa", 30000, 20);
    const botonhome = new Botonhome("item8", "BotonHome", 16000, 20);


    const iphone8p = [
        { id: "item5", pantalla: "pantalla", precio: 15000, stock: 20 },
        { id: "item6", bateria: "bateria", precio: 10000, stock: 20 },
        { id: "item7", carcasa: "carcasa", precio: 35000, stock: 20 },
        { id: "item8", botonhome: "botonhome", precio: 5000, stock: 40 }
    ]

    //crear funcion para armar el total de todos los respuestos que quiera la persona
    //nueva array (que se puede agregar y eleminar),objeto nuevo
    let carritoIphone = []
    localStorage.setItem("carrito", carritoIphone);
    const botonesAzul = document.querySelectorAll(".btn-primary");
    const botonesRojos = document.querySelectorAll(".btn-danger");


    botonesAzul.forEach(boton => {
        boton.addEventListener("click", (e) => {
            let boton = e.target;
            let padre = boton.parentElement;
            let prodID = padre.getAttribute("id");
            if (prodID == "item5") {
                let agregar = iphone8p.find(elemento => elemento.id == "item5");
                carritoIphone.push(agregar);
            }
            if (prodID == "item6") {
                let agregar = iphone8p.find(elemento => elemento.id == "item6");
                carritoIphone.push(agregar);
            }
            if (prodID == "item7") {
                let agregar = iphone8p.find(elemento => elemento.id == "item7");
                carritoIphone.push(agregar);
            }
            if (prodID == "item8") {
                let agregar = iphone8p.find(elemento => elemento.id == "item8");
                carritoIphone.push(agregar);
            }
            localStorage.setItem("carrito", carritoIphone);
            CalcularTotal(carritoIphone)
        })
    });

    //eliminar obejeto
    botonesRojos.forEach(boton => {
        boton.addEventListener("click", (e) => {
            let boton = e.target;
            let padre = boton.parentElement;
            let prodID = padre.getAttribute("id");

            if (prodID == "item5") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item5" })
            }
            if (prodID == "item6") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item6" })
            }
            if (prodID == "item7") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item7" })
            }
            if (prodID == "item8") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item8" })
            }
            CalcularTotal(carritoIphone)
            localStorage.setItem("carrito", carritoIphone);
        })
    });
    //Sumar al total
    function CalcularTotal(carritoIphone) {
        let total = 0;
        carritoIphone.forEach(e => {
            total += e.precio;
        })
        document.getElementById("total2").innerText = "Total= " + total
        localStorage.setItem("total2", total);
    }
    //Que aparezca en la pagina , el total o elimine el total 
    const botonesCompra = document.querySelectorAll("#CompraTodo2");
    const botonesLimpiar = document.querySelectorAll("#EliminarTodo2");
    botonesCompra.forEach(boton => {
        boton.addEventListener("click", ComprarFinal)
    });
    function ComprarFinal(e) {
        let total = Number(localStorage.getItem("total"));
        console.log(total);
        if (total > 0) {
            Swal.fire(`Gracias por tu comprar el total a bonar es $${total}`)
        }
        if (total == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `No seleccionaste ningun respuesto `,
              })
        }

    }
    botonesLimpiar.forEach(boton => {
        boton.addEventListener("click", eliminarTotal)
    });
    function eliminarTotal() {
        carritoIphone = []
        localStorage.clear();
    }
}