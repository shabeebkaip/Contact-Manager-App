import React from 'react'
import axios from '../../config/axios'
import Form from './Form'
import { startEditContact, gettingContact } from '../../actions/contacts'
import {connect} from 'react-redux'

 class EditContact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contact:{}
        }
    }

    componentDidMount=()=>{
        const id=this.props.match.params.id
        axios.get(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            const contact=response.data
            this.setState({contact})
        })
       
    }

    handleSubmit=(formData)=>{
        const id=this.props.match.params.id
        axios.put(`/contacts/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                this.props.history.push(`/contacts/${response.data._id}`)
            }
        })
        .catch(err=>{
            alert(err)

        })
        // this.props.dispatch(startEditContact(formData,this.props))

    }
   
    

    render(){
        return (
            <div>
                <h2>Edit Customer</h2>
                {Object.keys(this.state.contact).length!==0 && <Form contact={this.state.contact} handleSubmit={this.handleSubmit}/>}

            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        contact:state.contact
    }
}

export default connect(mapStateToProps)(EditContact)