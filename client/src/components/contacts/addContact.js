import React from 'react'
//import axios from '../../config/axios'
import Form from './Form'
import {connect} from 'react-redux'
import { startAddContact } from '../../actions/contacts'


class AddContact extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(formData){
        // axios.post('/contacts',formData,{
        //     headers:{
        //         'x-auth':localStorage.getItem('authToken')
        //     }
        // })
        // .then(response=>{
        //     // console.log(response.data)
        //     this.props.history.push('/contacts')
        // })
        this.props.dispatch(startAddContact(formData,this.props))
    }
    render(){
        return (
            <div>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default connect()(AddContact)