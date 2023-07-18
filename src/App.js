import React from "react";
import Componente from './components/Componente.js'
import ComponenteDos from "./components/ComponenteDos.js";
import Propiedades from "./components/Propiedades.js";
import Estado from "./components/Estado.js";
import RenderizadoCondicional from "./components/RenderizadoCondicional.js";
import RenderizadoElementos from "./components/RenderizadoElementos.js";
import { EventosesES6, EventosesES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionEntreComponentes.js";
import CicloDeVida from "./components/CicloVida.js";
import AjaxApis from "./components/AjaxApis.js";
import Pokemon from "./components/Pokemon.js";
import Hooks from "./components/Hooks.js";
import RelojHooks from "./components/HooksRelog.js"
import ContadorHooks from "./components/HooksRelog.js"
import AlertaEnEnter from "./components/UseEfect.js";
import AjaxHooks from "./components/AjaxHooks.js";
import HooksPersonalizados from "./components/HooksPersonalizados.js";
import Formularios from "./components/Formularios.js";
import Snippets from "./components/Snippets.js";


function App() {
  return (
    <>
    <div className="App">
      
      <header className="App-header">
<details> <summary> 01.- COMPONENTES CON CLASE </summary>
        <section className="componente-1"> 
          <Componente />
          <hr></hr>
          </section>
</details>

<details> <summary> 02.- COMPONENTES FUNCIONALES </summary>
        <section className="componente-2"> 
          <ComponenteDos />
          <hr></hr>
        </section>
</details>

<details> <summary> 03.- PROPIEDADES </summary>
        <section className="propiedades"> 
           <Propiedades 
           componenteReact={<ComponenteDos/>}  
           cadena= "Puede ser cadena de strings.  "  
           numero= {20} 
           boolean={1} 
           arr={[1,2,3]}  
           obj={{nombre: "Betto", correo: "psico.amgg@gmail.com"}} 
           elemento={<i><b>Esto es un elemento de react</b> </i>} 
           function={(num) => num + num}
           />
           <hr></hr>
        </section>
</details>

<details> <summary> 04.- ESTADOS </summary>
        <section className="estados"> 
          <Estado />
          <hr></hr>
        </section>
</details>

<details> <summary> 05.- RENDERIZADO CONDICIONAL </summary>
<section className="renderizado-condiconal"> 
          <RenderizadoCondicional />
          <hr></hr>
        </section>
</details>

<details> <summary> 06.- RENDERIZADO ELEMENTOS </summary>
<section className="renderizado-condiconal"> 
          <RenderizadoElementos />
          <hr></hr>
        </section>
</details>


<details> <summary> 07.- EVENTOS </summary>
<section className="Eventos"> 
          <EventosesES6 />
          <hr></hr>
          <EventosesES7 />
          <hr></hr>
          <MasSobreEventos />
          <hr></hr>
        </section>
</details>


<details> <summary> 08.- COMUNICACIÓN ENTRE COMPONENTES </summary>
<section className="comunicacion-componentes"> 
          <Padre />
          <hr></hr>
        </section>
</details>



<details> <summary> 09.- CICLO DE VIDA DE LOS COMPONENTES DE CLASE </summary>
<section className="ciclo-vida"> 
          <CicloDeVida />
          <hr></hr>
        </section>
</details>

<details> <summary> 10A.- PETICIONES ASINCRONAS EN COMPONENTES DE CLASE - Versión POKEMÓN </summary>
<section className="peticiones-apis"> 
          <Pokemon />
          <hr></hr>
        </section>
</details>

<details> <summary> 10B.- PETICIONES ASINCRONAS EN COMPONENTES DE CLASE - Versión NASA </summary>
<section className="peticiones-apis"> 
          <AjaxApis />
          <hr></hr>
        </section>
</details>

<details> <summary> 11.- HOOKS </summary>
<section className="hooks"> 
          <Hooks />
          <hr></hr>
        </section>
</details>

<details> <summary> 12.- HOOK 👉🏽👉🏼 <i> useState </i> </summary>
<section className="use-efect"> 
          <ContadorHooks />
          <hr></hr>
        </section>
</details>

<details> <summary> 13.- HOOK 👉🏽👉🏼 <i> useEffect </i> </summary>
<section className="use-estate"> 
          <AlertaEnEnter />
          <hr></hr>
        </section>
</details>

<details> <summary> 14.- HOOK 👉🏽👉🏼 <i> useEffect </i> </summary>
<section className="use-estate"> 
          <RelojHooks />
          <hr></hr>
        </section>
</details>
        
<details> <summary> 15.- PETICIONES ASÍNCRONAS CON HOOKS - RICK AND MORTY </summary>
<section className="peticionesasincronas-apis"> 
          <AjaxHooks />
          <hr></hr>
        </section>
</details>
        
<details> <summary> 16.- CUSTOM HOOKS </summary>
<section className="custom-hooks"> 
          <HooksPersonalizados />
          <hr></hr>
        </section>
</details>
        
        
<details> <summary> xx.- REFERENCIAS </summary>
<section className="referencias"> 
          <hr></hr>
        </section>
</details>
        
<details> <summary> 18.- FORMULARIOS </summary>
<section className="formularios">           
          <Formularios />
          <hr></hr>
        </section>
</details>
        
<details> <summary> 19.- CSS STYLES </summary>
<section className="cssstyles"> 
          
          <hr></hr>
        </section>
</details>
        

        
<details> <summary> 20.- Snippets Simple React Snippets </summary>
<section className="dev.tools"> 
          <Snippets />           
          <hr></hr>
        </section>
</details>
        



      </header>
    </div>
    </>
  );
}

export default App;
