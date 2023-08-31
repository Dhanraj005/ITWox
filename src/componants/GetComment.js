// import React, { useState ,useEffect} from 'react'
// import axios from 'axios'
// import Table from 'react-bootstrap/Table';



// const GetComment = () => {

// const[comment,setComment]=useState([])

//     useEffect(() => {
//         axios
//           .post(" https://jsonplaceholder.typicode.com/posts/1/comments")
//           .then((response) => response.data)
//           .then((res) => {
//             setComment(res);
//           });
//       }, []);

//       console.log(setComment)
//   return (
    
    
    
//     <>
//     <Table striped="columns">
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th > Name</th>
//           <th>Email</th>
//           <th>Body</th>
          
//         </tr>
//       </thead>
//       <tbody>
//        {comment.map((el,i)=>(
//         <tr>
            
//         </tr>
//        ))}
        
//       </tbody>
//     </Table>
//     </>
//   )
// }

// export default GetComment