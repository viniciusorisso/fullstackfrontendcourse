import React,{Component} from 'react';
import api from '../../services/api';
import jobIcon from '../../img/job.png';
import io from 'socket.io-client';  

import './index.css';

export default class JobsCard extends Component{

    state = {
        jobs : [],
    }

    async loadData () {
        const response = await api.get('/jobs');
        this.setState({jobs : response.data});

    }

    registerSocket(){
        //const socket = io('http://localhost:3002');
        const socket = io('https://fullstackbackendcouser.herokuapp.com/')
        socket.on('newJob', newJob=>{
            this.setState({jobs : [newJob,...this.state.jobs]});
        });
    }
    
    componentDidMount() {
        this.registerSocket();
        this.loadData();
    }

    render(){
        return(
            <div className='main-container'>
                {this.state.jobs.map(jobs =>(
                    <div className="jobs-container" key = 'jobs._id'>
                        <img src={jobIcon} alt=''/>
                        <div>
                            <span>{jobs.description}</span>
                            <p>{jobs.company_address}</p>
                            <p>{jobs.company}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }
}