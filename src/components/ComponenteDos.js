import React from "react";
import fucionalUno from '../img/compo-fun-regu.png'
import fucionalDos from '../img/compo-arro-fun.png'
import fucionalTres from '../img/fun-fuera-compo.png'
import fucionalCuatro from '../img/desestruc.png'

function ComponenteDos () {
    return <> <div>
    <h2> <strong> 02.- COMPONENTE CON F() </strong> </h2>
        <p> 
        funciones que devuelven elementos React y no tienen estado interno propio. Son más sencillos, eficientes y favorecen 
        la reutilización de código. Con la introducción de los Hooks en React 16.8, los componentes funcionales han ganado 
        aún más popularidad. <br></br>
        Si se define el componente como una función, las props se reciben como un parámetro de la función: 
        </p>
        <details>
            <summary> 
                CREACIÓN COMPONENTE FUNCIONAL
            </summary>
            <ul>
                <li>Con F() regulares.  <br /> 
                <img src={fucionalUno} alt="Con F() regulares" /> 
                </li>
                <li>Con Arrow function. <br />
                <img src={fucionalDos} alt="Con F() regulares" /> 
                </li>
                <li> Con una función declarada fuera del componente. <br /> 
                <img src={fucionalTres} alt="Con F() regulares" /> 
                </li>
                <li> Usando destructuración. <br /> 
                <img src={fucionalCuatro} alt="Con F() regulares" /> 
                </li>
                
            </ul>



        </details>
        </div>
        </>
}

export default ComponenteDos;