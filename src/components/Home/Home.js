import React,{useState,useEffect,useContext} from 'react'
import './Home.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Home() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('/allpost',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        setData(Object.values(result));
    })
 },[])

  return (
    <div className="home">
      {
        data && data.map(item=>{
          return(
            <div className="container" key={item._id}>
      <div className="image-row">
        <div className="image-card">
          <img
            src={item.image}
            alt="Image 1"
            className="image"
          />
          <div className="image-title">{item.caption}</div>
          <div className="profile-info">
            <div className="username">{item.postedBy && item.postedBy.username}</div>
          </div>
          
        </div>
      </div>
    </div>
          )
        })
      }
    
                   
       
    </div>
  );
}

export default Home;
