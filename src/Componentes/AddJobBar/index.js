import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class AddJob extends Component {
    render(){
        return(
            <div className='addJobBar-container'>
                <span>Cadastro de Job</span>

                <Link to="/addjob">    
                    <button type='submit'>Cadastrar</button>
                </Link>

                <span>Informações</span>
                <p>
                    Este é um App Desenvolvido durante o curso de ReactJS com o 
                    Objetivo de cadastrar desenvolvedores do GitHub para que os
                    mesmos possam encontrar vagas de emprego
                </p>
            </div>
        )
    }
}