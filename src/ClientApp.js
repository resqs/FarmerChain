import React, { Component } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import Bottombar from './components/bottombar/Bottombar'
import { withRouter } from 'react-router-dom'

import './App.css';

import {connect} from 'react-redux'
import { getUser } from './Actions/UserActions';



class ClientApp extends Component{
    componentWillMount(){
        this.props.getUser()
    }


    render(){
        return(
            < div className="app-layout">
                    <Sidebar/>
                    {!this.props.user.loading?<div className='main-layout'>
                        <Header/>
                        <Dashboard/>
                    </div>:''}
                     {!this.props.user.loading?<Bottombar/>:''}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.user };
}
export default withRouter(connect(mapStateToProps,{getUser})(ClientApp))