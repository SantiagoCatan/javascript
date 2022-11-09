export function iphoneX() {
    // /*Apretando el boton de agregar o eliminiar entra en una funcion o en otra , para realizar un total de cada respuesto que quiera comprar*/
    /*constructores*/
    class Pantalla {
        constructor(id, Pantalla, precio, stock) {
            this.id = "item9";
            this.pantalla = "Pantalla";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Bateria {
        constructor(id, Bateria, precio, stock) {
            this.id = "item10";
            this.bateria = "Bateria";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Carcasa {
        constructor(id, Carcasa, precio, stock) {
            this.id = "item11";
            this.carcasa = "Carcasa";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Faceid {
        constructor(id, Faceid, precio, stock) {
            this.id = "item12";
            this.faceid = "Faceid";
            this.precio = precio;
            this.stock = stock;
        }
    }
    //obejetos y lista de productos
    const pantalla = new Pantalla("item9", "Pantalla", 15000, 20);
    const bateria = new Bateria("item10", "Bateria", 20000, 20);
    const carcasa = new Carcasa("item11", "Carcasa", 30000, 20);
    const faceid = new Faceid("item12", "Faceid", 11000, 40)

    const iphoneX = [
        { id: "item9", pantalla: "pantalla", precio: 15000, stock: 20 },
        { id: "item10", bateria: "bateria", precio: 10000, stock: 20 },
        { id: "item11", carcasa: "carcasa", precio: 35000, stock: 20 },
        { id: "item12", botonhome: "botonhome", precio: 5000, stock: 40 }
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
            if (prodID == "item9") {
                let agregar = iphoneX.find(elemento => elemento.id == "item9");
                carritoIphone.push(agregar);
            }
            if (prodID == "item10") {
                let agregar = iphoneX.find(elemento => elemento.id == "item10");
                carritoIphone.push(agregar);
            }
            if (prodID == "item11") {
                let agregar = iphoneX.find(elemento => elemento.id == "item11");
                carritoIphone.push(agregar);
            }
            if (prodID == "item12") {
                let agregar = iphoneX.find(elemento => elemento.id == "item12");
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

            if (prodID == "item9") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item9" })
            }
            if (prodID == "item10") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item10" })
            }
            if (prodID == "item11") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item11" })
            }
            if (prodID == "item12") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item12" })
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
        document.getElementById("total").innerText = "Total= " + total
        localStorage.setItem("total", total);
    }
    //Que aparezca en la pagina , el total o elimine el total 
    const botonesCompra = document.querySelectorAll("#CompraTodo3");
    const botonesLimpiar = document.querySelectorAll("#EliminarTodo3");
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