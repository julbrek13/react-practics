import React from "react";
//las propiedades van dentro de los parametros de las funciones
export default function Saludar(props){
    return(
        
//encerramos entre llaves para que sepa que es variable.
//de esta manera podemos enviar propiedadesd desde la app.js 
        <div>
            <h2>
                
                Hola {props.userInfo.name}, {props.userInfo.edad}, {props.userInfo.color} 
            </h2>
        </div>
    );
}