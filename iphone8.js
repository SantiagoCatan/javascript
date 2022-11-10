
export async function iphone8(Iphone8) {
    // /*Apretando el boton de agregar o eliminiar entra en una funcion o en otra , para realizar un total de cada respuesto que quiera comprar*/
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
    const faceid = new Faceid("item5", "Faceid", 11000, 40)

   // const Iphone8 =await obtenerDatos();


    //crear funcion para armar el total de todos los respuestos que quiera la persona
    //nueva array (que se puede agregar y eleminar),objeto nuevo
    let carritoIphone = []
    localStorage.setItem("carrito", carritoIphone);
    const botonesAzul = document.querySelectorAll(".btn-primary");
    const botonesRojos = document.querySelectorAll(".btn-danger");

    botonesAzul.forEach(boton => {
        boton.addEventListener("click", async (e) => {
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
        })
    });

    //eliminar obejeto
    botonesRojos.forEach(boton => {
        boton.addEventListener("click", (e) => {
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
    const botonesCompra = document.querySelectorAll("#CompraTodo");
    const botonesLimpiar = document.querySelectorAll("#EliminarTodo");
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

