import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Nav(){

    const navigate = useNavigate();

    const baseURL = "https://fakestoreapiserver.reactbd.com/products";
    const [Products, setpro] = useState([]);


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setpro(response.data);
            console.log(Products);
        }).catch(() => {
            alert("Page is not working.Please reload the page");
        })


    }, []);

    const cart=()=>{
        navigate("/cart");
    }

    return(

      <>
        <nav>
                <ul>
                    <li>
                        <button onClick={() => {
                            navigate('/');
                        }} >Home</button>
                    </li>
                    <li><button onClick={()=>{
                        navigate('/List')
                    }}>Product List</button></li>
                    <li><button onClick={()=>{
                        navigate('/order')
                    }}>Orders</button></li>
                    <li><button onClick={()=>{
                        navigate('/aboutus')
                    }}>About us</button></li>
                </ul>
            </nav>
</>
      
    );
}
export default Nav;