import React, { Component } from 'react';
import './index.css';
import api from '../../services/api';

export default class GitCard extends Component {
    state = {
        dados: [],
    }

    async loadData() {
        const response = await api.get('/users');
        this.setState({ dados: response.data });
        console.log(response);
    }

    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <div className='main-container'>
                {
                    this.state.dados.map(d => (
                        <a href={`/detail/${d._id}`} key={d._id}>
                            <div className='card'>  
                                <img id="avatar" src={d.avatar_url} alt='' key='d._id'/>
                                <div id='info'>
                                    <span>{d.login}</span>
                                    <p>{d.company}</p>
                                    <p>{d.bio}</p>
                                </div>
                            </div>
                        </a>
                ))}
            </div>
        )
    }
}