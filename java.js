/* Menu navegable , dando como opcion 1 como registro de nombre,apellido y dni*/




    
    
    
   
let opcion ;

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

