<div class="container">
    <h1 align="center">MIS APUNTES 📝 DE <img src="https://media3.giphy.com/media/CuIm1Mi2xGhfa5vu2L/giphy.gif" title="REACT" alt="REACT" width="100" height="30" /></h1>
  </div>


  <p>Este proyecto fue realizado para fortalecer mis conocimientos en React, abordando los temas más importantes de este versatil Framework. Me he guiado por el canal de youtube  
  <a href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk" target="_blank" rel="noopener noreferrer"> ReactJS - Jonathan Mircha </a>,  
  <a href="https://es.react.dev/" target="_blank" rel="noopener noreferrer"> documentación oficial de React </a> además de <a href="https://www.reactjs.wiki/" target="_blank" rel="noopener noreferrer"> React-Js-Wiki preguntas & respuestas (comunidad de midulive) </a> </p>

  <h3>1. Componentes con Clase</h3>
  <details> <summary><code> 🔽¿Qué se hizo y cómo se hizo? 🔽</summary> En esta sección se encuentra un ejemplo de un componente implementado con una clase de JavaScript. Los componentes de clase son una forma antigua de crear componentes en React, y en este ejemplo se muestra el cómo se define y utiliza un componente de esta manera. </code> <br> </br>
  <ol>
    <li>Se importó la biblioteca <code>React</code> y se importaron las imágenes necesarias para su uso en el componente.</li>
    <li>Se definió una función llamada <code>ComponenteDos</code> que representa el componente funcional.</li>
    <li>El componente contiene elementos HTML y texto para proporcionar información sobre los componentes funcionales en React.</li>
    <li>Las imágenes se importaron y se asignaron a variables para su uso posterior en el componente.</li>
    <li>Las imágenes se insertaron en el componente utilizando la etiqueta <code>&lt;img&gt;</code> y se especificó la ruta de la imagen utilizando las variables correspondientes.</li>
    <li>Al final del código, se exportó el componente <code>ComponenteDos</code> utilizando la sintaxis <code>export default ComponenteDos</code>.</li>
  </ol>
</details>

  <h3>2. Componentes Funcionales</h3>
  <details>
  <summary><code> 🔻¿Qué se hizo y cómo se hizo? 🔻</summary> En esta sección se presenta un componente implementado como una función de React. Los componentes funcionales son la forma moderna de crear componentes en React y se utilizan ampliamente en el desarrollo actual. El ejemplo muestra cómo se define y utiliza.</code><br> </br>
  <ol>
    <li>Se importó la biblioteca <code>React</code>.</li>
    <li>Se definió un componente funcional llamado <code>Propiedades</code>.</li>
    <li>El componente recibe <code>props</code> como parámetro.</li>
    <li>El componente contiene elementos HTML y texto que utilizan las <code>props</code> para mostrar valores dinámicos.</li>
    <li>Las <code>props</code> se utilizan dentro de las etiquetas <code>{}</code> para insertar los valores dinámicos en el contenido del componente.</li>
    <li>Se utiliza la sintaxis <code>props.propiedad ? "✅" : "✖️"</code> para renderizar un emoji de "✅" o "✖️" dependiendo del valor booleano de la <code>props.boolean</code>.</li>
    <li>Se utilizan métodos de manipulación de arrays, como <code>.join(", ")</code> y <code>.map(props.function)</code>, para mostrar los valores de las <code>props.arr</code> de manera formateada.</li>
    <li>Se accede a los valores de un objeto utilizando la sintaxis <code>props.obj.nombre</code> y <code>props.obj.correo</code>.</li>
    <li>Se utiliza la <code>props.elemento</code> directamente en la escritura literal del elemento.</li>
    <li>Se utiliza la <code>props.componenteReact</code> para mostrar otro componente React dentro de <code>{}</code>.</li>
    <li>Se exporta el componente <code>Propiedades</code> utilizando la sintaxis <code>export default Propiedades</code>.</li>
    <li>Se definen valores predeterminados para las <code>props</code> utilizando <code>Propiedades.defaultProps</code>.</li>
  </ol>
</details>
 
  <h3>3. Propiedades</h3>  
  <details>
  <summary><code> 🔻¿Qué se hizo y cómo se hizo? 🔻</summary> Aquí se muestra cómo pasar propiedades o datos a los componentes de React. El componente <code>Propiedades.js</code> demuestra diferentes tipos de propiedades que se pueden utilizar, como cadenas de texto, números, booleanos, arreglos y objetos. Además, se muestra cómo acceder a estas propiedades dentro del componente. </code> <br> </br>
  <ol>
    <li>Importación de la biblioteca <code>React</code>.</li>
    <li>Declaración de una función llamada <code>Propiedades</code> que representa el componente funcional.</li>
    <li>El componente utiliza las <code>props</code> para mostrar valores dinámicos en elementos HTML como <code>&lt;h2&gt;</code>, <code>&lt;p&gt;</code> y <code>&lt;bdo&gt;</code>.</li>
    <li>Se utiliza la sintaxis <code>{props.propiedad}</code> para acceder a los valores de las <code>props</code> y mostrarlos en el contenido del componente.</li>
    <li>Se define la propiedad <code>defaultProps</code> para establecer valores predeterminados para las <code>props</code> en caso de que no se proporcionen al componente.</li>
    <li>Se exporta el componente <code>Propiedades</code> utilizando la sintaxis <code>export default Propiedades</code>.</li>
  </ol>
</details>

  <h3>4. ESTADOS </h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻</summary> En esta sección se explora el concepto de estados en React. El componente <code>Estado.js</code> muestra cómo se puede utilizar el estado en un componente de React para almacenar y manejar datos que pueden cambiar a lo largo del tiempo. También se demuestra cómo actualizar el estado y reflejar los cambios en la interfaz de usuario. </code> <br> </br>
  <ol>
    <li>Se importa la biblioteca React y el módulo Component desde React.</li>
    <li>Se define la clase "<code>Estado</code>" que extiende la clase "<code>Component</code>" de React.</li>
    <li>Se implementa el constructor de la clase donde se inicializa el estado con la propiedad "<code>contador</code>" y el valor de 0.</li>
    <li>Se define el método "<code>render</code>" que devuelve el contenido del componente utilizando JSX.</li>
    <li>Se muestra información sobre los estados en React, incluyendo su inmutabilidad, la necesidad de utilizar "<code>setState</code>" para modificarlos y su naturaleza asíncrona.</li>
    <li>Se menciona que para este módulo se utiliza un componente de clase, pero se indica que una forma menos "verbosa" de utilizar estados es mediante componentes funcionales y los hooks de React.</li>
    <li>Se muestra el valor del estado "<code>contador</code>" en un párrafo utilizando "<code>{this.state.contador}</code>".</li>
    <li>Se comenta el código que utiliza "<code>setInterval</code>" para incrementar el valor del contador cada segundo debido a que genera un error en este contexto de componente de clase.</li>
    <li>Se exporta el componente "<code>Estado</code>" para poder ser utilizado en otros archivos de la aplicación.</li>
  </ol>
</details> 
   
  <h3>5. RENDERIZADO CONDICIONAL </h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> Esta sección muestra cómo renderizar componentes de forma condicional en React. El <code> conditional render </code> se refiere a la capacidad de mostrar o renderizar diferentes elementos o componentes en función de una condición determinada. </code> <br> </br>
  <ul>
    <li>Se importa la biblioteca React y se importan los componentes "<code>LoggIn</code>" y "<code>LogOut</code>".</li>
    <li>Se define el componente "<code>LoggIn</code>" que muestra un mensaje de inicio de sesión.</li>
    <li>Se define el componente "<code>LogOut</code>" que muestra un mensaje de cierre de sesión.</li>
    <li>Se exporta el componente "<code>RenderizadoCondicional</code>" que es una clase de React que extiende la clase "<code>Component</code>".</li>
    <li>En el constructor de la clase, se inicializa el estado con una propiedad llamada "<code>sesion</code>" con el valor inicial de "<code>true</code>".</li>
    <li>Se define el método "<code>handleChange</code>" que se ejecuta cuando se cambia el valor del input y actualiza el estado "<code>sesion</code>" según el valor ingresado.</li>
    <li>En el método "<code>render</code>", se utiliza una expresión ternaria para renderizar el componente "<code>LoggIn</code>" o "<code>LogOut</code>" dependiendo del valor del estado "<code>sesion</code>".</li>
    <li>Se muestra un input de texto donde se puede introducir "<code>true</code>" o "<code>false</code>" para cambiar el estado "<code>sesion</code>" y ver el renderizado condicional en acción.</li>
  </ul>
</details>

  <h3>6. RENDERIZADO DE ELEMENTOS  </h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> proceso mediante el cual se representan y muestran en la interfaz de usuario los elementos o componentes de React. </code> <br> </br>
     <ul>
    <li>Se crea un archivo JSON llamado <code>Data.json</code> que contiene datos de pacientes de psicología. Este archivo simula una estructura de datos con información relevante sobre los pacientes, como nombre, diagnóstico, gravedad y tipo de intervención.</li>
    <li>Se importa el módulo <code>Data.json</code> en el archivo de código.</li>
    <li>Se define el componente funcional <code>ElementoLista</code> que recibe las propiedades y muestra los datos recibidos en elementos de presentación.</li>
    <li>Se define el componente de clase <code>RenderizadoElementos</code> que extiende la clase Component de React.</li>
    <li>Dentro del componente <code>RenderizadoElementos</code>, se implementa el método <code>render()</code> que devuelve el contenido JSX que será renderizado en la interfaz de usuario.</li>
    <li>Se utiliza el archivo JSON importado para acceder a la propiedad <code>ejemplos</code>, que contiene los datos simulados de los pacientes de psicología.</li>
    <li>Se utiliza el método <code>map</code> en la propiedad <code>ejemplos</code> del objeto importado para iterar sobre los elementos del arreglo.</li>
    <li>Dentro de cada iteración, se instancia el componente <code>ElementoLista</code>, pasándole las propiedades del elemento actual y una clave única utilizando la propiedad <code>key</code>. Esto permitirá renderizar múltiples elementos <code>ElementoLista</code> con los datos simulados de los pacientes.</li>
  </ul>

<h3>7. EVENTOS </h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻</summary>Los eventos son acciones o interacciones que ocurren en los elementos de la interfaz de usuario, como hacer clic en un botón, escribir en un campo de texto o desplazarse por una lista. Los eventos en React son muy similares a los eventos en HTML y JavaScript, pero tienen algunas diferencias y características específicas de React. <br />
En React, los eventos son objetos que se pasan como parámetros a las funciones de controlador de eventos. Estos objetos contienen información sobre el evento que ocurrió, como el tipo de evento, el elemento objetivo y los datos relevantes asociados. Al definir funciones de controlador de eventos en los componentes de React, podemos responder a las acciones del usuario y actualizar el estado del componente o realizar otras operaciones. <br /> <br />
Algunos ejemplos de eventos en React incluyen: a) onClick, b) onChange, c) onSubmit, d) onMouseOver, o e) onKeyDown </code> <br /> <br />
<ol>
  <li>Se importa <code>React</code> y <code>Component</code> desde el paquete "react".</li>
  <li>Se define la clase de componente <code>EventosesES6</code> que hereda de <code>Component</code>.</li>
  <li>En el constructor de <code>EventosesES6</code>, se inicializa el estado del componente con un contador y un campo de texto vacío.</li>
  <li>Los métodos <code>sumar</code>, <code>restar</code> y <code>handleChange</code> se enlazan con el contexto <code>this</code> utilizando <code>bind</code>.</li>
  <li>En el método <code>render()</code>, se devuelve el JSX que se va a renderizar en el DOM.</li>
  <li>Se asignan eventos a los botones y al input utilizando los atributos <code>onClick</code> y <code>onChange</code>. Estos eventos están asociados a los métodos correspondientes: <code>restar</code>, <code>sumar</code> y <code>handleChange</code>.</li>
  <li>Los métodos <code>sumar</code>, <code>restar</code> y <code>handleChange</code> actualizan el estado del componente utilizando <code>setState</code>.</li>
  <li>Se define la clase de componente <code>EventosesES7</code> que también hereda de <code>Component</code>.</li>
  <li>En lugar de utilizar un constructor, se utiliza la sintaxis de inicialización de estado de clase para definir el estado del componente.</li>
  <li>Los métodos <code>multiplicar</code> y <code>dividir</code> se definen utilizando arrow functions. Estos métodos actualizan el estado del componente mediante <code>setState</code>.</li>
  <li>En el método <code>render()</code> de <code>EventosesES7</code>, se devuelve el JSX correspondiente.</li>
  <li>Se define el componente funcional <code>Boton</code>, que recibe <code>myOnClick</code> como una prop y muestra un botón.</li>
  <li>Se define la clase de componente <code>MasSobreEventos</code>.</li>
  <li>El método <code>handleClick</code> se define para mostrar un mensaje en la consola cuando se produce un evento.</li>
  <li>En el método <code>render()</code> de <code>MasSobreEventos</code>, se devuelve el JSX correspondiente.</li>
  <li>Se utiliza el evento <code>onClick</code> en un botón para llamar a <code>handleClick</code> con un mensaje como parámetro.</li>
  <li>También se utiliza el componente <code>Boton</code>, pasando <code>handleClick</code> como prop <code>myOnClick</code>.</li>
</ol>

<h3>8.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<h3>9.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<h3>10.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<h3>11.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<h3>12.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<h3>13.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<h3>14.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<h3>15.</h3>
<details>
  <summary>
    <code> 🔻¿Qué se hizo y cómo se hizo? 🔻  </summary> 
     </code> <br> </br>    
---

<hr></hr>
   <div align="right">
<p align="right"> Made with &#128153; plenty of blue love that comes from 👉🏽 <img src="https://media3.giphy.com/media/fihL7vZxPq5kwB89mH/200.gif" title="REACT" alt="REACT" width="40" height="40"/>   </p> 
  <em><sup> <a href="https://github.com/devpsicoamgg/devpsicoamgg/blob/main/copyright">Copyright &#169 devpsicoamgg</a> </sup></em>
  <br>
  <em><a href="https://www.mozilla.org/en-US/about/manifesto/">Manifesto MDN</a></em>
</div>
</body>
