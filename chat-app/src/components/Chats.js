import React , {useRef , useState , useEffect} from 'react'
import '../style/Chats.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

import {useAuth} from '../contexts/AuthContext'
const Chats = () => {
    const [loading , setLoading] = useState(true)
    const navigate = useNavigate()
    const {user} = useAuth()

    

    const handleLogOut = async () =>{
        await auth.signOut()

        navigate('/')
    }

    const getFile = async(url) =>{
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data] , "userPhoto.jpg" , {type : 'image/jpeg'})
    }

    useEffect(()=>{
        if(!user){
            navigate('/')
            return;
        }

        axios.get('https;//api.chatengine.io/users/me' , {
            headers : {
                "project-id" : "04c5e626-4cc3-4ee5-9b07-de2fdacd1885",
                "user-name" :user.email , 
                "user-secret" : user.uid 
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formdata = new FormData()
            formdata.append('email' , user.email)
            formdata.append('username' , user.email)
            formdata.append('secret', user.uid)

            getFile(user.photoURL)
                .then((avatar)=> {
                    formdata.append('avatar' , avatar , avatar.name)

                    axios.post('https://api.chatengine.io/users' ,
                    formdata,
                    {headers: {"private-key" : "67a61635-0a46-44c9-81cd-052e0cd42701"}}
                    )
                    .then(()=> setLoading(false))
                    .catch((error)=> console.log(error))
                })
        })
    }, [user , navigate])

    

  return (
    <div className='chats-page'>
        <div className="nav-bar">
            <div className="logo-tab">
                SkyChat
            </div>
            <div onClick={handleLogOut} className="logout-tab">
                Logout
            </div>
        </div>

        <ChatEngine 
            height="calc(100vh-66px)"
            projectID="04c5e626-4cc3-4ee5-9b07-de2fdacd1885"
            userName={user.email}
            userSecret={user.uid}
        />
    </div>
  )
} 

export default Chats