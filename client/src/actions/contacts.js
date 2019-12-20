import axios from '../config/axios'

export const setAddContact = (contact)=>{
    return {
        type: "SET_ADD_CONTACT",
        payload: contact
    }
}

 export const startAddContact = (FormData,props)=>{
    return (dispatch)=>{
        axios.post('/contacts', FormData,{
            headers:{
                "x-auth":localStorage.getItem('authToken')
            }
        })
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else {
                const contact = response.data
                props.history.push('/contacts')
                dispatch(setAddContact(contact))
                }
            })
            .catch((err)=>{
                alert(err)
            })
    }
}

export const startEditContact = (formData,props)=>{
    return(dispatch)=>{
        const id = props.match.params.id
        axios.put(`/contacts/${id}`,formData,{
            headers:{
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else {
                props.history.push('/contacts/response.data._id')
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }
}
export const gettingContact = (contact)=>{
    return {
        type: "GETTING_CONTACT",
        payload: contact
    }
}
export const startGettingContact = (props)=>{
    return(dispatch)=>{
        const id = props.match.params.id
        axios.get(`/contacts/${id}`,{
            headers:{
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contact = response.data
            dispatch(gettingContact(contact))
        })
    }
}
export const gettingAllContacts = (contacts)=>{
    return {
        type:"GET_ALL_CONTACTS",
        payload: contacts
    }
}
export const startGettingAllContacts = ()=>{
    return(dispatch)=>{
        axios.get('/contacts',{
            headers:{
                "x-auth": localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contacts = response.data
            dispatch(gettingAllContacts(contacts))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}
