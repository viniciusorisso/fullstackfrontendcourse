import React,{Component} from 'react';
import Header from '../../Componentes/Header';
import api from '../../services/api';
import './index.css';

export default class AddUser extends Component{
    
    state = {
        userGit : '',
        linguagem : '',
        sexo : '',
        experiencia : ''
    }

    handleSubmit = async event =>{
        event.preventDefault();
        await api.post('/user',{
            userGit : this.state.userGit,
            linguagem : this.state.linguagem,
            sexo : this.state.sexo,
            experiencia : this.state.experiencia
        });
        this.props.history.push('/dashboard');
    }

    handleOnChange = event =>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
    }
    render(){
        return (
            <div>
                <Header></Header>
                <form onSubmit={this.handleSubmit}>
                    <div className="addUser-container">
                        <h1>Cadastrar Desenvolvedor</h1>
                        <span>Github Username</span>
                        <input type="text" name="userGit" value={this.state.userGit} onChange={this.handleOnChange}/>
                        
                        <span>Linguagem</span>
                        <select type='text'
                                name='linguagem'
                                value={this.state.linguagem}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='JavaScript'>JavaScript</option>
                            <option value='Python'>Python</option>
                            <option value='C++'>C++</option>
                        </select>

                        <span>Sexo</span>
                        <select type='text'
                                name='sexo'
                                value={this.state.sexo}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='Masculino'>Masculino</option>
                            <option value='Feminino'>Feminino</option>
                        </select>

                        <span>Experiencia</span>
                        <select type='text'
                                name='experiencia'
                                value={this.state.experiencia}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='Junior'>Junior</option>
                            <option value='Pleno'>Pleno</option>
                            <option value='Senior'>Senior</option>

                        </select>

                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        )
    }
}