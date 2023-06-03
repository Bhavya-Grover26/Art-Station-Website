import React ,{useEffect,createContext,useReducer,useContext}  from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import {reducer,initialState} from './reducers/userReducer'
import Home from './components/Home/Home'
import Login from './components/Signin-Signup/Login'
import Illustration from './components/Profile/Illustration'
import Signup from './components/Signin-Signup/Signup'
import Message from './components/Message/Message'
import Notifications from './components/Notification/Notifications'
import Post from './components/Post/Post'
export const UserContext = createContext()

const Routing = ()=>{
  const navigate = useNavigate();
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      navigate('/')
    }else{
      navigate('/login')
    }
  },[])
  return(
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createpost" element={<Post />} />
        <Route path="/message" element={<Message />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    )
  }

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <Router>
    <Header />
    <Routing />
    </Router>
    </UserContext.Provider>
  )
}

export default App
