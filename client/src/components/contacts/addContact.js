import React from 'react'

import Form from './Form'
import {connect} from 'react-redux'
import { startAddContact } from '../../actions/contacts'


class AddContact extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(formData){
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