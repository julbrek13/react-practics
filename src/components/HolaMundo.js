//los componentes tienen importaciones
import React from "react";

//siempre e
export default function HolaMundo(){
    
    return( <div>
        <h1>
            Hola Mundo
        </h1>
        <h2>
            Julián Macarron
        </h2>
   </div>);
}
//recordemos que un fichero no puede tener dos export "defaults" solo uno
export function AdiosMundo(){

    return(<div>
        <h3>Adios</h3>
    </div>);
}