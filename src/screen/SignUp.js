import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

import '../css/Signup_Login.css'
import '../css/style.css'
export default function SignUp() {
    const navigate = useNavigate();
    
    const [Email, setEmail] = useState("");
    const [Password, setpass] = useState("");
    const [Firstname,setfirstname]=useState('');
    const [Secondname,setsecondname]=useState("");
    const [UserName,setUserName]=useState("");
    const [Mobile,setMobile]=useState(0);
    
    const newAccount = async (e) => {
        e.preventDefault();
        console.log(Email);
        console.log(Password);
        console.log(Secondname)

      const res= await fetch("/signup",{
            method:"POST",
            crossDomain:true,
            headers:{
                "content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                Email,
                Password,
                Firstname,
                Secondname,
                UserName,
                Mobile
            }),

        })
        const data=res.json();
        console.log(data.status)
        if(data.status===422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert ("Registraion successful")

            navigate('/login')
        }
        // createUserWithEmailAndPassword(auth, Email, Password).then((userCredenial) => {
        //     console.log(userCredenial);
        //     alert('Account created succesfully')
        // }).catch((error) => {

        //     alert(error);
        // })
    }
    return (
        <>
            <header>
                <h1 class="titleh1">Verse Sports Store</h1>
            </header>
            {/* <nav>
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li><a href="prodlist.html">Product List</a></li>
                    <li><a href="createNew.html">Create New Product</a></li>
                    <li><a href="aboutus.html">About us</a></li>
                </ul>
            </nav> */}
            <main>
                <div class="Signupbox">
                    <div class="Signuppage">
                        <h2 class="Loginheading">Verse Sports Store Signup Page</h2>
                    </div>
                    <div>
                        <form onSubmit={newAccount} method='Post'>
                            <div class="Names">
                                <label class="Sportsfirstname" for="firstname">First Name:</label>
                                <div>
                                    <input type="text" class="usertextboxsize" id="firstname" name="firstname" 
                                    onChange={(e) => {
                                        setfirstname(e.target.value);
                                    }} required />
                                </div>
                            </div>
                            <div class="Names">
                                <label for="lastname">Last Name:</label>
                                <div>
                                    <input type="text" class="usertextboxsize" id="lastname" name="lastname"
                                    onChange={(e) => {
                                        setsecondname(e.target.value);
                                    }} required />
                                </div>
                            </div>
                            <div class="Names">
                                <label for="username">Username:</label>
                                <div>
                                    <input type="text" class="usertextboxsize" id="username" name="username" 
                                    onChange={(e) => {
                                        setUserName(e.target.value);
                                    }}
                                     required /><br />
                                </div>
                            </div>
                            <div class="Names">
                                <label for="pass" >Password:</label>
                                <div>
                                    <input type="password" value={Password} class="pwdtextboxsize" id="pass" name="pwd"
                                        onChange={(e) => {
                                            setpass(e.target.value);
                                        }} required /><br />
                                </div>
                            </div>
                            <div class="Names">
                                <label for="email">Email:</label>
                                <div>
                                    <input type="email" value={Email} class="mailtextboxsize" id="email" name="email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} required /><br />
                                </div>
                            </div>
                            <div class="Names">
                                <label for="phone">Phone:</label>
                                <div>
                                    <input type="number" value={Mobile} class="mailtextboxsize" id="phone" name="email"
                                        onChange={(e) => {
                                            setMobile(e.target.value);
                                        }} required /><br />
                                </div>
                            </div>
                            <div class="Submitbtn">
                                <button type="submit" >SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
           <Footer/>
        </>
    )
}
