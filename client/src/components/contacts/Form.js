import React from 'react'
import img from '../../images/58637085-cartoon-avatar-man-with-brown-hair-wearing-eyeglasses-front-view-over-isolated-background-vector-ill.jpg'

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.contact ? props.contact.name:'',
            email:props.contact ? props.contact.email:'',
            mobile:props.contact ? props.contact.mobile:'',
            category:props.contact ? props.contact.category:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            category:this.state.category,
        }
        // console.log(formData)
        this.props.handleSubmit(formData)
    }

    render(){
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
                <form onSubmit={this.handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.state.name} className="form-control" onChange={this.handleChange} name="name" placeholder="name" />
                    </div>
                <div className="mt-3">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={this.state.email} className="form-control" onChange={this.handleChange} name="email" placeholder="email" />
                </div> 
                <div className="mt-3">
                <label htmlFor="mobile">Contact</label>
                <input type="text" id="mobile" value={this.state.mobile} className="form-control" onChange={this.handleChange} name="mobile" placeholder="mobile number" />
                </div> 
                <div className="mt-3">
                    <label htmlFor="category">Category</label> &nbsp;
                    <input type="radio" value="home" name="category" onChange={this.handleChange} /> Home  &nbsp;
                    <input type="radio" value="work" name="category" onChange={this.handleChange} /> Work
                </div>
                <div className="mt-3 mb-5">
                    <input type="submit" value="Add" className="btn btn-success" />
                </div>
                </form>
                </div>
                </div>
                </div>
        
            
            
        )
    }
}

