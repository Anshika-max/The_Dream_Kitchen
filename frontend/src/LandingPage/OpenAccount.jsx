import React from 'react';
import { Link } from "react-router-dom";
 function OpenAccount() {
    return ( 
            <div className='container p-5'>
            <div className='row text-center'>
            <h1 className='mt-5 mb-3' style={{color: "#424242"}}>
            Like Our Product ?
            </h1>
            <p className='fs-5 mb-5' style={{color: "#666"}}>
            Treat yourself to your favourite and Delicious Dream_Kitchen's products or surprise your loved ones your treat.
            </p>
                <Link to="/SignUp">
                   <button style={{width:"20%",margin:"0 auto",backgroundColor:"#387ed1"}} className='fs-5 p-2 btn btn-primary'>Order Online</button> 
                </Link>
            </div>
        </div>
     );
 }
 
 export default OpenAccount;