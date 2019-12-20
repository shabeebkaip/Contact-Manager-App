import React from 'react'
import axios from './config/axios'


import Home from './components/common/Home'

import Login from './components/users/login'
import Register from './components/users/register'

import ContactList from './components/contacts/List'
import AddContact from './components/contacts/addContact'
import EditContact from './components/contacts/editContact'
import ShowContact from './components/contacts/showContact'
import PrivateRoute from './PrivateRoute/privateRoute'


import './App.css'

import {BrowserRouter , Route,Link ,Switch} from 'react-router-dom'
function handleClick(){
  axios.delete('/users/logout',{
    headers:{
      'x-auth':localStorage.getItem('authToken')
    }
  })
  .then(response=>{
    alert(response.data.notice)
    localStorage.removeItem('authToken')
    window.location.href='/'
  })
}

export default function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand display-4" to="/">Contact-Manager</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li  className="nav-item lialign"><Link to='/'>Home</Link></li>
    {
        localStorage.getItem('authToken')?(
          <div>
            <li className="nav-item lialign"><Link to='/contacts' >Contacts</Link></li>
            <li className="nav-item lialign"><Link to='#' onClick={handleClick} >logout</Link></li>
          </div>):(<div>
            <li className="nav-item lialign"><Link to='/users/register' >register</Link></li>
            <li className="nav-item lialign"><Link to='/users/login'>login</Link></li>
          </div>
        )
      }
    </ul>
    </div>
    </nav>
    {/* <div> */}
      {/* <h2>Contact Manager</h2>
      <ul>
      <li><Link to='/'>Home</Link></li>
      {
        localStorage.getItem('authToken')?(
          <div>
            <li><Link to='/contacts'>Contact</Link></li>
            <li><Link to='#' onClick={handleClick}>logout</Link></li>
          </div>):(<div>
            <li><Link to='/users/register'>register</Link></li>
            <li><Link to='/users/login'>login</Link></li>
          </div>
        )
      } */}
      

      <Route path='/' component={Home} exact={true}/>
      <Route path='/users/register' component={Register}/>
      <Route path='/users/login' component={Login}/>

      <Switch>
      <PrivateRoute path='/contacts' component={ContactList} exact={true}/>
      <PrivateRoute path='/contacts/add' component={AddContact}/>
      <PrivateRoute path='/contacts/edit/:id' component={EditContact}/>
      <PrivateRoute path='/contacts/:id' component={ShowContact}/>
      </Switch>
      {/* </ul>
    </div> */}
    </BrowserRouter>
  )
}


