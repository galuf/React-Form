import React from 'react';
//import Formulario from './Formulario.js'
//import Registro from './Registro.js'
import './App.css';

class Registro extends React.Component{
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
        console.log(this.state);   
    }
    handleChange = (e) =>{
        let {name , value} = e.target;
        this.setState({
            [name] : value,
        })

    }

    render(){
        let {usuario, email, sexo, date, password, passConfirm} = this.state;
        let {handleChange} = this;
        return(
            <form action="" className="formulario">
                <input type="text" 
                    name = "usuario"
                    placeholder="Nombre de Usuario"
                    className="caja" id="usuario"
                    value ={usuario}
                    onChange = {handleChange}/>
                <input type="text" 
                    name = "email"
                    placeholder="Correo Electronico"
                    className="caja" id="mailR"
                    value = {email}
                    onChange = {handleChange}/>
                <input type="text" 
                    name = "sexo"
                    placeholder="Sexo"
                    className="caja" id="sexo"
                    value ={sexo}
                    onChange = {handleChange}/>
                <input type="text"
                    name = "date" 
                    placeholder="Fecha de Nacimiento"
                    className="caja" id="date"
                    value ={date}
                    onChange = {handleChange}/>    
                <input type="password"
                    name = "password" 
                    placeholder="Contraseña"
                    className="caja"id="passR"
                    value ={password}
                    onChange = {handleChange}/>
                <input type="password"
                    name = "passConfirm" 
                    placeholder=" Confirmar Contraseña"
                    className="caja"id="passConfirm"
                    value ={passConfirm}
                    onChange = {handleChange}/>    
                <button className="boton" onClick={this.handleClick}>Registrar</button>
                <a onClick={()=>this.props.cambiaModo(true)}>Ya tengo una cuenta</a>
            </form>
        );
    }
}

class Formulario extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        correo : '',
        contraseña: ''
    };
    }

    handleClick = (e)=>{
        e.preventDefault();
        console.log(this.state)
        
    }

    handleChange = (e)=>{
        let {name, value } = e.target
        this.setState({
            [name]: value,
        })
    }

    render(){
        let {correo , contraseña} = this.state;
        let {handleChange} = this;
        return(
            <form action="" className="formulario">
                <input type="text"
                    name = 'correo' 
                    placeholder="Correo Electronico"
                    className="caja" id="mail"
                    value ={correo}
                    onChange = {handleChange}/>
                <input type="password"
                    name = 'contraseña' 
                    placeholder="Contraseña"
                    className="caja"id="pass"
                    value ={contraseña}
                    onChange = {handleChange}/>
                <button className="boton" onClick={this.handleClick}>Iniciar Sesión</button>
                <a onClick={()=>this.props.cambiaModo(false)}>Registrate</a>
            </form>
        );
    }
}

class App extends React.Component {

  state = {
    registro : true
  }

  cambiaModo = (modo)=>{
      this.setState({
          registro: modo,
      })
  }

  render(){
      let {cambiaModo} = this
      return (
        <div className="App"> 
          {this.state.registro ? 
           <Formulario cambiaModo={cambiaModo}/> :
           <Registro cambiaModo={cambiaModo}/> }
          
        </div>
      );
  }
 
}

export default App;
