import axios from '../config/axios'



export const startSetUserRegister = (formData, props)=>{
    return (dispatch)=> {
        axios.post('/users/register', formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    props.history.push('/users/login')
                }
            })
            
    }
}

export const startSetUserLogin = (formData, props)=>{
    return (dispatch)=>{
        axios.post('/users/login',formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    const token = response.data.token
                    localStorage.setItem('authToken', token)
                    
                    props.history.push('/')
                    window.location.reload()
                   
                }
            })
    }
}