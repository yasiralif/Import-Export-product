import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import MyExportsCard from '../Components/MyExportsCard/MyExportsCard';

const MyExports = () => {
        const {user}=useContext(AuthContext)
        const [data , setMyData]=useState([])
        
        // console.log(data);
        useEffect(()=>{
            fetch(`http://localhost:3000/user-exports?email=${user.email}`)
             .then(res => res.json())
        .then(data => setMyData(data))
        .catch(err => console.error(err));
    
        },[user.email])
    return (
        <div>
            {
                data.map(d=><MyExportsCard key={d._id} d={d}></MyExportsCard>
                )
            }
            
            
        </div>
    );
};

export default MyExports;