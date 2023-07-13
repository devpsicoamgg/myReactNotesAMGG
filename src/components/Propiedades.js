import React from "react";

export default function Propiedades (props) {
    return (
        <>
        <div> 
        <h2> <strong> {props.titulo} </strong> </h2>
        <p>{props.descripcion},  <br></br>
         {props.concepto}, <br></br>
         {props.conceptoDos}. <br></br> </p> 
        <ul> 
            <details> 
                <summary> Generalidades de las props: </summary> <br></br>  
        <bdo> {props.cadena} - Cadena de Strings  </bdo> <br></br>
        <bdo> {props.numero} - Numero entre corchetes </bdo> <br></br>
        <bdo> {props.boolean?"✅":"✖️"} - Boolen renderizado sería 1 o 0 por eso se evalua una condicion </bdo> <br></br>
        <bdo> {props.arr.join(", ")} - Arr con join para mostrar , entre elementos </bdo> <br></br>
        <bdo> {props.arr.map(props.function).join(", ")} - Arr lo recorro con map y hago una f() en este caso dobles la f()   </bdo> <br></br>
        <bdo> {props.obj.nombre + " - " + props.obj.correo } - Obj donde accedemos como props.OBJ.PROP para que se acceda al value() </bdo> <br></br>
        <bdo> {props.elemento} - Escritura literal </bdo> <br></br>
        <bdo> {props.componenteReact} - traigo otro compo que puede ser un boton, contenido, etc</bdo> <br></br>
        </details>
        </ul>
           

        </div>
        </>
        );
} 

Propiedades.defaultProps = {
 titulo: "03.- PROPIEDADES",
 descripcion: "Las propiedades son valores que recibe el hijo del padre, de todo recibe.",
 concepto: "Son inmutables, de solo lectura. Si las props vienen por el constructor de clase las props vienen como this.props.",
 conceptoDos: "Dentro del componente, por la app principal o por el lado de un obj que las recibe, en el modulo o fuera."
}
