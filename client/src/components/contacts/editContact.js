import React from 'react'
import axios from '../../config/axios'
import Form from './Form'

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
export default EditContact