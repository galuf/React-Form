import React from 'react';


export default class Registro extends React.Component{

    constructor(){
        super();

        this.state = {
            usuario:'',
            email:'',
            sexo:'',
            date:'',
            password:'',
            passConfirm:'' 
        }
    }

    handleClick = (e)=>{
        e.preventDefault();
        this.setState({
            usuario: document.getElementById("usuario").value,
            email: document.getElementById("mailR").value,
            sexo: document.getElementById("sexo").value,
            date: document.getElementById("date").value,
            password: document.getElementById("passR").value,
            passConfirm:document.getElementById("passConfirm").value
        },()=>{
            console.log(this.state)
        })   
    }

    render(){
        return(
            <form action="" className="formulario">
                <input type="text" 
                    placeholder="Nombre de Usuario"
                    className="caja" id="usuario"/>
                <input type="text" 
                    placeholder="Correo Electronico"
                    className="caja" id="mailR"/>
                <input type="text" 
                    placeholder="Sexo"
                    className="caja" id="sexo"/>
                <input type="text" 
                    placeholder="Fecha de Nacimiento"
                    className="caja" id="date"/>    
                <input type="password" 
                    placeholder="Contraseña"
                    className="caja"id="passR"/>
                <input type="password" 
                    placeholder=" Confirmar Contraseña"
                    className="caja"id="passConfirm"/>    
                <button className="boton" onClick={this.handleClick}>Registrar</button>
                <a href="../public/index.html">Ya tengo una cuenta</a>
            </form>
        );
    }
}
