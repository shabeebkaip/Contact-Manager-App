import React from 'react'
import {connect} from 'react-redux'
import { startUserLogin } from '../../actions/user'
import {Link} from'react-router-dom'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
        console.log('formdata',formData)
        
        this.props.dispatch(startUserLogin(formData,this.props))

    }

    render(){
        return (
            <div className="formPosition">
                <div className="col-md-4 offset-md-4">
                <h2 className="text-center display-4 text-primary "><b>Login</b></h2>
                <div className="formContainer shadow rounded">
                <form onSubmit={this.handleSubmit} className="form-group">
                <div className="p-3 mt-2">
                <label htmlFor="email" className="text-primary">Email </label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email" id="email" className="form-control" placeholder="email" />
                </div>
                <div className="p-3">
                <label htmlFor="password" className="text-primary">Password </label>
                    <input type='password'value={this.state.password} onChange={this.handleChange}  name="password" id="password" className="form-control" placeholder="password" />
                </div>
                <div className="p-3 ">
                <input type='submit' value="login" className="btn btn-primary" />
                </div>
                <div className="signup">
                <p className="text-center ">Don't have an account? <Link to='/users/register'>Sign Up</Link></p><br/>
                </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}

export default connect()(Login)