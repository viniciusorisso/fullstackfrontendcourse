import React,{Component} from 'react';

import GitCard from '../../Componentes/GitCard';
import Header from '../../Componentes/Header';
import AddUserBar from '../../Componentes/AddUserBar';
import JobsCard from '../../Componentes/JobsCard';
import AddJobBar from '../../Componentes/AddJobBar';

import './index.css';

export default class Dashboard extends Component{
    render(){
        return(
           <div>
                <Header/>
                <div className='dashboard-container'>
                    <div className='asodu'>        
                        <AddUserBar/>
                        <AddJobBar/>
                    </div>
                    <GitCard/>
                    <JobsCard/>
                </div>
           </div>
        )
    }
}