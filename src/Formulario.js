import React from 'react';
import { statement } from '@babel/template';

export default class Formulario extends React.Component{
    
    constructor(){
        super();

        this.state = {
            correo : '',
            contraseña: ''
        };
    }

    handleClick = (e)=>{
        e.preventDefault();
        console.log(e);
        this.setState({
            correo: document.getElementById("mail").value,
            contraseña : document.getElementById("pass").value
        },()=>{
            console.log(this.state)
        })   
    }

    render(){
        return(
            <form action="" className="formulario">
                <input type="text" 
                    placeholder="Correo Electronico"
                    className="caja" id="mail"
                    value ={this.state.correo}
                    onChange = {e=>this.setState({correo: e.target.value},()=>console.log(this.state.correo))}/>
                <input type="password" 
                    placeholder="Contraseña"
                    className="caja"id="pass"
                    value ={this.state.contraseña}
                    onChange = {e=>this.setState({contraseña: e.target.value},()=>console.log(this.state.contraseña))}/>
                <button className="boton" onClick={this.handleClick}>Iniciar Sesión</button>
                <a href="">Registrate</a>
            </form>
        );
    }
}