import axios from 'axios'
import React, { useState } from 'react'


function PostUser() {
const postObj={
  userId:"",
  title:"",
  body:""
}

const [data,setData]=useState(postObj)

const handleChange=(event)=>{
setData({...data,[event.target.name]:event.target.value})
}

const [display,setDisplay]=useState([])

  const handleClick=()=>{
  axios.post("https://jsonplaceholder.typicode.com/posts",data)
  .then(response=>response.data)
  .then(res=>{
    console.log(res)
    setDisplay(res)
  })

  }


  return (

<>
<form>
<div>
       <label>userID</label>
       <input type='number' onChange={handleChange} name='userId'/>
       <label>Title</label>
       <input type='text' onChange={handleChange} name='title'/>
       <label>Body</label>
       <input type='text' onChange={handleChange} name='body'/>
       <button onClick={handleClick}>Add Deta</button> 
    </div>
    </form>

    { display ?  ( <div>
<h1>New User Added:</h1>
<p>user Id : {display.userId}</p>
<p>Title : {display.title}</p>
<p>Body:{display.body}</p>
</div>):("")


}
</>   
 )
}

export default PostUser


