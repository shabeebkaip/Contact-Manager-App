import React from 'react'
//  import axios from '../../config/axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startSetUserRegister } from '../../actions/user'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        console.log('formData',formData)
        this.props.dispatch(startSetUserRegister(formData,this.props))
    }

    render(){
        return (
            <div className="formPositionSignUp">
                <div className="col-md-4 offset-md-4">
                <h2 className="text-center display-4 text-primary "><b>Sign Up</b></h2>
                <div className="formContainer shadow rounded">
                <form onSubmit={this.handleSubmit} className="form-group">
                <div className="p-3 mt-2">
                <label htmlFor="username" className="text-primary">Username </label>
                    <input type='text' value={this.state.username} onChange={this.handleChange} name="username" id="username" className="form-control"  placeholder="username" />
                </div>
                <div className="p-3 mt-2">
                <label htmlFor="email" className="text-primary">Email </label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email" id="email" className="form-control" placeholder="email" />
                </div>
                <div className="p-3">
                <label htmlFor="password" className="text-primary">Password </label>
                    <input type='password'value={this.state.password} onChange={this.handleChange}  name="password" id="password" className="form-control" placeholder="password" />
                </div>
                <div className="p-3 ">
                <input type='submit' value="sign up" className="btn btn-primary" />
                </div>
                <div className="signup">
                <p className="text-center ">Already have an account? <Link to='/users/login'>Login</Link></p><br/>
                </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}

export default connect()(Register);