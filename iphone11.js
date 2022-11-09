export function iphone11() {
    // /*Apretando el boton de agregar o eliminiar entra en una funcion o en otra , para realizar un total de cada respuesto que quiera comprar*/
    /*constructores*/
    class Pantalla {
        constructor(id, Pantalla, precio, stock) {
            this.id = "item13";
            this.pantalla = "Pantalla";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Bateria {
        constructor(id, Bateria, precio, stock) {
            this.id = "item14";
            this.bateria = "Bateria";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Carcasa {
        constructor(id, Carcasa, precio, stock) {
            this.id = "item15";
            this.carcasa = "Carcasa";
            this.precio = precio;
            this.stock = stock;
        }
    }
    class Faceid {
        constructor(id, Faceid, precio, stock) {
            this.id = "item16";
            this.faceid = "Faceid";
            this.precio = precio;
            this.stock = stock;
        }
    }
    //obejetos y lista de productos
    const pantalla = new Pantalla("item13", "Pantalla", 15000, 20);
    const bateria = new Bateria("item14", "Bateria", 20000, 20);
    const carcasa = new Carcasa("item15", "Carcasa", 30000, 20);
    const faceid = new Faceid("item16", "Faceid", 11000, 40)

    const iphone11 = [
        { id: "item13", pantalla: "pantalla", precio: 15000, stock: 20 },
        { id: "item14", bateria: "bateria", precio: 10000, stock: 20 },
        { id: "item15", carcasa: "carcasa", precio: 35000, stock: 20 },
        { id: "item16", botonhome: "botonhome", precio: 5000, stock: 40 }
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
            if (prodID == "item13") {
                let agregar = iphone11.find(elemento => elemento.id == "item13");
                carritoIphone.push(agregar);
            }
            if (prodID == "item14") {
                let agregar = iphone11.find(elemento => elemento.id == "item14");
                carritoIphone.push(agregar);
            }
            if (prodID == "item15") {
                let agregar = iphone11.find(elemento => elemento.id == "item15");
                carritoIphone.push(agregar);
            }
            if (prodID == "item16") {
                let agregar = iphone11.find(elemento => elemento.id == "item16");
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

            if (prodID == "item13") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item13" })
            }
            if (prodID == "item14") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item14" })
            }
            if (prodID == "item15") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item15" })
            }
            if (prodID == "item16") {
                carritoIphone = carritoIphone.filter(elemento => { return elemento.id !== "item16" })
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
    const botonesCompra = document.querySelectorAll("#CompraTodo4");
    const botonesLimpiar = document.querySelectorAll("#EliminarTodo4");
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