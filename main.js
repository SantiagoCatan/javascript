//Estoy mularizando para traer del JSON , array entera o de otra de manera seria llamando una sola vez al JSON  y retornando varios Array con los respectivos IPHONE 

import { iphone8 } from "./iphone8.js"
import { iphone8p } from "./iphone8p.js"
import { iphoneX } from "./iphoneX.js"
import { iphone11 } from "./iphone11.js"

//Separar del json por RESPUESTOS que requiere cada modelo
const obtenerDatos = async (type)=>{
    let iphone=[]
    let result;
    try{
        let response=await fetch("./DatosJson.Json")
        result=await response.json()
    
        }
    catch(error){
    console.log(error)
    }
    result=result.filter(r =>r.type===type);
    iphone.push(result);
    return result
}
let iphone8Array=await obtenerDatos("iphone8");
let iphone8PArray=await obtenerDatos("iphone8P");
let iphoneXArray=await obtenerDatos("iphoneX");
let iphone11Array=await obtenerDatos("iphone11");

iphone8(iphone8Array)
iphone8p(iphone8PArray)
iphoneX(iphoneXArray)
iphone11(iphone11Array)
