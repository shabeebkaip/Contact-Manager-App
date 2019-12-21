import React from 'react'
import axios from '../../config/axios'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { startGettingAllContacts} from '../../actions/contacts'

 class ContactList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contacts:[],
            copy:[],
            text:''
        }
    }

    componentDidMount(){
        this.props.dispatch(startGettingAllContacts())

    }
    handleChange=(e)=>{
        const text=e.target.value
        this.setState({text})
    }

    handleSearch=()=>{
        this.state.contacts=this.state.copy
    const contacts=this.state.contacts.filter(conc=>conc.name==this.state.text)
    this.setState({contacts})
    }

    render(){
        console.log('props', this.props.contacts)
        return(
            <div className="col-md-6 offset-md-3">
                <h2 className="text-center ">Total Contacts-{this.props.contacts.length}</h2>
                <div className="text-center">
                <input type='text' value={this.state.text} onChange={this.handleChange} className="form"/> <button onClick={this.handleSearch} className="btn btn-primary">Search</button>
                </div>
                <hr/>
            
                <table className="table table-striped">
                <thead>
                        <tr >
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact)=>{
                                return (
                                 
                                        <tr>
                                            
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.mobile}</td>
                                            <td>{contact.category}</td>
                                            <td><button className="btn btn-white"><Link to={`/contacts/${contact._id}`} className="text-decoration-none" >Show</Link></button></td>
                                        </tr>
                                
                                )
                            })
                        }
                    </tbody>
                </table>

                <button className="btn btn-primary"><Link to='/contacts/add' className="text-decoration-none text-white">Add Contact</Link></button>
                <hr/>
                
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        contacts: state.contacts
    }
}
export default connect(mapStateToProps)(ContactList)
