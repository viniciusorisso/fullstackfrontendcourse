import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class AddUserBar extends Component{

    render(){
        return(
            <div className='addUserBar-container'>
                <span>Cadastro de Desenvolvedor</span>

                <Link to="/adduser">    
                    <button type='submit'>Cadastrar</button>
                </Link>

            </div>
        )
    }
}