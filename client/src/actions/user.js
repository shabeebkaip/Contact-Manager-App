import axios from '../config/axios'

// export const setUserRegister = (user)=>{
//     return {
//         type: "SET_USER_REGISTER",
//         payload: user
//     }
// }

export const startSetUserRegister = (formData, props)=>{
    return (dispatch)=> {
        axios.post('/users/register', formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    
                 //   dispatch(setUserRegister())
                    props.history.push('/users/login')
                   // window.location.reload()
                }
            })
            
    }
}
// export const setUserLogin = (user)=>{
//     return {
//         type: "SET_USER_LOGIN",
//         payload: user
//     }
// }
export const startSetUserLogin = (formData, props)=>{
    return (dispatch)=>{
        axios.post('/users/login',formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    const token = response.data.token
                    localStorage.setItem('authToken', token)
                    // dispatch(setUserLogin(token))
                    props.history.push('/')
                    window.location.reload()
                   
                }
            })
    }
}