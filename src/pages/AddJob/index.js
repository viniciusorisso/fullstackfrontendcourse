import React,{Component} from 'react';
import Header from '../../Componentes/Header';
import api from '../../services/api';
import './index.css';

export default class AddJob extends Component{

    state = {
        description : '',
        company : '',
        company_address : ''
    }

    handleSubmit = async event =>{
        event.preventDefault();
        await api.post('/jobs',{
            description : this.state.description,
            company : this.state.company,
            company_address : this.state.company_address,
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
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <div className='job-container'>
                        <h1>Cadastrar novo Job</h1>
                        <span>Descrição</span>
                        <input type='text'
                               name='description'
                               value={this.state.description}
                               onChange={this.handleOnChange}/>

                        <span>Empresa</span>
                        <input type='text'
                               name='company'
                               value={this.state.company}
                               onChange={this.handleOnChange}/>

                        <span>Local</span>
                        <input type='text'
                               name='company_address'
                               value={this.state.company_address}
                               onChange={this.handleOnChange}/>

                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        )
    }
}    