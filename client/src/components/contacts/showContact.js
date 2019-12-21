import React from 'react'
import axios from '../../config/axios'
import {Link } from 'react-router-dom'
import img from '../../images/58637085-cartoon-avatar-man-with-brown-hair-wearing-eyeglasses-front-view-over-isolated-background-vector-ill.jpg'



class ShowContact extends React.Component{
    constructor(){
        super()
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
            
            const contact=response.data
            this.setState({contact})
        })
        .catch(err=>{
            alert(err)
        })
    }

    handleRemove=()=>{
        const remove=window.confirm('are you sure?')
            if(remove){
        const id=this.props.match.params.id
        axios.delete(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            
            this.props.history.push('/contacts')
            
        })
        .catch(err=>{
            alert(err)
        })
    }
    }

    backHandle=()=>{
        this.props.history.push('/contacts')
    }
    render(){
        console.log(this.props.match.params.id)
        return (
            <div className="col-md-6 offset-md-3 contactContainer shadow rounded mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                <img src={img} alt="contact-image" width="150" height="150" className="rounded-circle  contactImagePosition" />
                </div>
                </div>
                <hr/>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="mt-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.state.contact.name} className="form-control"  disabled={true}/>
                    </div>
                    <div className="mt-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={this.state.contact.email} className="form-control" disabled={true} />
                    </div>
                    <div className="mt-3">
                    <label htmlFor="mobile">Contact</label>
                    <input type="text" id="mobile" value={this.state.contact.mobile} className="form-control" disabled={true} />
                    </div>
                    <div className="mt-3 mb-3">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" value={this.state.contact.category} className="form-control" disabled={true} />
                    </div>
                    <div className="mb-5">
                    <button className="btn btn-secondary" ><Link to={`/contacts/edit/${this.props.match.params.id}`} className="text-white">Edit</Link></button>
                    <button className="btn btn-danger float-right" onClick={this.handleRemove} >delete</button>
                    </div>
                </div>
            </div>    

            </div>
        )
    }
}
export default ShowContact